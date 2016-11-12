var glob = require('../src/glob-proxy');
var path = '../data/fc';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    '/login': path + '/login.json',
    '/bu/creditApplyInit': path + '/creditApplyInit.json',
    '/ta/creditManagerInit':path+'/creditManagerInit.json',
    '/ta/creditAccoDetails':path+'/creditAccoDetails.json',
    '/ta/rece/creditManagerInit':path+'/fp-creditManagerInit.json',
    '/bu/creditApply':path+'/creditApply.json',
    '/ta/financingInfo': path + '/financingInfo.json',
    '/ta/financeList': path + '/financeList.json',
    '/ta/repayList': path + '/repayList.json',
    '/ta/acocunts': path + '/acocunts.json',
    '/gt/indexInit': path + '/fanacing.json',
    '/bu/orders': path + '/orderfinance.json',
    '/bu/orderFinanceInit': path + '/orderFinanceInit.json'
  },
  'POST': {
    // '/bu/creditApply':path+'/creditApply.json'
  }
});
glob.initialize();
