// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const text = 'Hi There!';

fs.writeFile('b.txt', text, 'utf-8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }

})

//read from file
fs.readFile('b.txt', 'utf-8', (err, data) => {
    console.log(data);
})

