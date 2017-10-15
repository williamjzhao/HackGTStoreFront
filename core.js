var $ = require('jQuery');

// $.ajax({
//     url: 'api.reimaginebanking.com/atms?key=bfb89f2b1bfd56ed997cf7e93471eaed',
//     success: function(results){
//         console.log(results)
//     }
// });
// // jQuery.get( "https://api.reimaginebanking.com/customers?key=bfb89f2b1bfd56ed997cf7e93471eaed");


var request = require('superagent');
request.get('http://api.reimaginebanking.com/merchants?key=bfb89f2b1bfd56ed997cf7e93471eaed').end(function(err, res){
    console.log(res.body.data[0]._id);
});

