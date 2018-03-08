// move triangle object to triangle.js
// Done!

// move square object to square.js
// Done!

// move circle object to circle.js
// Done!

// Use `import` and `export` to make the code below work.
// e.g. import {pizza} from "jammy"
import circle, { diameter } from './circle';
import square from './square';
import triangle, { isIsosceles } from './triangle';

// Do not edit below this line
console.log(isIsosceles(3,7,7) === true)
console.log(triangle.area(4,7) === 14)
console.log(square.area(2,2) === 4)
console.log(circle.area(4.7) === 69.39778171779854 )
console.log(diameter(4.7) === 9.4)
