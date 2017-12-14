const glob = require('../../src/');
const path = '../mock/demo';

glob.set('REQUEST', {
  'GET': {
    '/api/start': path + '/start.json'
  },
  'POST': {
    '/api/login': path + '/login.json'
  }
});
glob.init();
