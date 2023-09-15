import React, { useState, useEffect } from 'react';
import './style.css';
import { Card } from './card';

function Pessoa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AnthonyJLM/api-dos-manos/main/api-dos-manos.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
    <ul>
      {data.map((mano, index) => (
        <Card key={index}
        mano={mano}/>
      ))}
    </ul>
  </div>
  );
}

export default Pessoa;