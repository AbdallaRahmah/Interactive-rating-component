let activeRate = 1;

const allRateBtn = document.querySelectorAll('.rate-btn');

const starsWrapper = document.getElementById("stars-wrapper");

allRateBtn.forEach((btn) => {
  btn.addEventListener("click", function(){
    toggleRate(this.textContent);
  });
})

function toggleRate(id){
  if(activeRate === id ) return;
  allRateBtn.forEach(btn => btn.classList.remove("active"));
  document.getElementById(`${id}-star`).classList.add('active');
  activeRate = id;
  toggleStars(activeRate);
}

function toggleStars(num){
  starsWrapper.innerHTML = " ";
  for(let counter = 1; counter <= num; counter++){
    let wrapper = document.createElement("div");
    wrapper.classList.add("star");
    let img = document.createElement("img");
    img.setAttribute("src", "images/icon-star.svg");
    img.setAttribute("alt", "star");   
    wrapper.append(img);
    starsWrapper.append(wrapper);
  }
}