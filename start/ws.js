var glob = require('../src/glob-proxy');
var path = '../data/ws';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    "/trade/other": path + "/91steel.json",
    "/trade/getToday": path + "/91steel-update.json",
    "/finance/other": path + "/ebaoli.json",
    "/finance/progress": path + "/ebaoli-progress.json",
    "/finance/getToday": path + "/ebaoli-update.json",
    "/dzy/getDZYScreenRightData": path + "/9156.json",
    "/dzy/getDZYScreenLeftData": path + "/9156-order.json"
  },
  'POST': {

  }
});
glob.initialize();
