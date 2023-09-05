$('body').prepend('<div id="include">Loading..</div>');
$('body').append("<script src='./active.js'></script>");

(() => {
    includes = document.getElementById('include');
    fetch("./navbar.html").then(file => {
            file.text().then(content => {
                includes.insertAdjacentHTML('afterend', content);
                includes.remove();
            });
        });
})();

setTimeout(()=>{
    active = document.getElementById(page);
    active.style.textDecoration = "underline";
    active.style.textDecorationColor = "#fff";
    active.style.textDecorationThickness = "2px";
    active.style.textUnderlineOffset = "8px";
    active.style.fontWeight = "500";

  },1000);
