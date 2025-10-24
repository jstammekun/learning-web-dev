
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps= async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "suvalinetekst.txt"), 'utf8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "suvalinetekst.txt"));
    await fsPromises.writeFile(path.join(__dirname, "kirjutatud.txt"), data);
    await fsPromises.appendFile(path.join(__dirname, "kirjutatud.txt"), "\nSamad sõnad!");
    await fsPromises.rename(path.join(__dirname, "kirjutatud.txt"), path.join(__dirname, "uus_kirjutatud.txt"));
    const newData = await fsPromises.readFile(path.join(__dirname, "uus_kirjutatud.txt"), 'utf8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
} 

fileOps();

/*
fs.readFile(path.join(__dirname, "suvalinetekst.txt"), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


fs.writeFile(path.join(__dirname, "vastus.txt"), "Meeldiv tutvuda, Jan!", (err) => {
  if (err) throw err;
  console.log('Kirjutamine tehtud!');

  fs.appendFile(path.join(__dirname, "vastus.txt"), "\nSamad sõnad!", (err) => {
    if (err) throw err;
    console.log('Lisamine tehtud!');
    
    fs.rename(path.join(__dirname, "vastus.txt"), path.join(__dirname, "uus_vastus.txt"), (err) => {
      if (err) throw err;
      console.log('Ümbernimetatud!');
    });
  });
});

*/

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

