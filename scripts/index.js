const rate = {
  selected: 1,
};

const allRateBtns = document.querySelectorAll(
  "#one-star, #two-star, #three-star, #four-star, #five-star"
);

const starsWrapper = document.getElementById("stars-wrapper");

allRateBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.value !== rate.selected) {
      rate.selected = this.value;
      toggleRate(rate.selected);
      toggleStars(rate.selected);
    }
  });
});

const rateSelect = document.getElementById("rate-select"),
  rateView = document.getElementById("rate-view");

const submitBtn = document.getElementById("submit");

let rateStatus = document.getElementById("status");

submitBtn.addEventListener("click", () => {
  rateStatus.textContent = rate.selected;
  rateSelect.setAttribute("data-status", "unactive");
  rateView.setAttribute("data-status", "active");
});

function toggleRate(id) {
  allRateBtns.forEach((btn) => btn.setAttribute("aria-checked", "false"));
  allRateBtns[id - 1].setAttribute("aria-checked", "true");
}

function toggleStars(num) {
  starsWrapper.innerHTML = "";
  for (let counter = 1; counter <= num; counter++) {
    let wrapper = createWrapper();
    starsWrapper.append(wrapper);
  }
  num == 1 ? starsWrapper.setAttribute("aria-label", "1 star selected") : starsWrapper.setAttribute("aria-label", `${num} stars slected`);
}

function createWrapper() {
  let wrapper = document.createElement("div");
  let img = document.createElement("img");
  wrapper.classList.add("star");
  wrapper.classList.add("circle");
  img.setAttribute("src", "images/icon-star.svg");
  img.setAttribute("alt", "one star");
  img.setAttribute("aria-hidden", "true")
  wrapper.append(img);
  return wrapper;
}
