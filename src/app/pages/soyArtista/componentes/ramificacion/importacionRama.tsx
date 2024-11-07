import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';

// Definir la estructura del árbol en TypeScript
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

interface TreeDiagramProps {
  folderInfo: string; // Recibimos la información de la carpeta desde el padre
}

const TreeDiagram: React.FC<TreeDiagramProps> = ({ folderInfo }) => {
  const [jsonData, setJsonData] = useState<any>(null); // Estado para almacenar los datos JSON
  const [loading, setLoading] = useState<boolean>(true); // Estado para mostrar un cargando

  // Cargar el archivo JSON según folderInfo
  useEffect(() => {
    const loadJsonData = async () => {
      try {
        setLoading(true); // Empezamos a cargar
        const response = await fetch(`/investigacionData/${folderInfo}.json`);  // Ajustamos la ruta para buscar en 'public/json'
        const data = await response.json();
        setJsonData(data); // Establecemos los datos en el estado
        setLoading(false); // Terminamos de cargar
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
        setLoading(false); // Terminamos el proceso aunque haya error
      }
    };

    if (folderInfo) {
      loadJsonData();
    }
  }, [folderInfo]); // Re-cargar el JSON cada vez que folderInfo cambie

  // Si no hay datos o está cargando, mostramos un mensaje
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Crear la estructura del árbol utilizando los datos JSON
  const data: TreeNode = {
    name: 'Investigación',
    children: jsonData ? [
      {
        name: `Descripción: ${jsonData.description || "No disponible"}`,
        children: jsonData.children ? jsonData.children.map((child: any) => ({
          name: child.name,
        })) : [],
      },
    ] : [],
  };

  // Estilos para centrar el árbol
  const containerStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className='shadow-xl' style={containerStyles}>
      <Tree
        data={data}
        translate={{ x: 200, y: 300 }} // Ajusta estos valores para centrar el árbol en pantalla
        orientation="vertical" // Opcional: orienta el árbol en vertical
      />
    </div>
  );
};

export default TreeDiagram;
