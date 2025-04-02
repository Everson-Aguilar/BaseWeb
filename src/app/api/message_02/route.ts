import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("message02"); // Asegúrate de que el nombre de la colección sea correcto

    const data = await collection.find().toArray(); // Convertir a array para devolver los datos

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error obteniendo los mensajes:", error);
    return NextResponse.json(
      { success: false, message: "Error obteniendo los mensajes" },
      { status: 500 }
    );
  }
}
