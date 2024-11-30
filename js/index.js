
var quotes=[
"“Be yourself; everyone else is already taken.”― Oscar Wilde" ,
'“So many books, so little time.” ― Frank Zappa' ,
 "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
 "“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde" ,
 "“It is better to be hated for what you are than to be loved for what you are not.”― Andre Gide, Autumn Leaves",
 "“Insanity is doing the same thing, over and over again, but expecting different results.”― Narcotics Anonymous",
 "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”― Ralph Waldo Emerson"
]

function quote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[randomNumber];    
    document.getElementById('para').innerHTML= selectedQuote;

    // quotes.splice(randomNumber,1);
    console.log(randomNumber);
    

}
