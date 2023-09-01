var page;
switch(window.location.pathname.split(".")[0].slice(1)){
    case "":
        page = "Home"; break;
    case "Blogs":
        page = "Blogs"; break;
}
console.log(page);
