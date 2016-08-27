// var request = require("request"),
//     cheerio = require("cheerio");
//     //url = 'http://wwww.vittis.com.br';
//     urls = [];
//
// request('http://wwww.vittis.com.br', function(err, resp, body){
//   if (err){
//     console.log('sorry could not get page cuz of error');
//     return;
//   }
//   if(!err && resp.statusCode == 200){
//     var $ = cheerio.load(body);
//     var links = $('.entry-title a');
//     links.each(function(i, link){
//       var url = $(link).attr('href');
//       urls.push(url);
//     });
//     // $('a.title','.thing').each(function(){
//     //     var url = this.attr('href');
//     //     urls.push(url);
//     // });
//     console.log(urls);
//   }
// });

var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.vittis.com.br";
  stuff = [];

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      link = $(".entry-title a");
      link.each(function(a,b){
        var b = $(link).attr('href');
        //console.log(b);
        stuff.push(b);
      });
    console.log("The link is " + stuff);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
