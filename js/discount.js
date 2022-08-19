// common function start
function getElement(elementId) {
  const element = document.getElementById(elementId);
  return element;
}
// common function end

getElement("robot-check").addEventListener("keyup", function (event) {
  const domInput = event.target.value;
  const applyButton = getElement("apply-btn");
  if (domInput == "DOM") {
    applyButton.removeAttribute("disabled");
    applyButton.style.backgroundColor='rgb(101 163 13)'
  } else {
    applyButton.setAttribute("disabled", true);
    applyButton.style.backgroundColor='rgb(190 242 100)'
  }
});

getElement("apply-btn").addEventListener("click", function () {
  const inputPrice = getElement("price-input");
  const inputPriceString = inputPrice.value;
  const price = parseFloat(inputPriceString);
  const discountPercentage = getElement("discount-percentage");
  const percentageString = discountPercentage.value;
  const percentage = parseFloat(percentageString);
  if (inputPriceString == "" ||percentageString == "") {
    alert("You can't leave the input box EMPTY!");
    return;
  } else if (price < 0 || percentage<0 || percentage>100) {
    alert("Input is not valid!");
    return;
  }

  const discount = price * (percentage / 100);
  const discountPrice = Math.round(price - discount);
  const discountPriceField = getElement("discount-price");
  discountPriceField.innerText = discountPrice + ' TK';
  discountPriceField.style.color = 'rgb(101 163 13)';
  const domField = getElement("robot-check");
  domField.value = "";
  const applyButton = getElement("apply-btn");
  applyButton.setAttribute("disabled", true);
  applyButton.style.backgroundColor='rgb(190 242 100)'
});

getElement("price-input").addEventListener("keyup", function (event) {
  const discountPriceField = getElement("discount-price");
  const inputPriceValue = event.target.value;
  if (inputPriceValue === "") {
    discountPriceField.innerText = "Discount Price";
    discountPriceField.style.color = "rgb(100 116 139)";
  }
});
