import { useEffect, useState } from 'react'
import "./valentine.css"
function App() {
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true)

    const [buttonSize, setButtonSize] = useState(24); // Initial button font size
    const [yesResponses] = useState([
      'Yes, absolutely!',
      'Sure thing!',
      'Certainly!',
      'Of course!',
      'Indeed!',
      'Definitely!',
    ]);
    const [yes, setYes] = useState(false)
    const [noButton, setNoButton] = useState(15)
    
    const [response, setResponse] = useState("Yes!")
    const increaseSize = () => {
      setButtonSize(prevSize => prevSize + 3);
      const randomIndex = Math.floor(Math.random() * yesResponses.length);
      setResponse(yesResponses[randomIndex])
      if (noButton !== 0){
        setNoButton(noButton => noButton -= 1)
      }
    };
  
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=vukeRA2WHlv2sQaOAC10Lv51OhtCL7ZN&s=cat', 
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        setData(result);
        setLoading(false)
        } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [buttonSize]);
    return (
      <div className='title-screen'>
        {!yes ?
        <>
        <div style={{fontSize:"5em"}}>Be My Valentine?</div>

        <div style={{display:"flex", gap:"1em"}}>
        <button style={{ padding: '10px', fontSize: `${buttonSize}px`, cursor: 'pointer', alignItems:"center", justifyContent:"center" }}
        onClick={() => {setYes(true)}}>
          {response}
        </button>
        <button onClick={increaseSize} style={{padding: `${noButton}px`, fontSize: `${noButton}px`, cursor: 'pointer', alignItems:"center", justifyContent:"center" }}>No</button>
        </div>
        {
          !loading &&
        <img src={data.data.images.downsized_medium.url} alt="valentine" style={{width:'10em', height:'10em'}} />}
        </>:
        <div>
          <div style={{fontSize:"5em",display:"flex", alignItems:"center",justifyContent:"center"}}>YAYYYY!!!!</div>
          <img src="https://gifdb.com/images/high/animated-bunny-tuzki-drawing-hearts-do4kc1culjz5q70q.gif" alt="" />
        </div>
      }
      </div>
    );
}

export default App
