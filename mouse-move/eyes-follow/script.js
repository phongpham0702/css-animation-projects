document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(ev) {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(ev.pageX - x, ev.pageY - y);

    let rotate = radian * (180 / Math.PI) * -1 + 270;

    eye.style.transform = "rotate(" + rotate + "deg)";
  });
}
