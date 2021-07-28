
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

//back to top button
jQuery(document).ready(function () {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});



















