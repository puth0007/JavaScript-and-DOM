// Task 1

//     Access HTML element with id tag-line.

let tag = document.getElementById('tag-line');

//     Access all h2 headings that belong to div with the class name bg-main-content.

let headings = document.querySelectorAll('.bg-main-content h2');

//     Create the variable collect and assign it with content of tag-line.

let collect = `${tag.textContent}\n`;

//     Loop through the array of headings and append the content of each heading to variable collect

for (let heading of headings) {
        collect += `\n\t${heading.textContent}`;
}

//     After the loop, use alert to print collect

alert(collect);

// Printed output:
// Success!

// Task 2

//     Access 13th div with class name box that belongs to div with the class name bg-main-content.
//     You can name the variable when_to_launch.

let box = document.querySelectorAll('.bg-main-content .box');

let when_to_launch = box[12];

console.log(when_to_launch);

//     Use property children to "scoop" in array all HTML elements that belong to that div.

let scooped = when_to_launch.children;

console.log(scooped);

//     Create the variable collect and assign it with content of heading that belongs to gotten array.
//     Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.

let _collect = `${scooped[0].textContent}\n\n${scooped[2].textContent}`;

console.log(_collect);

//     After the loop, use alert to print collect

alert(_collect);

// Printed output:
// Success!