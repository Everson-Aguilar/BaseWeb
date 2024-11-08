import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";

interface TreeNode {
  name: string;
  children?: TreeNode[];
  
}

interface TreeDiagramProps {
  folderInfo: string;
}

const TreeDiagram: React.FC<TreeDiagramProps> = ({ folderInfo }) => {
  const [jsonData, setJsonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadJsonData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/investigacionData/${folderInfo}.json`);
        const data = await response.json();
        setJsonData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
        setLoading(false);
      }
    };

    if (folderInfo) {
      loadJsonData();
    }
  }, [folderInfo]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const data: TreeNode = {
    name: "Investigación",
    children: jsonData
      ? [
          ...(jsonData.description
            ? [
                {
                  name: jsonData.description,
                  
                  children: jsonData.children || [],
                 
                },
              ]
            : []),
        ]
      : [],
  };

  const containerStyles = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


 
    // Estilo de separación entre los nodos (ajustando la distancia)
    const separation = {
      siblings: 5, // Distancia entre nodos hermanos (horizontal)
      nonSiblings: 5, // Distancia entre nodos padres e hijos (vertical)
    };



  return (
    <div className="shadow-xl" style={containerStyles}>
      <Tree
        data={data}
        translate={{ x: 200, y: 300 }}
        orientation="vertical"
        separation={separation} // Aplica las configuraciones de separación
      
      />
    </div>
  );
};

export default TreeDiagram;
