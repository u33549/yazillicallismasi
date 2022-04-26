let el = document.querySelectorAll(".card");

function setListeners(item) {
  item.addEventListener("mousemove", handleMove);

  const height = item.clientHeight;
  const width = item.clientWidth;

  function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;
    const yRotation = 20 * ((xVal - width / 2) / width);

    const xRotation = -20 * ((yVal - height / 2) / height);

    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";
    item.style.transform = string;
  }

  item.addEventListener("mouseout", function () {
    item.style.transform = "perspective(250px) scale(1) rotateX(0) rotateY(0)";
  });

  item.addEventListener("mouseup", function () {
    item.style.transform =
      "perspective(250px) scale(1.1) rotateX(0) rotateY(0)";
  });
}

let btns = document.querySelectorAll(".fee");

$(document).ready(function () {

  el.forEach(setListeners);

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      $("body,html").animate({scrollTop: window.outerHeight,},200);
    });
  }

  document.querySelector(".goBack").addEventListener("click", () => {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
    200
    );
  });
});
