var page;
console.log(window.location.pathname.split(".")[0].slice(1));
switch(window.location.pathname.split(".")[0].slice(1)){
    case "":
        page = "Home"; break;
    case "Blogs":
        page = "Blogs"; break;
}
