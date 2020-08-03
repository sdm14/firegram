import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Imagegrid from './comps/imageGrid';
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)


  return (
    <div className="App">
      <Title />
      <UploadForm />
      <Imagegrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
