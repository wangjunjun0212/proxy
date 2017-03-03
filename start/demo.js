var glob = require('../src/glob-proxy');
var path = '../data/demo';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    '/start': path + '/start.json',
    '/login': path + '/login.json'
  },
  'POST': {
    '/login': path + '/login.json'
  }
});
glob.initialize();
