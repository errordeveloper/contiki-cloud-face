var FS = require ('fs');

var http = require ('http');
var util = require ('util');
var flags = require ('optimist')

            .options('conf',
                { describe: 'configuration file to use',
                  alias: [ 'c' ],
                  demand: true })

            .options('port',
                { describe: 'server port to connect to',
                  alias: [ 'p' ],
                  default: 82 })

            .options('host',
                { describe: 'server host to connect to',
                  alias: [ 'h' ],
                  default: 'localhost'})

            .usage('Usage: $0')
            .argv;

// If local proxy is in use, it should have the API key already!
if ( flags.host !== 'localhost' ) {

  conf = JSON.parse(FS.readFileSync(flags.conf));

  var apik = conf['pachube_api_key'];

  console.log('Read API key \"' + apik + '\" from \'' + flags.conf + '\'.');

}



var opt = {
  host: flags.host,
  port: flags.port,
  path: '/',
  //method: 'GET',
  agent: false
};


console.log('GET http://'+ opt.host +':'+ opt.port + opt.path);

http.get(opt, function(res) {

    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + util.inspect(res.headers));
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
