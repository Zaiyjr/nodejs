import mysql from 'mysql'
import { DATABASE_NAME, HOST, PASSWORD, USER } from './globalKey.js';

  const connected = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce_db'
  });
  
  connected.connect(function(err) {
    if (err) throw err;
    console.log("Connected successfull!");
  });

  export default connected

