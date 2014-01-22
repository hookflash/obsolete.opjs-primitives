*Status: DEV*

OpenPeer JavaScript Primitives Library
======================================

This library contains the JavaScript primitives needed to build JavaScript implementations of the [OpenPeer Protocol](http://docs.openpeer.org/OpenPeerProtocolSpecification).

The library features:

  * Cryptographic compatibility with Java, PHP and C implementations.
  * Runnable in NodeJS and Browser.


Install
-------

    npm install opjs-primitives


Development
-----------

Dev UI:

    make install
    make run
    open http://localhost:8081/

Development Process:

  1. `make test` (this runs server-side and dev UI tests)
  2. Launch dev UI
  3. Run all dev UI tests
  4. Make changes
  5. Run/write individual tests to verify changes
  6. `make test`
  7. Commit


License
=======

[BSD-2-Clause](http://opensource.org/licenses/BSD-2-Clause)
