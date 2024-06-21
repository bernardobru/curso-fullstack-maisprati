let space1control = 1;
let space2control = 2;
let space3control = 3;
function next() {
    let space1 = document.getElementById('space1');
    let space2 = document.getElementById('space2');
    let space3 = document.getElementById('space3');
    space1control++
    space2control++
    space3control++
    if(space1control > 3){
        space1control = 1
    }
    if(space2control > 3){
        space2control = 1
    }
    if(space3control > 3){
        space3control = 1
    }
    space1.src = "./resources/images/lorem-ipsum" + space1control + ".jpg"
    space2.src = "./resources/images/lorem-ipsum" + space2control + ".jpg"
    space3.src = "./resources/images/lorem-ipsum" + space3control + ".jpg"
} 
/* function back() {
    let space1 = document.getElementById('space1');
    let space2 = document.getElementById('space2');
    let space3 = document.getElementById('space3');
    space1control--
    space2control--
    space3control--
    if(space1control < 0){
        space1control = 1
    }
    if(space2control < 0){
        space2control = 1
    }
    if(space3control < 0){
        space3control = 1
    }
    space1.src = "./resources/images/lorem-ipsum" + space1control + ".jpg"
    space2.src = "./resources/images/lorem-ipsum" + space2control + ".jpg"
    space3.src = "./resources/images/lorem-ipsum" + space3control + ".jpg"
} */
const images = document.querySelectorAll('#imagens-carrossel img');
let slideIndex = 1;
