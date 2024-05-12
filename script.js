
function myfunction(imgs){
  var expandingImg= document.getElementById("expandingImg");
  var imgtxt = document.getElementById("imgtext");
  expandingImg.src=imgs.src;
  imgtxt.innerHTML = imgs.alt;

  expandingImg.parentElement.style.display="block";
}