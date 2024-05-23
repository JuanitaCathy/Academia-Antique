import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/example') 
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Example Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
