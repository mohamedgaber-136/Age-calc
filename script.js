let count = 0;
let m = new Date();
let day = m.getDate() + 31;
let mnth = m.getMonth() + 12;
let year = m.getFullYear() - 1;
let body_ = document.querySelector("body");
let counter = 0;
 function calc() {
 
  if (day_.value < 0 || day_.value > 31 || day_.value =='') {
    label_l.classList.add("unvalid_label");
    day_.classList.add("uvalid_input");
    day_.classList.add("shakes");
    validation_.classList.add("unvalid_");
    validation_.innerText = `Should be A valid number`;
  } else {
    let day_res = day - day_.value;
    let x = (day_otpt.innerText = `${day_res}`);
  }

  if (mnth_.value < 0 || mnth_.value > 12 ||mnth_.value=='') {
    label_two.classList.add("unvalid_label");
    mnth_.classList.add("uvalid_input");
    mnth_.classList.add("shakes");
    validation_two.classList.add("unvalid_");
    validation_two.innerText = `Should be A valid number`;
  } else {
    let y = (mnth_otpt.innerText = `${mnth - mnth_.value}`);
  }
  if (year_.value < 0 || year_.value >= 2023||year_.value=='') {
    label_three.classList.add("unvalid_label");
    year_.classList.add("uvalid_input");
    year_.classList.add("shakes");
    validation_three.classList.add("unvalid_");
    validation_three.innerText = `Should be A valid number`;
  } else {
    let z = (year_otpt.innerText = `${year - year_.value}`);
  }
}


