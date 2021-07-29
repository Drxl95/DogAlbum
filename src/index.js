
// fetches dog breed list/shows error if applicable
async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        breedList(data.message)
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
        alert("There was a problem fetching the breed list.")
    }
}


//load breed list in dropdown menu
start()
function breedList(dogList) {
    document.getElementById("breeds").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(dogList).map(function (breed) {
        return `<option>${breed}</option>`
    }).join('')}
    </select>
    `
}

//load images
async function loadByBreed(breed) {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        createImgs(data.message)
    }
}

//show randomized images
function createImgs(images) {
    let imageContainer = $(".slideshow");
    let dogImgs = $('<img>');
    dogImgs.attr("src", images[Math.floor(Math.random() * images.length)]);
    dogImgs.addClass("dogPic")
    imageContainer.append(dogImgs);
    moveImg(dogImgs[0]);
}

//deletes pic if dbl tapped
$(document).on('dblclick', ".dogPic", function () {
    $(this).remove();
})

//resets select menu when image has loaded
$("#breeds").on("change", "select", function () {
    const value = this.value;
    console.log(value);
    let select = this

    setTimeout(function () {
        select.selectedIndex = 0;
    }, 800)
});

//Get a random number
// let getRandomNum = (num) => {
//     return Math.floor(Math.random() * Math.floor(num));
// }

//get random number based off of screen width
let getRandomNum = () => {
    let x = window.matchMedia("(max-width: 450px)");
    let y = window.matchMedia("(max-width: 650px)");
    let z = window.matchMedia("(max-width: 850px)");
    if (x.matches) {
        return Math.floor(Math.random() * 250);
    } else if (y.matches) {
        return Math.floor(Math.random() * 300);
    } else if (z.matches) {
        return Math.floor(Math.random() * 450)
    } else {
        return Math.floor(Math.random() * 600)
    }
}

//show image in a random location
let moveImg = (dogImgs) => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    dogImgs.style.top = getRandomNum(w) + "px";
    dogImgs.style.left = getRandomNum(h * 2.5) + "px";
};























