import React, { useState } from "react";
import axios from "axios";
const ImageUpload = () => {
  const [fileinput, setfileInput] = useState("");
  const [previewSource, setpreviewSource] = useState("");

  const UploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      let {data}  = await axios.post(`http://localhost:8001/posts`, {
        data: previewSource,
      });
      console.log(data.message);
      alert(data.message);
    } catch (err) {
      alert(err.message);
    }
  };
  const hanleForm = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    UploadImage(previewSource);
  };

  const handleInputfile = ({ target }) => {
    console.log(target.files[0]);
    previewFile(target.files[0]);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setpreviewSource(reader.result);
    };
  };
  return (
    <div>
      <form onSubmit={hanleForm}>
        <input
          type="file"
          name="image"
          onChange={handleInputfile}
          value={fileinput}
        />
        <button type="submit">Submit</button>
      </form>
      {previewSource && (
        <img
          src={previewSource}
          alt="select"
          style={{ height: "300px", width: "400px", objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default ImageUpload;
