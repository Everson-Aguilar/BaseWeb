
import { NextResponse } from "next/server";
import { connectToDatabase } from '../../lib/mongodb';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("registrations"); // Cambia por el nombre de tu colección

    const data = await collection.find({}).toArray(); // Extrae todos los documentos

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error obteniendo el historial" }, { status: 500 });
  }
}



