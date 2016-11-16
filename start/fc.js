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
    '/ta/repayManager': path + '/repayManager.json',
    '/ta/finaAppManager': path + '/finaAppManager.json',
    '/ta/finacialInfo': path + '/finacialInfo.json',
    '/ta/payList': path + '/payList.json',
    '/ta/receiveList': path + '/receiveList.json',
    '/ta/creditList': path + '/creditList.json',
    '/ta/payManagerInit': path + '/payManagerInit.json',
    '/ta/financeOrders': path + 'financeOrders.json',
    '/ta/receiveManagerInit': path + '/receiveManagerInit.json',
    '/ta/repayPlans': path + 'repayPlans.json',
    '/gt/indexInit': path + '/fanacing.json',
    '/bu/orders': path + '/orderfinance.json',
    '/bu/orderFinanceInit': path + '/orderFinanceInit.json',
    '/ta/enteMembers': path + '/enteMembers.json',
    '/ta/rece/creditAccoDetails': path + '/fp-creditAccoDetails.json'
  },
  'POST': {
    '/bu/creditApply': path+'/creditApply.json'
  }
});
glob.initialize();
