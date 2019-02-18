function generatePages(framesPerPage, numPages) {
  $('.frame').css("height", (208/framesPerPage)+"mm");
  var frame = $('.frame').clone();
  for(var i=0; i<framesPerPage-1; i++) {
    $('.page').append(frame.clone());
  }
  var page = $('.page').clone();
  for(var i=0; i<numPages-1; i++) {
    $('body').append(page.clone());
  }
}