/* global define, suite, test, assert */
define([
  'opjs-primitives/request',
  'opjs-primitives/context',
  'opjs-primitives/util'
], function (Request, Context, Util) {

  'use strict';

  suite('Request', function () {

	  test('`/.well-known/openpeer-services-get`', function(done) {

		return Request.makeRequestTo(new Context(), "http://" + Util.getHost() + "/.well-known/openpeer-services-get", "bootstrapper", "services-get").then(function(result) {
          assert.isObject(result);
          assert.isObject(result.services);
          assert.isArray(result.services.service);
          assert.equal(result.services.service.length > 0, true);

          return done(null);
        }).fail(done);

	  });

  });
});