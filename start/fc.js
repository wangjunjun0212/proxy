var glob = require('../src/glob-proxy');
var path = '../data/fc';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    '/fanacing': path + '/fanacing.json',
    '/orderfinance': path + '/orderfinance.json',
    '/orderFinanceInit': path + '/orderFinanceInit.json',
    '/login': path + '/login.json',
    '/financingInfo': path + '/financingInfo.json',
    '/financeList': path + '/financeList.json',
    '/repayList': path + '/repayList.json',
    '/gt/indexInit': path + '/fanacing.json',
    '/bu/orders': path + '/orderfinance.json',
    '/bu/orderFinanceInit': path + '/orderFinanceInit.json',
    '/login': path + '/login.json'
  },
  'POST': {
  }
});
glob.initialize();
