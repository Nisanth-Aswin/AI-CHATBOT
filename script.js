let leftSlide = document.getElementById("minSlide");
let rightSlide = document.getElementById("maxSlide");

// let drawMin = document.getElementById("draw-min");
let leftbar = document.getElementById("leftbar");
// let chatlogo = document.getElementsByClassName("chatlogo");



leftSlide.onclick = () => {

        leftbar.style.display = "none";
        // leftbar.style.position = "relative";
        leftSlide.style.display = "none";
        rightSlide.style.display = "block";
        rightSlide.style.position = "relative";
        rightSlide.classList.add("-left-[285px]");
        rightSlide.classList.add("sm:-left-[340px]");
        rightSlide.style.right = 0;

        


}

rightSlide.onclick = () => {
        leftbar.style.display = "";
        // leftbar.style.placeContent = "space-between";
        // leftbar.style.width = '27rem';
        // leftbar.classList.add("absolute");
        // leftbar.classList.add("z-10");
        // leftbar.classList.add("sm:relative");
        leftSlide.style.display = "block";
        rightSlide.style.display = "";
        // leftSlide.classList.add["sm:-left-200px"];
        // rightSlide.style.right = 0;

        


}