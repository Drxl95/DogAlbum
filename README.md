# __DogAlbum__
A Photo album of Dog Pictures

A common dog API that I decided to turn into a photo album.  The user simply selects a breed of dog from the dropdown menu and a photo will appear.
The images will appear in a random order to provide variety and they can be removed by double tapping.  

<img width="700px" src="img/dog-gif.gif">

__API:__
https://dog.ceo/dog-api/

## __Challenges__

- ### Randomized Images
    - It is quite common for images to apear one by one, as the user selects an option from the dropdown menu.  I decided to do something a little different and create a photo album.  My reasoning behind was  so that users can see many different dogs at once.

- ### Remove Image
    - I wanted to include a way for ther user to remove an image since there would be more than one image present, giving the user more freedom. 

- ### Reset Menu
    - One issue I ran into and didn't think about was the fact that the dropdown menu wouldn't reset.  This would mean that the user would have to select the top most option that wouldn't produce an image ("Select A Dog Breed") at every other selection if they wanted to choose the <u>same</u>  breed twice. This required me to use the ".on() method to attach a handler on the select element. I also programmed it to wait until the image has loaded before reseting.    

## __Design__

I designed this with simplicity in mind and didn't want to add anything special or fancy.  I am very satisfied with the layout of the images.  I used the "column-count" CSS property because I wanted to maintain columns as much as possible.  The column-count property forces the images to fill up to the amount of column required, depending on viewport size.  It also allows me to set the column amount when I do responsive design.  The line-height was also set to zero because I wanted the photos to touch each other as best they could.  In my opinion this gives it a less professional and serious tone and more of a "fun" tone, as this is what I was going for.  
    I finished this project off with a nice top of page button.  

**Dependencies:**
- Javascript
- fetch, Async/await
- JQuery
