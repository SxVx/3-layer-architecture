const fs = require('fs');

const saveDataBase = (db) => {
  const data = JSON.stringify(db, null, 2);
  
  try {
    console.log(data);
    fs.writeFileSync('./db.json', data, { encoding: 'utf8', flags: 'w' });
    console.log('Archivo guardado con éxito.');
  } catch (error) {
    console.error('Error al guardar el archivo:', error);
  }
  // fs.writeFile('./db.json', data, (error) => {
  //   if (error) {
  //     console.error('Error al escribir en el archivo:', error);
  //   } else {
  //     console.log('Se ha escrito en el archivo satisfactoriamente.');
  //   }
  // });
}


module.exports = { saveDataBase };