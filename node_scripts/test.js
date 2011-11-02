var FS = require ('fs');

var req = require ('request');
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
                  default: '::1'})

            .usage('Usage: $0')
            .argv;

conf = JSON.parse(FS.readFileSync(flags.conf));

var apik = conf['pachube_api_key'];

console.log('Read API key \"' + apik + '\" from \'' + flags.conf + '\'.');

var url = 'http://'+ flags.host +':'+ flags.port +'';

console.log('Will try ' + url);

req(url, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log(body);
          } else if (!error) {
            console.error(util.inspect(response));
            console.error('>> Error (' + response.statusCode + ') <<');
          } else { throw error; }
});
