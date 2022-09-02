// match media area
// function myFunction(x) {
//     switch(x){ // switch starts
//         case x.m
//       document.body.style.backgroundColor = "yellow";
    
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  let width = window.innerWidth;
  var x = window.matchMedia(`(max-width: ${width})`);
  console.log(x);
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes
// ends match media area