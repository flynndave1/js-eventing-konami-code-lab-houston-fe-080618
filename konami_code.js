const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0 ;

function init() {
  // Write your JavaScript code inside the init() function

}


// var e = document.getElement(e);
// e.addEventListener('keydown', (e) => {
//     const keyName = event.key;
//     alert('keydown event\n\n' + 'key ' + keyName);
//     console.log(keyName);
// } );
const input = document.querySelector('input');
input.addEventListener('keydown', e => {console.log(e.which);
if (code[index] == e.which ) {
    index++ ;
    if (index === 10) {
    alert('I got lucky!!');} else {}
  }   else {
      index = 2;
      alert('Start string again!!')
    } 
  })
;
// }



// document.addEventListener('keypress', (event) => {
//   const keyName = event.key;

//   alert('keypress event\n\n' + 'key: ' + keyName);
// });

// const main = document.getElementById('main')
 
// main.addEventListener('click', function(event) {
//   alert('I was clicked!')
// })
