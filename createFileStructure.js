const fs = require('fs');

const createDirectory = (path) => {
  console.log(process.cwd() + path);
  fs.mkdirSync(process.cwd() + path, { recursive: true }, (err) => {
    if (err) {
      console.error('Directory not made at ', path);
    } else {
      console.log('Directory created at', path);
    }
  });
};

const createFile = (path, content) => {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(`File at ${path} not created`);
    } else {
      console.log('File created at ', path);
    }
  });
};

const createFileTree = async (year, startDay) => {
  const NUM_OF_DAYS = 25;
  const content = fs.readFileSync('./template.txt', 'utf8');
  console.log(content);
  for (let i = startDay - 1; i < NUM_OF_DAYS; i++) {
    createDirectory(`/${year}/day${i + 1}`);
    createFile(`${process.cwd()}/${year}/day${i + 1}/input.txt`);
    createFile(`${process.cwd()}/${year}/day${i + 1}/index.js`, content);
  }
};

createFileTree(2019, 2);
