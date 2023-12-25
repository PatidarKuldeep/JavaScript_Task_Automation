// Import require modules
const fs = require('fs');
const path = require('path');

// Define the directory path
const directoryPath = './task_automation';

//Create the directory if it doesn't exist
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath);
  console.log('Directory created: task_automation');
}

//Create three text files with any content
fs.writeFileSync(path.join(directoryPath, 'file1.txt'), 'Content for file1');
fs.writeFileSync(path.join(directoryPath, 'file2.txt'), 'Content for file2');
fs.writeFileSync(path.join(directoryPath, 'file3.txt'), 'Content for file3');

//Concatenate the content of the three files into a new file
const concatenatedContent = fs.readFileSync(path.join(directoryPath, 'file1.txt'), 'utf-8') +
                            fs.readFileSync(path.join(directoryPath, 'file2.txt'), 'utf-8') +
                            fs.readFileSync(path.join(directoryPath, 'file3.txt'), 'utf-8');

fs.writeFileSync(path.join(directoryPath, 'concatenated.txt'), concatenatedContent);

//Print the content of "concatenated.txt" to the console
console.log('Content of concatenated.txt:', concatenatedContent);

//Delete file1.txt, file2.txt, file3.txt from the directory
fs.unlinkSync(path.join(directoryPath, 'file1.txt'));
fs.unlinkSync(path.join(directoryPath, 'file2.txt'));
fs.unlinkSync(path.join(directoryPath, 'file3.txt'));

console.log('Files deleted: file1.txt, file2.txt, file3.txt');
