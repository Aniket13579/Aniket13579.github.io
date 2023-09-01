$('body').prepend('<div id="include">Loading..</div>');

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
    document.getElementById(page).style.textDecoration = "underline";
  },1000);

