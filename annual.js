var glob = require('./src/glob-proxy');
var path = '/annual_data';

glob.use('PORT', '8084');
glob.use('TYPE', 'HTTP');
glob.use('ROOT', __dirname);
glob.use('REQUEST', {
  'GET': {
    "/start": path +"/start.json",
    "/staff": path + "/staff.json",
    "/lucky": path + "/lucky.json",
    "/lottery": path + "/lotterySetting.json",
    "/luckless": path + "/luckless.json",
    "/luckylist": path + "/lucklist.json",
    "/groups": path + "/group.json",
    "/statistic": path + "/final.json",
    "/next/voting": path + "/nextVote.json",
    "/current": path + '/current.json',
    "/register": path + "/bind.json",
    "/vote/group": path + "/vote.json",
    "/vote/program": path + "/vote8.json"

  },
  'POST': {
    
  }
});
glob.initialize();