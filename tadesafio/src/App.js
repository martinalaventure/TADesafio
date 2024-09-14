import './App.css';
import React, { useState } from 'react';

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveClick = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
      setIsModalOpen(false);
    }
  };

  const handleCancelClick = () => {
    setInputText('');
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Lista de elementos</h1>
        <button id="agregar" onClick={handleAddClick}>Agregar</button>
      </div>
      
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <input 
              type="text" 
              value={inputText} 
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe algo..."
            />
            <div className="modal-buttons">
              <button onClick={handleSaveClick}>Guardar</button>
              <button onClick={handleCancelClick}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
