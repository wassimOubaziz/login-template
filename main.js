const label = document.querySelectorAll(".form-control label");
let delay = 50;
console.log(label);

label.forEach((element) => {
  element.innerHTML = element.textContent
    .split("")
    .map(
      (el, index) =>
        `<span style="transition-delay: ${delay * index}ms;">${el}</span>`
    )
    .join("");
});


