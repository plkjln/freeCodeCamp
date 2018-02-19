/*var quotes = [  
    "\"Stay Hungry. Stay Foolish. \"<br>-Steve Jobs",
    "\"Good Artists Copy, Great Artists Steal. \"<br>-Pablo Picasso",
    "\"Argue with idiots, and you become an idiot. \"<br>-Paul Graham",
    "\"Be yourself; everyone else is already taken. \"<br>-Oscar Wilde",
    "\"Simplicity is the ultimate sophistication. \"<br>-Leonardo Da Vinci", 
    "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali", 
    "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee"
  ];
function newQuote() {
    var randNum = Math.floor(Math.random() * (quotes.length)); //randomly pick a quote
    document.getElementById('quoteDsp').innerHTML = quotes[randNum];
}*/

var currQuote="",currAuthor="";
function newQuote() {
    $.ajaxSetup({ cache: false });
    $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(quoteResults) {
      
        document.getElementById('message').innerHTML =  quoteResults[0].content;
        document.getElementById('author').innerHTML = "- " + quoteResults[0].title;
      
      this.currQuote = quoteResults[0].content;
      this.currAuthor = quoteResults[0].title;
      
    });
}
