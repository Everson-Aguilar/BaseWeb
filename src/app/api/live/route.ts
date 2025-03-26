
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';


//entrada de identificador datos
export async function POST(req: Request) {
  try {
    const db = await connectToDatabase();
    const body = await req.json();

    // Insertar en la colección "registrations"
    const result = await db.collection('live').insertOne(body);

    return NextResponse.json({ message: 'Registro guardado', id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar los datos' }, { status: 500 });
  }
}


//salida de identificacion de datos
export async function GET() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection("live");
  
      // Obtener solo el primer documento de la colección
      const data = await collection.findOne({}); // Esto devuelve el primer documento
  
      if (!data) {
        return NextResponse.json({ success: false, message: "No se encontró el email." }, { status: 404 });
      }
  
      // Suponiendo que `email` es un campo del documento
      return NextResponse.json({ success: true, email: data.email });
    } catch (error) {
      return NextResponse.json({ success: false, message: "Error obteniendo el historial" }, { status: 500 });
    }
  }

  export async function DELETE() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection("live");
  
      // Eliminar todos los documentos de la colección
      const result = await collection.deleteMany({});
  
      return NextResponse.json({ 
        success: true, 
        message: "Todos los datos han sido eliminados.", 
        deletedCount: result.deletedCount 
      });
    } catch (error) {
      return NextResponse.json({ 
        success: false, 
        message: "Error al eliminar los datos" 
      }, { status: 500 });
    }
  }

 