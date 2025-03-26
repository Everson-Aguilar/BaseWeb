import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    const db = await connectToDatabase();
    const body = await req.json();

    // Encriptar la contraseña antes de guardarla
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);

    // Reemplazar la contraseña original con la encriptada
    body.password = hashedPassword;

    // Insertar en la colección "new_users"
    const result = await db.collection('new_users').insertOne(body);

    return NextResponse.json({ message: 'Registro guardado', id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar los datos' }, { status: 500 });
  }
}
