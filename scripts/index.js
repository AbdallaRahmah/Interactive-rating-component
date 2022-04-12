let allRateArr = document.querySelectorAll(`.rate`);

let selectedRate = document.querySelector(`.active`).innerHTML;

let rated = (userRate) => {
  allRateArr.forEach((rate) => {
    rate.classList.remove(`active`);
  });

  document.getElementById(userRate).classList.add(`active`);

  selectedRate = document.getElementById(userRate).innerHTML;

  document.getElementById(`select`).innerHTML = selectedRate;

//   adding the rating stars
ratingStars(selectedRate);
};

// adding rate stars func
let ratingStars = (selectedRate) => {
    let delStars = document.querySelectorAll(`.star`);

    delStars.forEach((star) => {
        star.remove();
    })

    for (let counter = 1; counter <= selectedRate; counter++) {
        let imgEl = document.createElement(`img`);
    
        imgEl.src = `images/icon-star.svg`;
    
        imgEl.setAttribute(`alt`, `star`);
    
        let imgCo = document.createElement(`div`);
    
        imgCo.classList.add(`star`);
    
        imgCo.append(imgEl);
    
        document.querySelector(`.card__stars`).append(imgCo);
      }
}

// submit event
let submitBtn = document.querySelector(`.card--submit`);

submitBtn.addEventListener(`click`, () => {
  document.getElementById(`select`).innerHTML = selectedRate;

  document.getElementById(`inter`).style.display = `none`;

  document.getElementById(`msg`).style.display = `flex`;
});
