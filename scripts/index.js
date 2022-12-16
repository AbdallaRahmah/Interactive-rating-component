let activeRate = 1;

const allRateBtn = document.querySelectorAll(
  "#one-star, #two-star, #three-star, #four-star, #five-star"
);

const starsWrapper = document.getElementById("stars-wrapper");

allRateBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.textContent !== activeRate) {
      activeRate = this.textContent;
      rateStatus.textContent = activeRate;
      toggleRate(activeRate);
      toggleStars(activeRate);
    }
  });
});

const rateSelect = document.getElementById("rate-select"),
  rateView = document.getElementById("rate-view");

const submitBtn = document.getElementById("submit");

let rateStatus = document.getElementById("status");

submitBtn.addEventListener("click", () => {
  rateSelect.classList.add("d-none");
  rateView.classList.remove("d-none");
});

function toggleRate(id) {
  allRateBtn.forEach((btn) => btn.classList.remove("active"));
  allRateBtn[id - 1].classList.add("active");
}

function toggleStars(num) {
  starsWrapper.innerHTML = "";
  for (let counter = 1; counter <= num; counter++) {
    let wrapper = createWrapper();
    starsWrapper.append(wrapper);
  }
}

function createWrapper() {
  let wrapper = document.createElement("div");
  let img = document.createElement("img");
  wrapper.classList.add("star");
  wrapper.classList.add("circle");
  img.setAttribute("src", "images/icon-star.svg");
  img.setAttribute("alt", "star");
  wrapper.append(img);
  return wrapper;
}
