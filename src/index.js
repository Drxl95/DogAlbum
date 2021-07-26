
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
$(document).on('dblclick', ".dogPic", function () {
    $(this).remove();
})
















