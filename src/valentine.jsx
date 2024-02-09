import { useState } from 'react'


function App() {
    const [buttonSize, setButtonSize] = useState(16); // Initial button font size

    const increaseSize = () => {
      setButtonSize(prevSize => prevSize + 2);
    };
  
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', gap:"1em",flexDirection:"column" }}>
        <div style={{fontSize:"5em"}}>Be My Valentine?</div>
        <div style={{display:"flex", gap:"1em"}}>
        <button style={{ padding: '10px', fontSize: `${buttonSize}px`, cursor: 'pointer', alignItems:"center", justifyContent:"center" }}>
          Yes
        </button>
        <button onClick={increaseSize}>No</button>
        </div>
      </div>
    );
}

export default App
