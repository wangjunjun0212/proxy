var glob = require('./src/glob-proxy');
var path = '/data/value';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    '/api/cms/user/getToken': path + '/token.json',
    '/api/zzyw/car/list':     path + '/cars.json',
    '/api/zzyw/getCar':       path + '/getcar.json',
    '/api/zzyw/ybfa/list':    path + '/ybfa.json'
  },
  'POST': {

  }
});
glob.initialize();
