$("#arr-next").click(function(){
  if($("div.c-active").next().hasClass('c-slide')) {
    $("div.c-active").removeClass("c-active").next().addClass("c-active");
  } else {
    $("div.c-active").removeClass("c-active");
    $(".c-slide").first().addClass("c-active");
  }
syncSlider();
})
$("#arr-prev").click(function(){
  if($("div.c-active").prev().hasClass('c-slide')) {
    $("div.c-active").removeClass("c-active").prev().addClass("c-active");
  } else {
    $("div.c-active").removeClass("c-active");
    $(".c-slide").last().addClass("c-active");
  }
syncSlider();
})
function getIndexes () {
  const slidesCount = $(".c-slide").length;
  let init = $(".c-slide").last();
  for(let i = slidesCount; i > 0; i--) {
    init.attr('slide-id', i);
    init = init.prev();
  }
}
getIndexes();

function renderNav() {
  const size = $(".c-slide").length;
  for(let i = size; i > 0; i--) {
    $(".custom-metrica").append(`<button class="fast-nav" slide-id="${size + 1 - i}"></button>`);
  }
  $(".fast-nav").last().addClass('active-slide-nav');
}
renderNav();

function syncSlider() {
  const currentSlide = $(".c-active").attr('slide-id');
  const currentNavBtn = $(".active-slide-nav").attr('slide-id');
  console.log(1);
  if(currentSlide !== currentNavBtn) {
    console.log(2);
    
    $(".active-slide-nav").removeClass($(".active-slide-nav"));
    $(".fast-nav").filter(function(index, e) {
      return $(e).attr('slide-id') === currentNavBtn;
    }).addClass("active-slide-nav");
  }
  return true;
}