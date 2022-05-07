import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import dice from './assets/images/icon-dice.svg';

function App() {
  const [id, setId] = useState(null);
  const [advice, setAdvice] = useState(null);

  const URL = "https://api.adviceslip.com/advice"

  const fetchData = () => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setId(data.slip.id)
        setAdvice(data.slip.advice)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="bg main">
      <Card adviceId={id} advice={advice} />
      <button onClick={fetchData} className="button">
        <img src={dice} alt="Dice Image" />
      </button>
    </div>
  );
}

export default App;
