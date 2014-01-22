
install:
	npm install
	cd test-server; npm install
	cd test-server/helpers/websocket-test-server; npm install

test:
	test-server/node_modules/.bin/mocha --reporter list tests/server/*.js
	test-server/node_modules/.bin/mocha --ignore-leaks --reporter list tests/run-browser-tests.js

run:
	@node test-server

publish:
	rm -Rf .dist
	mkdir .dist
	cp -Rf * .dist/
	cp -Rf .*ignore .dist/
	rm -Rf .dist/node_modules
	rm -Rf .dist/test-server/node_modules
	rm -Rf .dist/test-server/helpers/*/node_modules
	cd .dist; npm publish

.PHONY: install test run publish
