const fs = require('fs');

const saveDataBase = (db) => {
  const data = JSON.stringify(db, null, 2);
  
  try {
    fs.writeFileSync('./src/database/db.json', data, { encoding: 'utf8', flags: 'w' });
    console.log('Archivo guardado con éxito.');
  } catch (error) {
    console.error('Error al guardar el archivo:', error);
  }
}


module.exports = { saveDataBase };