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
  } else {
    applyButton.setAttribute("disabled", true);
  }
});

getElement("apply-btn").addEventListener("click", function () {
  const inputPrice = getElement("price-input");
  const inputPriceString = inputPrice.value;
  const price = parseFloat(inputPriceString);
  if (inputPriceString == "") {
    alert("You can't leave the input box EMPTY!");
    return;
  } else if (price < 0) {
    alert("Please input a valid Price!");
    return;
  }
  const discount = price * (30 / 100);
  const discountPrice = price - discount;
  const discountPriceField = getElement("discount-price");
  discountPriceField.innerText = discountPrice;
  const domField = getElement("robot-check");
  domField.value = "";
  const applyButton = getElement("apply-btn");
  applyButton.setAttribute("disabled", true);
});

getElement("price-input").addEventListener("keyup", function (event) {
  const discountPriceField = getElement("discount-price");
  const inputPriceValue = event.target.value;
  if (inputPriceValue === "") {
    discountPriceField.innerText = "Discount Price";
    discountPriceField.style.color = "rgb(100 116 139)";
  }
});
