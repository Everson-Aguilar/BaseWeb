import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';

export async function GET() {
  try {
    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Contar cuántos documentos hay en la colección 'administrator'
    const userCount = await db.collection('administrator').countDocuments();

    // Si no hay usuarios en la colección
    if (userCount === 0) {
      return NextResponse.json({ error: 'No se encontraron usuarios en la base de datos' }, { status: 404 });
    }

    // Si hay usuarios, obtenerlos
    const users = await db.collection('administrator').find().toArray();

    // Devolver los usuarios encontrados
    return NextResponse.json({ users });

  } catch (error) {
    // Manejo de errores
    return NextResponse.json({ error: 'Error al obtener los usuarios de MongoDB' }, { status: 500 });
  }
}







