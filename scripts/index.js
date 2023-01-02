const rate = {
  selected: 1,

  get getRate() {
    return this.selected;
  },

  set updateRate(rate) {
    this.selected = rate;
  },
};

const allRateBtns = document.querySelectorAll(
  "#one-star, #two-star, #three-star, #four-star, #five-star"
);

const starsWrapper = document.getElementById("stars-wrapper");

allRateBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    rate.getRate !== Number(this.getAttribute("data-value"))
      ? renderCard(Number(this.getAttribute("data-value")))
      : "";
    document
      .querySelector("ul")
      .setAttribute("aria-activedescendant", `${this.getAttribute("id")}`);
  });
});

const rateSelect = document.getElementById("rate-select"),
  rateView = document.getElementById("rate-view");

const submitBtn = document.getElementById("submit");

let rateStatus = document.getElementById("status");

submitBtn.addEventListener("click", () => {
  rateStatus.textContent = rate.getRate;
  rateSelect.setAttribute("data-status", "unactive");
  rateView.setAttribute("data-status", "active");
});

function renderCard(id) {
  rate.updateRate = id;
  toggleRate(rate.getRate);
  toggleStars(rate.getRate);
}

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
