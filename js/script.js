
/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
var quotes =[
    {"quote": "Think different.",
    "Source": "Steve Jobs",
    "citation": "Marketing Material"
    },
    {"quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Source": "Nelson Mandela",
    "citation": "Internet"
    },
    {"quote": "The way to get started is to quit talking and begin doing.",
    "Source": "Walt Disney",
    "Year" : "1993",
    "citation": "Internet"
    },
    {"quote": "Life is what happens when you're busy making other plans.",
    "Source": "John Lennon",
    "Year" : "2001",
    "citation": "Book"
    },
    {"quote": "When you reach the end of your rope, tie a knot in it and hang on.",
    "Source": "Franklin D. Roosevelt",
    "citation": "Book"
    }
  ];
  
  /***
  * `getRandomQuote` function
  ***/
  
  var quotePhrase,year,citation,randomNumber

  function getRandomQuote(){
  randomNumber=Math.floor(Math.random()*((quotes.length)-1));
  quotePhrase=quotes[randomNumber].quote;
  
  
  }
  
  /***
  * `printQuote` function
  ***/
  function printQuote(){
  let RandomQuote = getRandomQuote()
      
       let PtoHTML1="<p class='quote' >"+quotePhrase+"</p>"+"<p class='source' >"+ quotes[randomNumber].Source
       
          if(( quotes[randomNumber].citation)!=null) 
          {
            PtoHTML1 += "<span class ='citation' >" +quotes[randomNumber].citation +"</span>";
          }
          if(( quotes[randomNumber].Year)!=null)
          {
            PtoHTML1 += "<span class ='year' >" +quotes[randomNumber].Year + "</span>";
          }
              
      document.getElementById("quote-box").innerHTML=PtoHTML1;  
  
  }
  /***
  * click event listener for the print quote button
  * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);