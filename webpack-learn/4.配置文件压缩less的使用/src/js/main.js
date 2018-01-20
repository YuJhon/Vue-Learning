var add = require('./calc.js');
require('../statics/less/site.less');

var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var bt = document.querySelector('#bt');
var res = document.querySelector('#res');

bt.onclick = function() {
    var v1Val = parseFloat(v1.value);
    var v2Val = parseFloat(v2.value);

    res.value = add(v1Val, v2Val);
}