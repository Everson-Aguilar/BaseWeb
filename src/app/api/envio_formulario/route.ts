import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, readdir, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

interface InformacionProyecto {
  nombre: string;
  ciudad: string;
  Whatsapp: number;
  correoEletronico: string;
  nombreProyecto: string;
  descripcionProyecto: string;
  selectivoEscala: string;
  metrosCuadrados: number;
  variacionVegetacion: string;
  variacionAccesoriosNatural: string;
  motorGrafico: string;
  efectoEspecialAnimacionesMundo: string;
  complejidadEstilo: string;
  rutaImagen: string;
  precioJuegoSeleccionado: number;
  estiloArquitectonico: string;
  variacionAccesorios: string;
  variacionConstrucciones: string;
  duracionProyecto: string;
}

const folderPath = path.join(process.cwd(), 'pedidos_clientes', 'data');

function generateFileName(): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const uniqueId = uuidv4();
  return `${timestamp}-${uniqueId}.json`;
}

async function ensureFolderExists(folderPath: string) {
  try {
    await mkdir(folderPath, { recursive: true });
  } catch (error) {
    console.error("Error al crear la carpeta:", error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureFolderExists(folderPath);
    const data: InformacionProyecto = await req.json();
    const fileName = generateFileName();
    const filePath = path.join(folderPath, fileName);
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log("Datos guardados en archivo:", filePath);
    return NextResponse.json({ message: "Datos guardados correctamente", file: fileName }, { status: 200 });
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    return NextResponse.json({ message: "Error al procesar los datos" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const files = await readdir(folderPath);
    if (files.length > 0) {
      return NextResponse.json({ files }, { status: 200 });
    } else {
      return NextResponse.json({ message: "No hay archivos disponibles" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return NextResponse.json({ message: "Error al obtener los datos" }, { status: 500 });
  }
}
