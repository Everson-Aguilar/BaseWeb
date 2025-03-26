import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';
import bcrypt from 'bcrypt';


export async function POST(req: NextRequest) {

  try {

    // Obtener los datos del cuerpo de la solicitud
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "El usuario y la contraseña son requeridos." }, { status: 400 });
    }

    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Buscar al usuario en la colección de admins
    let user = await db.collection('admin_users').findOne({ email });

    let userType = 'admin';

    // Si no está en admins, buscar en freelancers
    if (!user) {
      user = await db.collection('accept_user').findOne({ email });
      userType = 'freelancer';
    }

    // Si el usuario no se encontró en ninguna colección
    if (!user) {
      return NextResponse.json({ message: '¡Usuario o contraseña incorrectos!' }, { status: 401 });
    }

    // Comparar la contraseña encriptada almacenada en MongoDB con la ingresada
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: '¡Usuario o contraseña incorrectos!' }, { status: 401 });
    }

    // Si la autenticación es correcta
    return NextResponse.json({
      message: 'Inicio de sesión exitoso',
      userType
    
    }, { status: 200 });

  } catch (error) {
    console.error("Error en la autenticación:", error);
    return NextResponse.json({ message: 'Hubo un error interno en el servidor.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Obtener ambas colecciones
    const adminUsers = await db.collection('admin_users').find().toArray();
    const freelancers = await db.collection('accept_user').find().toArray();

    // Devolver los datos
    return NextResponse.json({
      adminUsers,
      freelancers
    }, { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json({ message: 'Hubo un error interno en el servidor.' }, { status: 500 });
  }
}








