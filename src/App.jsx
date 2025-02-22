import React, { useState } from 'react';

function App() {
  const [sayac, setSayac] = useState(3);
  const [kullanici, setKullanici] = useState({ isim: "Ali", yas: 25 });
  return (
    
  <div>
    <h1>Sayaç : {sayac} </h1>
    <button onClick={()=>setSayac(sayac+1)}>Sayaçı +1 Arttır.</button>
  </div >
  );
}

export default App;