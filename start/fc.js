var glob = require('../src/glob-proxy');
var path = '../data/fc';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
<<<<<<< HEAD
    '/fanacing': path + '/fanacing.json',
    '/orderfinance': path + '/orderfinance.json',
    '/orderFinanceInit': path + '/orderFinanceInit.json',
    '/login': path + '/login.json',
    '/financingInfo': path + '/financingInfo.json',
    '/financeList': path + '/financeList.json',
    '/repayList': path + '/repayList.json'
=======
    '/gt/indexInit': path + '/fanacing.json',
    '/bu/orders': path + '/orderfinance.json',
    '/bu/orderFinanceInit': path + '/orderFinanceInit.json',
    '/login': path + '/login.json'
>>>>>>> cc00dad715d7a19bfdbffcb071b2554a7c2fd84e
  },
  'POST': {
  }
});
glob.initialize();
