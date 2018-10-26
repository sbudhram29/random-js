var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM('').window;
global.document = document;

var $ = (jQuery = require('jquery')(window));

let results;

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    results = data.results;
  }
}).then(() => {
  for (let prop in results) {
    console.log(results[prop]);
  }
});
