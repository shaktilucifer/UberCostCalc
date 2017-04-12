/**
 * UberApiControllerController
 *
 * @description :: Server-side logic for managing Uberapicontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

const options = {
  url: 'https://www.reddit.com/r/funny.json',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-reddit-client'
  }
};
module.exports = {
  index: function (req, res) {


    request(options, function (err, response, body) {
      let json = JSON.parse(body);
      console.log(json);
    });
    return res.view('homepage', {
      currentDate: (new Date()).toString()
    });
  }
};

