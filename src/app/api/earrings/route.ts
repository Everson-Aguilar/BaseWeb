import { NextResponse } from "next/server";
import { connectToDatabase } from '../../lib/mongodb';

export async function GET() {
  try {
    const db = await connectToDatabase();

    // Nombres de las colecciones
    const collections = ["sendProjects", "sends", "registerWeb"]; 

    // Extraer datos de cada colección
    const [sendProjects, sends, registerWeb] = await Promise.all(
      collections.map(collection => db.collection(collection).find({}).toArray())
    );

    return NextResponse.json({ 
      success: true, 
      data: { sendProjects, sends, registerWeb } 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Error obteniendo los datos" 
    }, { status: 500 });
  }
}
