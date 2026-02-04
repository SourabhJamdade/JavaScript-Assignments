// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

//read from file
fs.readFile('a.txt', 'utf-8', (err, data) => {
    const cleaned = data.split(' ').filter(word => word !== '').join(' ');

    //write into file
    fs.writeFile('a.txt', cleaned, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File Cleaned successfully!');
        }

    })

})


const text = 'Hi There!';


