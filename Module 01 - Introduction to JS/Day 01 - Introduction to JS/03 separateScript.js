console.log('JS is written outside of HTML');
console.log('We\'ve enabled something called \'defer\' to make sure JS executes only post the processing of the HTML');
console.log('Aside: The weird slashes written above & below are called "Escape Characters". Read More about them online');
console.log('\n');
console.log('The code below works only if we enable \'defer\' in JS');
console.log('Consult the image in the \'Day01\' folder for more details on \'defer\'');

document.getElementById('myDiv').textContent = 'This is a string dynamically added via JS.';