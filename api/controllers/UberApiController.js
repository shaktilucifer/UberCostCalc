/**
 * UberApiControllerController
 *
 * @description :: Server-side logic for managing Uberapicontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');
var Uber = require('node-uber');

const options = {
  url: 'https://login.uber.com/oauth/v2/authorize?client_id=XYSz&response_type=code',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
    // 'User-Agent': 'my-reddit-client'
  }
};

module.exports = {
  index: function (req, res) {


    request(options, function (err, response, body) {
      // let json = JSON.parse();
      console.log(body);
    });
    return res.view('homepage', {
      currentDate: (new Date()).toString()
    });
  }
};

