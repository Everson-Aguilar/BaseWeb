import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';

export async function POST(req: Request) {
  try {
    const db = await connectToDatabase();
    const body = await req.json();

    
    const result = await db.collection('accept_user').insertOne(body);

    return NextResponse.json({ message: 'Registro guardado', id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar los datos' }, { status: 500 });
  }
}
