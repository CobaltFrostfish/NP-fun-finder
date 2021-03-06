var showEl= document.getElementById('searchBtn');

let map;

function initMap(){
  map = new google.maps.Map(document.getElementById('map'),{
    center: { lat:44.6969444, lng:-118.0186111 },
    zoom:12,
  });
}


showEl.addEventListener('click',function(){
  showMap();
})

function showMap(){
  
  document.getElementById('map').style.display='block';
}

//kendra's-work
//Random Quote Generator
$(document).ready(function() {
  var quotes = [{
      "quote": "We have fallen heirs to the most glorious heritage a people ever received, and each one must do his part if we wish to show that the nation is worthy of its good fortune. -Theodore Roosevelt",
      "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
  }, {
      "quote": "The farther one gets into the wilderness, the greater is the attraction of its lonely freedom. -Theodore Roosevelt",
      "background": "https://cdn.govexec.com/media/img/upload/2017/07/05/18499283513_1845c5b206_o_thzUCMI/860x394.jpg"
  }, {
      "quote": "This country will not be a permanently good place for any of us to live in unless we make it a reasonably good place for all of us to live in. -Theodore Roosevelt",
      "background": "https://wikitravel.org/upload/shared//6/66/United_States_National_Parks_Banner.jpg"
  }, {
      "quote": "Life is a great adventure … accept it in such a spirit. -Theodore Roosevelt",
      "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
  }, {
      "quote": "If future generations are to remember us with gratitude rather than contempt, we must leave them something more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through it. -Lyndon B. Johnson",
      "background": "https://www.nps.gov/romo/learn/nature/images/Geology_Banner_688x200_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false"
  }, {
      "quote": "In wilderness is the preservation of the world. -Henry David Thoreau",
      "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
  }, {
      "quote": "National parks are the best idea we ever had. Absolutely American, absolutely democratic, they reflect us at our best rather than our worst. -Wallace Stegner",
      "background": "https://wikitravel.org/upload/shared//6/66/United_States_National_Parks_Banner.jpg"
  }, {
      "quote": "The parks are the Nation's pleasure grounds and the Nation's restoring places.... The national parks...are an American idea; it is one thing we have that has not been imported. -J. Horace McFarland",
      "background": "https://upload.wikimedia.org/wikipedia/commons/3/35/United_States_National_Parks_banner_Bryce_Canyon_National_Park.jpg"
  }];

  function getQuote() {
      var randomIndex = Math.floor(Math.random() * quotes.length);
      var selectedQuote = quotes[randomIndex];

      $('#random-quote').text(selectedQuote.quote);
      var selectedBG = selectedQuote.background;
      console.log(selectedBG);
      $("#random-quote").css("background-image", "url('" + selectedBG + "')");
  }
  
  $('#random-quote').click(getQuote);
  getQuote();
});