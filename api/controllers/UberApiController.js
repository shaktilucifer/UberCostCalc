/**
 * UberApiControllerController
 *
 * @description :: Server-side logic for managing Uberapicontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

// module.exports = {
//     uberApi: function(req,res){
//         var http = require('http'), options = {
//                 host : "graph.facebook.com",
//                 port : 80,
//                 path : "/"+other.uid+"/likes?access_token="+other.token,
//                 method : 'GET'
//             };
//     }


// };

module.exports = {
  index: function (request, response) {
    return response.view('homepage', {
      currentDate: (new Date()).toString()
    });
  }
};

