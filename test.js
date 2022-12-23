// const cars = ["BMw","Porsche", "Mercedes"]

// const output = `
// <ul>
//     ${cars.map(car => `<li>${car}</li>`).join('')}
// </ul>
// `
// console.log( `${cars.map(car => `<li>${car}</li>`)}`);
// console.log(output);
// function test([first,...string],...values) {
//     let result = '';
//     for(let i =0 ;i <string.length;i++){
//         result += values[i] + string[i];
//     }
//     return `${first}${result}`;
// }
// var course = "Html/css"
// var brand = 'F8';
// var courses = test`Học lập trình ${course} tại ${brand} ! `;
// console.log(courses);
// var courses = ["HTML/CSS", "Javascript", "PHP"];
// var course = courses.reduce((item, cur) => item.concat(cur), []).join(" ");
// console.log(course);
let o1 = { a: 21, b: 22, c: 24 };
let o2 = { b: 25, c: 26 };
let o3 = { c: 27 };

let finalObj = Object.assign({}, o1, o2, o3);
console.log(finalObj);//{a: 21, b: 25, c: 27}
console.log(o1,o2,o3);