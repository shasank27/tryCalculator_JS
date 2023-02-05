(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let ce = document.querySelector(".btn-ce");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      //   screen.value = "Please enters";
    } else {
      console.log(screen.value);
      let ans = eval(screen.value);
      console.log(ans);
      screen.value = ans;
    }
  });

  ce.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
