import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function PATCH(req: Request) {
  try {
    const { id, newData } = await req.json(); // Extrae los datos del cuerpo de la solicitud

    if (!id || !newData) {
      return NextResponse.json({ success: false, message: "ID y datos requeridos" }, { status: 400 });
    }

    const db = await connectToDatabase();
    const collection = db.collection("registrations"); // Cambia por tu colección

    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Busca el documento por ID
      { $set: newData } // Actualiza solo los campos enviados
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, message: "No se encontró el documento o no hubo cambios" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Actualización exitosa" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error al actualizar" }, { status: 500 });
  }
}
