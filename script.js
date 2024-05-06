// select modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .OPEN-MODAL to modal-overlay
// when user clicks close-btn remove .OPEN-MODAL FROM modal-overlay


let modal = document.getElementById("show_modal");

let btn = document.querySelector(".btn");

let closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}