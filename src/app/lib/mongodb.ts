// Importamos las clases necesarias de la librería 'mongodb'
// - MongoClient: Nos permite conectarnos a una base de datos MongoDB
// - Db: Representa una base de datos en MongoDB
import { MongoClient, Db } from 'mongodb';

// Creamos un cliente de MongoDB con la URL de conexión local
// - 'mongodb://127.0.0.1:27017': Especifica que la base de datos está en nuestra máquina local (localhost) en el puerto 27017
const client = new MongoClient('mongodb://127.0.0.1:27017');

// Definimos una variable para almacenar la conexión a la base de datos
// - Usamos 'let' en lugar de 'const' porque el valor de 'db' cambiará cuando nos conectemos
let db: Db;

/**
 * Función para conectar a la base de datos MongoDB.
 * - Devuelve una instancia de la base de datos si ya está conectada.
 * - Si no está conectada, se conecta y la almacena en la variable 'db'.
 */
export const connectToDatabase = async (): Promise<Db> => {
  // Verificamos si ya existe una conexión activa
  if (!db) {
    // Si no hay conexión, conectamos el cliente de MongoDB
    await client.connect();

    // Asignamos la conexión a la base de datos llamada 'automation' a la variable 'db'
    db = client.db('automation');

    // Mensaje de confirmación en la consola
    console.log('Conectado a MongoDB');
  }

  // Retornamos la conexión a la base de datos (ya sea la nueva o la existente)
  return db;
};
