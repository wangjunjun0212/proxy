var glob = require('../src/glob-proxy');
var path = '../data/fc';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    '/fanacing': path + '/fanacing.json',
    '/orderfinance': path + '/orderfinance.json',
    '/orderFinanceInit': path + '/orderFinanceInit.json'
  },
  'POST': {}
});
glob.initialize();
