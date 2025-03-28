
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';



export async function POST(req: Request) {
  try {
    const db = await connectToDatabase();
    const { webData } = await req.json();

    if (!webData || webData.length === 0) {
      return NextResponse.json({ error: "Datos inválidos o incompletos" }, { status: 400 });
    }

    const { email_ID, webName, LinkWeb, verificationWeb, horafechaWeb } = webData[0];

    if (!email_ID) {
      return NextResponse.json({ error: "Falta el email_ID para identificar al usuario" }, { status: 400 });
    }

    const collection = db.collection("accept_user");

    // Buscar si el usuario ya tiene datos guardados
    const existingUser = await collection.findOne({ email_ID });

    if (existingUser) {
      // Si el usuario ya existe, agregar el nuevo proyecto a su lista de `webData`
      await collection.updateOne(
        { email_ID },
        { $push: { webData: { webName, LinkWeb, verificationWeb, horafechaWeb } } }
      );
    } else {
      // Si no existe, crear un nuevo usuario con `webData`
      await collection.insertOne({
        email_ID,
        webData: [{ webName, LinkWeb, verificationWeb, horafechaWeb }],
      });
    }

    return NextResponse.json({ message: "Datos guardados exitosamente" }, { status: 201 });
  } catch (error) {
    console.error("Error en API:", error);
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}
