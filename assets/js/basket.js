"use strict";

let tableBody = document.querySelector("tbody");

let basket = JSON.parse(localStorage.getItem("basket"));

for (const product of basket) {
  tableBody.innerHTML += ` <tr>
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td> <img src="${product.image}" alt="">
      </td>
      <td>${product.count}</td>
      <td> <button class="btn btn-danger">Delete</button>
      </td>
      </tr>`;
}

let deleteBtns = document.querySelectorAll(".btn");

deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let productName =
      deleteBtn.parentNode.parentNode.firstElementChild.innerText;

    for (const product of basket) {
      if (product.name === productName) {
        if (product.count == 1) {
          basket = basket.filter((m) => m.name != product.name);
          // let prod = basket.find((m) => m.id == product.id);
          // let arrayPos = basket.indexOf(prod);
          // basket.splice(arrayPos, 1);
          localStorage.setItem("basket", JSON.stringify(basket));
          deleteBtn.parentNode.parentNode.remove();
        } else {
          product.count--;
          localStorage.setItem("basket", JSON.stringify(basket));

          deleteBtn.parentNode.parentNode.lastElementChild.previousElementSibling.innerText =
            product.count;
        }
      }
    }
  });
});
