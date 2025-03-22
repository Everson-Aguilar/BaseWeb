import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb"; // Necesario para manejar el ID

export async function DELETE(req: Request) {
  try {
    const db = await connectToDatabase();
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json({ error: "Se requiere el ID del usuario" }, { status: 400 });
    }

    const result = await db.collection("new_users").deleteOne({ _id: new ObjectId(userId) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Usuario eliminado correctamente" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar usuario" }, { status: 500 });
  }
}
