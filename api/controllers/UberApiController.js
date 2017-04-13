/**
 * UberApiControllerController
 *
 * @description :: Server-side logic for managing Uberapicontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');
var Uber = require('node-uber');

const options = {
  url: '/api/login',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
    // 'User-Agent': 'my-reddit-client'
  }
};
var uber = new Uber({
  client_id: 'CLIENT_ID',
  client_secret: 'CLIENT_SECRET',
  server_token: 'SERVER_TOKEN',
  redirect_uri: 'REDIRECT URL',
  name: 'APP_NAME',
  language: 'en_US', // optional, defaults to en_US
  sandbox: true // optional, defaults to false
});
module.exports = {
  index: function (req, res) {
    request(options, function (err, response, body) {
      // let json = JSON.parse();
      var url = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
         console.log(url);

     return response.redirect(url);
      console.log(body);
    });
    // return res.view('homepage', {
    //   currentDate: (new Date()).toString()
    // });
  }
};

