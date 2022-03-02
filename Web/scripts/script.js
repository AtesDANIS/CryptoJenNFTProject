

// window.addEventListener(
//     "scroll",
//     () => runOnScroll(),
//     {passive: true }
// );

// function runOnScroll() {
//     console.log(window.scrollY);
// };

window.addEventListener('load', (event) => {

    document.querySelectorAll('.bannerChars').forEach(function (char) {
        unfade(char);
    });
});


function unfade(element) {
    var op = 0.1;  // initial opacity
    // element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}


let summaryCollection = document.getElementsByTagName('summary');
let signsCollection = document.getElementsByClassName('faq-open-icon');

for (let i = 0; i < summaryCollection.length; i++) {
    summaryCollection[i].onclick = function () {
        if (signsCollection[i].innerHTML === '+') signsCollection[i].innerHTML = '—';
        else signsCollection[i].innerHTML = '+';
    }
}


function hideMenu(){
    document.getElementById('chkMenu').click();
}