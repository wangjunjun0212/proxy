var glob = require('../src/glob-proxy');
var path = '../data/ws';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    "/trade/other": path +"/91steel.json",
    "/trade/getToday": path +"/91steel-update.json"
  },
  'POST': {

  }
});
glob.initialize();
