'use strict';

// Calls to api to fetch random number of images based on users input
function getDogImage(inputValue) {
  let requiredUrl = `https://dog.ceo/api/breeds/image/random/${inputValue}`;

  fetch(requiredUrl)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

// Shows images
function displayResults(responseJson) {
  console.log(responseJson);
  let arrayOfImg = responseJson.message;
  let display = getImages(arrayOfImg); 
  $('.results-img').html(display);
}

// Sets img elements and builds array of images based on user input
function getImages(arrayOfImg){
    let valueToReturn = ''; 
    for (let i = 0; i < arrayOfImg.length; i++){
      valueToReturn += `<img src="${arrayOfImg[i]}" class="results-img">`;
    } 
    return valueToReturn;
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let inputValue = $('.quantity').val();
    getDogImage(inputValue); 
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});