import React,{useEffect,useState} from 'react'

function App() {
  const [backEndData,setBackEndData] = useState([{}])
  useEffect(() => {
    fetch("/api")
    .then(response => response.json())
    .then(data => {
      setBackEndData(data)
    } )
  },[])
  return (
    <div className="App">
      {(typeof backEndData.users === "undefined") 
      ? (<p>Loading</p>) 
      : <ul> {backEndData.users.map((data,index) => <li key={index}>{data}</li>)} </ul>
      }
    </div>
  );
}

export default App;
