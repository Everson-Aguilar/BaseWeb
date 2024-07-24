import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const dirPath = join(process.cwd(), 'pedidos_clientes/data/');
    const fileNames = await fs.readdir(dirPath);

    // Verifica que los nombres de archivos se están leyendo correctamente
    console.log('Archivos en el directorio:', fileNames);

    const dataPromises = fileNames.map(async (fileName) => {
      // Construye la ruta completa del archivo
      const filePath = join(dirPath, fileName);
      
      // Lee el contenido del archivo
      const fileContents = await fs.readFile(filePath, 'utf-8');
      
      // Parsea el contenido JSON
      return JSON.parse(fileContents);
    });

    const data = await Promise.all(dataPromises);

    // Devuelve los datos leídos de los archivos JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al leer los archivos JSON:', error);
    return NextResponse.error();
  }
}
