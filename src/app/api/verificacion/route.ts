import { NextResponse } from 'next/server'; // Importa el módulo NextResponse para manejar respuestas HTTP en Next.js

// Variable global para almacenar temporalmente la información de verificación
let verificationData: any = true;  // activar o desactivar verificacion 

export async function POST(request: Request) {
  // Función para manejar solicitudes HTTP POST
  const body = await request.json(); // Lee y parsea el cuerpo de la solicitud en formato JSON

  // Verifica si el cuerpo de la solicitud contiene un campo 'verificacion'
  if (body.verificacion) {
    verificationData = body; // Almacena la información del cuerpo de la solicitud en la variable global
    // Devuelve una respuesta JSON con un mensaje de éxito y los datos de verificación
    return NextResponse.json({ message: 'Verificación exitosa', data: verificationData });
  } else {
    // Devuelve una respuesta JSON con un mensaje de error y un estado HTTP 400 (solicitud incorrecta)
    return NextResponse.json({ message: 'Verificación fallida' }, { status: 400 });
  }
}

export async function GET() {
  // Función para manejar solicitudes HTTP GET
  // Verifica si hay datos almacenados en la variable global 'verificationData'
  if (verificationData) {
    // Devuelve una respuesta JSON con los datos almacenados
    return NextResponse.json({ data: verificationData });          // IMPORTANTE   es lo que se toma, lo que se exporta :  data: verificationData
  } else {
    // Devuelve una respuesta JSON con un mensaje de error y un estado HTTP 404 (no encontrado)
    return NextResponse.json({ message: 'No hay datos de verificación' }, { status: 404 });
  }
}
