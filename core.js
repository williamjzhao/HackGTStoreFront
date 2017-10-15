var $ = require('jQuery');

// $.ajax({
//     url: 'api.reimaginebanking.com/atms?key=bfb89f2b1bfd56ed997cf7e93471eaed',
//     success: function(results){
//         console.log(results)
//     }
// });
// // jQuery.get( "https://api.reimaginebanking.com/customers?key=bfb89f2b1bfd56ed997cf7e93471eaed");


var request = require('superagent');
request.get('http://api.reimaginebanking.com/accounts?key=bfb89f2b1bfd56ed997cf7e93471eaed').end(function(err, res){
    console.log(res.body[0]._id);
});

var customer_id;
var name;

function pickDortha(){
    window.location.href = "customer.html";
    customer_id = "59e18455a73e4942cdafe19a";
    name = "Dortha Mertz";
    customer.html.getElementById('person').innerHTML = name;
}

function pickRandal(){
    window.location.href = "customer.html";
    customer_id = "59e18456a73e4942cdafe19b";
    name = "Randal Schlutz";
}

function pickDarrel(){
    window.location.href = "customer.html";
    customer_id = "59e18455a73e4942cdafe19c";
    name = "Darrel Powlowski";
}



