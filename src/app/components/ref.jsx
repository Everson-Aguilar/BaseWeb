// components/ImageUpload.js
import React, { useState } from 'react';
import Image from 'next/image'; // Importamos el componente Image de Next.js

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = React.createRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div  style={{ cursor: 'pointer' }} onClick={handleClick}>
      {image ? (
        <div>
          <Image src={image} alt="Uploaded Image" width={180} height={180} />
        </div>
      ) : (
        <div >
          <p>Subir Imagen Referencia</p>
          <p className='font-mono text-5xl'>+</p>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;
