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
    '/bu/creditApplyInit': path + '/creditApplyInit.json',
    '/ta/creditManagerInit':path+'/creditManagerInit.json',
    '/ta/creditAccoDetails':path+'/creditAccoDetails.json',
    '/ta/rece/creditManagerInit':path+'/fp-creditManagerInit.json',
    '/bu/creditApply':path+'/creditApply.json'
  },
  'POST': {
    // '/bu/creditApply':path+'/creditApply.json'
  }
});
glob.initialize();
