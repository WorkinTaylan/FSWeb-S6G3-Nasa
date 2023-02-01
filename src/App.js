import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [gorsel, setGorsel]= useState(null);
  //const [apiKey, setApiKey]=useState("")

  useEffect(()=> {
    const fetchGorsel=()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=wMulJJXgW7eBvlMNcmIcN3vvIySVmaepy8Kms0GQ")
    // Which we then set to state
    .then(res => setGorsel(res.data))
    
    // Always include error handling
    .catch(err => console.log(err));
    }

    fetchGorsel();
  }, []);

  if(!gorsel) return <h3>Yükleniyor...</h3>

  return (
    <div className="App">
      <h1>{gorsel.title}</h1>
      <p>{gorsel.date}</p>
      <p>{gorsel.explanation}</p>
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {gorsel.media_type="image"? (
      <img src={gorsel.url} alt={gorsel.title}/>):(
        <iframe
        title="space-video"
        src={gorsel.url}
        frameBorder="0"
        allowFullScreen
        className="photo"
        />
        )
      }
    </div>
    
  );
}

export default App;
