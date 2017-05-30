/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})


/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})

/*$(window).scroll(function(){ need a fix for this
    var fromTop = $(window).scrollTop();
    var hei = $(".nv").height() + $(".jumbotron").outerHeight();
    if (fromTop > hei)
      $(".content").css("margin-top", "70px");
    else 
      $(".content").css("margin-top", "0px");
});*/

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
}); 

function addRow(entry, count)
{  
  var table = document.getElementById("catalogue");
  var row = table.insertRow(count);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
                  
  cell1.innerHTML = count;
  cell2.innerHTML = "<img src=" + entry.fields.image + "></img>";
  cell3.innerHTML = entry.fields.Title;
  cell4.innerHTML = entry.fields.Author;
  cell5.innerHTML = entry.fields.Genre;
}

function cat_search(concept, que){
  document.getElementById("catalogue").innerHTML = "<tr><thead><th>#</th><th>Cover</th><th>Title</th><th>Author</th><th>Genre</th></thead></tr>";
  console.log(concept);
  console.log(que);
  var query = new RegExp(que, "i");
  var count = 1;
  $.ajax({
          dataType: "json",
          url: "./data.json",
          mimeType: "application/json",
          success: function(result){
            var len = result.length;
            var table = document.getElementById("catalogue");
            var count = 1;
            if (concept == "Title" || concept == "Filter by"){
              for (var index = 0; index < len; index++) {
                if ((result[index].fields.Title).search(query) !== -1)
                  {addRow(result[index], count); count++}
              }
            }
            if (concept == "Author" || concept == "Filter by"){
              for (var index = 0; index < len; index++) {
                if ((result[index].fields.Author).search(query) !== -1)
                  {addRow(result[index], count); count++}
              }
            }
            if (concept == "Genre" || concept == "Filter by"){
              for (var index = 0; index < len; index++) {
                if ((result[index].fields.Genre).search(query) !== -1)
                  {addRow(result[index], count); count++}
              }
            } 
        }
      }); 
}

//Search bar
$(document).ready(function(e){
    var concept = $('span#search_concept').text();
    if ((window.location.pathname).indexOf("catalogue") != -1)
    {
      var con = sessionStorage.getItem("concept");
      var que = sessionStorage.getItem("query");
      cat_search(con, que);
    }
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		  e.preventDefault();
	    var param = $(this).attr("href").replace("#","");
	    concept = $(this).text();
	    $('.search-panel span#search_concept').text(concept);
	    $('.input-group #search_param').val(param);
	  });
    $('#search-btn').click(function(){
        sessionStorage.setItem("query", $('#query').val());
        sessionStorage.setItem("concept", concept);
        if ((window.location.pathname).indexOf("catalogue") == -1)
          window.location.assign("./catalogue.html");
        else
          cat_search(concept, $('#query').val());
    });
  });
    
  
/*
//For new carousel
$(document).ready(function(){
          $('.carousel').carousel();
});*/