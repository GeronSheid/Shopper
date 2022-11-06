//Slick slider

$(document).ready(function(){
  $('.slider').slick({
    infinit: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

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

const tabsButtons = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content');

tabsButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsButtons.forEach((btn) => {
      btn.classList.remove('tabs__btn--active');
    });
    
    e.currentTarget.classList.add('tabs__btn--active');

    tabsContent.forEach((element) => {
      element.classList.remove('tabs__content--active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active')
    $('.slider').slick('refresh');
  });
});