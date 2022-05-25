// // import React, {useState} from 'react';   // for create-react-app, etc

// const { useState } = React;   // for codepen, jsbin, jsfiddle etc.

// function StarRating({ count, value, inactiveColor = '#ddd', activeColor = '#f00' }) {
//   const stars = Array.from({ length: count }, () => '🟊')
//   return (
//     <div>
//       {stars.map((s, index) => {
//         let style = inactiveColor;
//         if (index < value) {
//           style = activeColor;
//         }
//         return (
//           <span className={"star"}
//             key={index}
//             style={{ color: style }} > {s} </span>
//         )
//       })}
//     </div>
//   )
// }


// function StarRatingDemo() {
//   const [rating, setRating] = useState(3);

//   return (
//     // <div>
//       <h2>Star Rating Demo</h2>

//       <StarRating
//         count={5}
//         value={rating}
//         activeColor={'red'}
//         inactiveColor={'#ddd'} />
//     </div>
//   )
// }

// const rootElement = document.querySelector("#root");
// ReactDOM.render(<StarRatingDemo />, rootElement);


