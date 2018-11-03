const chai = require('chai'),
    config = require('config'),
    expect = chai.expect,
    should = chai.should();
var request = require('request');
varconfig = require('config');
//Using config module to create a local domain
global.domain = 'http://' + config.host + ':' + config.port;
describe('---Testing the task list api---', function() {
    it('GET: Task list', function(done) {
        /**Follow the request module documentation.
         * go to : https://github.com/request/request */
        let options = {
            url: domain + '/task',
            headers: {
                "Content-Type": "application/json"
            },
            json: {
                task: "Hello world"
            }
        };
        request.post(options, function(error, response, body) {
            console.log("we got response", body);
            done();
        });
    });

    it('GET: Task list', function(done) {
        let options = {
            url: domain + '/list'
        };
        request.get(options, function(error, response, body) {
            console.log(" a teraz we got list", body);
            done();
        });
    });
});


