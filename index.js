/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/
document.getElementById('fetchDogButton').addEventListener('click', function(){
    

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    const doggyImage = document.getElementById("main-image")
    const sweetMessage = document.getElementById("sweetMessage")
    sweetMessage.innerHTML =`<h2>I love You</h2>
    <p> heres a cute dog pic to enjoy </p>`
    return doggyImage.src = data.message;
})

})


