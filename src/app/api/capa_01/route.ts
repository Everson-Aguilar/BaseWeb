import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';

const SALT_ROUNDS = 10;
const HASH_FILE_PATH = path.join(process.cwd(), '/admin.json');

// Handler para solicitudes GET - Crear hash
export async function GET(request: NextRequest) {
  const secretKey = process.env.SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json({ error: 'Secret key is not defined' }, { status: 500 });
  }

  try {
    const hashedSecretKey = await bcrypt.hash(secretKey, SALT_ROUNDS);
    const hashObject = { hash: hashedSecretKey , username: "user" }; // Crear objeto JSON con el hash

    fs.writeFileSync(HASH_FILE_PATH, JSON.stringify(hashObject, null, 2), 'utf-8'); // Guardar el objeto JSON en el archivo
    console.log('Hashed Secret Key:', hashedSecretKey);

    return NextResponse.json({ message: 'Secret key hashed and saved to file', hash: hashedSecretKey });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to hash secret key' }, { status: 500 });
  }
}

// Handler para solicitudes POST - Verificar hash
export async function POST(request: NextRequest) {
  const { secretKey } = await request.json();

  if (!secretKey) {
    return NextResponse.json({ error: 'Secret key is not provided' }, { status: 400 });
  }

  try {
    const hashFileContent = fs.readFileSync(HASH_FILE_PATH, 'utf-8'); // Leer el contenido del archivo JSON
    const hashObject = JSON.parse(hashFileContent); // Parsear el contenido JSON

    const isMatch = await bcrypt.compare(secretKey, hashObject.hash); // Comparar con el hash

    if (isMatch) {
      console.log('Verification successful: Secret key matches the hash');
      return NextResponse.json({ message: 'Verification successful: Secret key matches the hash' });
    } else {
      console.log('Verification failed: Secret key does not match the hash');
      return NextResponse.json({ error: 'Verification failed: Secret key does not match the hash' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to verify secret key' }, { status: 500 });
  }
}
