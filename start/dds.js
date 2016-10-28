var glob = require('../src/glob-proxy');
var path = '../data/dds';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    '/login-index': path + '/login.json',
    '/menu/select': path + '/menu.json',
    '/user/select': path + '/user.json',
    '/role/select': path + '/role.json',

    '/rule/select': path + '/rule.json',
    '/rule/detail/1': path + '/ruleDetail.json',

    '/provinces/select': path + '/provinces.json',

    '/permission/select': path + '/permission.json',


    '/driver/select': path + '/driver.json',

    '/customer/select': path + '/customer.json',

    '/order/select': path + '/order.json',
    '/order/synchOrder': path + '/synchOrder.json',
    '/order/statis': path + '/statis.json',
    '/logout': path + '/signOut.json',

    '/template/select': path + '/template.json',
    '/template/detail/1': path + '/tempDetail.json'

  },
  'POST': {
    '/template/add': path + '/template.json',
    '/template/edit/1': path + '/template.json',
    '/template/delete/1': path + '/template.json',

    '/driver/add': path + '/driver.json',
    '/driver/edit/1': path + '/driver.json',
    '/driver/delete/1': path + '/driver.json',

    '/customer/edit/1': path + '/customer.json',

    '/password/change': path + '/editPassword.json',
    '/user/add': path + '/user.json',
    '/user/edit/1': path + '/user.json',
    '/user/edit/2': path + '/user_err.json',
    '/user/delete/1': path + '/user.json',

    '/role/add': path + '/role.json',
    '/role/edit/1': path + '/role.json',
    '/role/delete/1': path + '/role.json',

    '/rule/add': path + '/rule.json',
    '/rule/edit/1': path + '/rule.json',
    '/rule/delete/1': path + '/rule.json'
  }
});
glob.initialize();
