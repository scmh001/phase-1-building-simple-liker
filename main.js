/*

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

*/

/// MORE ADVANCED SOLUTION ///

// const glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// const colorStates = {
//   "red" : "",
//   "": "red"
// };

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 1000);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



/*

// Define constants for empty and full heart symbols
Constant EMPTY_HEART = '♡'
Constant FULL_HEART = '♥'

// Select all elements with class "like-glyph"
Set articleHearts to all elements with class "like-glyph"

// Define a function to handle "like" action
Function likeCallback with parameter e (event)
  Set heart to the target of event e
  Call mimicServerCall with "bogusUrl"
    If successful then
      If heart's inner text is EMPTY_HEART then
        Set heart's inner text to FULL_HEART
        Set heart's class to "activated-heart"
      Else
        Set heart's inner text to EMPTY_HEART
        Set heart's class to empty string
      End If
    If failed with error then
      Set modal to element with id "modal"
      Set modal's class to empty string
      Set modal's inner text to error message
      After 3 seconds, set modal's class to "hidden"
    End If
End Function

// Add click event listener to each heart glyph
For each glyph in articleHearts
  Add click event listener to glyph with likeCallback function
End For

*/
