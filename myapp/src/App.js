import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  function handleResponse(response){
    alert("The weather in newyork is " + response.data.main.temp + " C");
  }

  let apiKey = " ";
  let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=New York&appid=" + apiKey;
  
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="App">
      <header className="App-header">
       Hi This is Thanusha.<br/>
       Welcome onboard
      
      </header>
    </div>
  );
}

export default App;
