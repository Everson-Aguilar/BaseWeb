import { NextRequest } from 'next/server'; // Usamos NextRequest para acceder al cuerpo de la solicitud
import { NextResponse } from 'next/server'; // Importa NextResponse

export async function POST(req: NextRequest) {
  try {
    // Obtener los datos JSON directamente de la solicitud
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: "El usuario y la contraseña son requeridos." }, { status: 400 });
    }

    // Simula la verificación de las credenciales
    if (username === 'admin' && password === '123') {
      return NextResponse.json({
        message: 'Inicio de sesión exitoso',
        userType: 'admin' // Redirige al panel de admin
      }, { status: 200 });
    } else if (username === 'freelancer' && password === '123') {
      return NextResponse.json({
        message: 'Inicio de sesión exitoso',
        userType: 'freelancer' // Redirige al panel de freelancer
      }, { status: 200 });
    } else {
      return NextResponse.json({ message: '¡Usuario o contraseña incorrectos!' }, { status: 401 });
    }
  } catch (error) {
    console.error("Error al manejar la solicitud:", error);
    return NextResponse.json({ message: 'Hubo un error interno en el servidor.' }, { status: 500 });
  }
}
