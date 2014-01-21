
const SERVER = require("../test-server/server");
const GRUNT = require("../test-server/node_modules/grunt");


describe("run-ui-tests", function() {

    it("grunt-phantomjs", function(done) {

        this.timeout(120 * 1000);

        return SERVER.main(function(err, info) {
            if (err) return done(err);

            GRUNT.initConfig({
                mocha: {
                    all: {
                        options: {
                            reporter: "List",
                            urls: [
                                //"http://localhost:" + info.port + "/test/flow/10-ConnectToFinder"
                                "http://localhost:" + info.port + "/test"
                            ],
                            // PhantomJS options
                            "--ignore-ssl-errors": "yes"
                        }
                    }
                }
            });

            GRUNT.loadNpmTasks("../test-server/node_modules/grunt-mocha");

            GRUNT.registerInitTask('default', function() {
                GRUNT.task.run(["mocha"]);
            });
            return GRUNT.tasks(['default'], {
                debug: false
            }, function(err) {
                if (err) return done(err);
                return info.server.close(function() {
                    return done(null);
                });
            });
        });
    });

});
