let moves = document.body;
let cursur = document.getElementById("crs");
moves.addEventListener("mousemove", (event) => {
  cursur.style.left = event.pageX + "px";
  cursur.style.top = event.pageY + "px";
});
