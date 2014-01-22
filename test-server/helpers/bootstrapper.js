
const ASSERT = require("assert");
const REQUEST = require("request");
const URL = require("url");
const SERVICE = require("./service");
const Util = require("../../lib/util");


exports.hook = function(options, app) {

	var responder = SERVICE.responder(options, getPayload);

	// `https://domain.com/.well-known/openpeer-services-get`
	// @see http://docs.openpeer.org/OpenPeerProtocolSpecification/#BootstrapperServiceRequests-ServicesGetRequest
    app.post(/^\/\.well-known\/openpeer-services-get$/, responder);
}

function getPayload(request, options, callback) {

    if (request.$handler === "bootstrapper" && request.$method === "services-get") {
		return callback(null, SERVICE.nestResponse(["services", "service"], [
            {
                "$id": "b1ad4a059d4726f563b2fb04ed061ed5b909c66b",
                "type": "bootstrapper",
                "version": "1.0",
                "methods": {
                    "method": {
                        "name": "services-get",
                        "uri": "http://" + options.host + "/services-get"
                    }
                }
            },
            {
                "$id": "4b67636b8753d0e544342b4aa25c579f6487bf71",
                "type": "certificates",
                "version": "1.0",
                "methods": {
                    "method": {
                        "name": "certificates-get",
                        "uri": "http://" + options.host + "/.helpers/certificates-get"
                    }
                }
            }
        ]));
	}
	return callback(null, null);
}
