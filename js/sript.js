//Slick slider

$(document).ready(function(){
  $('.top-sellers__slider').slick({
    infinit: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

$('.top-sellers .tabs__btn').on('click', function(){
  $('.top-sellers .tabs__btn').removeClass('tabs__btn--active');
  $(this).addClass('tabs__btn--active');
  let filterClass = $(this).data('filter');
  console.log(filterClass);
  $('.top-sellers__slider').slick('slickUnfilter');
  $('.top-sellers__slider').slick('slickFilter', filterClass);
})


$(document).ready(function(){
  $('.trending-earphones__slider').slick({
    infinit: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

$('.trending-earphones .tabs__btn').on('click', function(){
  $('.trending-earphones .tabs__btn').removeClass('tabs__btn--active');
  $(this).addClass('tabs__btn--active');
  let filterClass = $(this).data('filter');
  console.log(filterClass);
  $('.trending-earphones__slider').slick('slickUnfilter');
  $('.trending-earphones__slider').slick('slickFilter', filterClass);
})

$(document).ready(function(){
  $('.new-launches__slider').slick({
    infinit: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
})


const ratings = document.querySelectorAll('.rating');

if(ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for(let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);

    setRatingActionWidth(); 

    if (rating.classList.contains('rating--set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  function setRatingActionWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = document.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener("mouseenter", (e) => {
        initRatingVars(rating);
        setRatingActionWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", (e) => {
        setRatingActionWidth();
      });
      ratingValue.addEventListener("click", (e) => {
        initRatingVars(rating);
        ratingValue.innerHTML = index + 1;
        setRatingActionWidth();
      });
    }
  }
}

