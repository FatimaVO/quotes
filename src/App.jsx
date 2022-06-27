import { useState } from "react";
import "./App.css";
import quotes from "./quotes.json";
import QuoteBox from "./components/QuoteBox";

function App() {

  const colors = ['#53BF9D', '#954c66', '#BD4291', '#54BAB9', '#18978F', '#9EB23B', '#4B5D67', '#EB5353', '#8E3200', '#062C30', '#85C88A', '#874356', '#890F0D', '#5463FF', '#42C2FF', '#533E85', '#151D3B', '#D82148', '#6EBF8B', '#495371', '#A1B57D', '#B8405E', '#655D8A', '#b3543f', '#db6e37', '#DB6B97', '#781D42'];

  let randomRefreshColor = Math.floor(Math.random() * colors.length);
  const [color, setColor] = useState(colors[randomRefreshColor]);

  let randomRefresQuote = Math.floor(Math.random() * quotes.length);
  const [displayedPhrase, setDisplayedPhrase] = useState(quotes[randomRefresQuote]);

  return (
    <div className="App" style={{ backgroundColor: color }}>

      <QuoteBox
        quotes={quotes}
        colors={colors}
        color={color}
        setColor={setColor}
        displayedPhrase={displayedPhrase}
        setDisplayedPhrase={setDisplayedPhrase}
      />
    </div>
  );
}

export default App;
