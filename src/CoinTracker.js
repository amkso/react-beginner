import { useState, useEffect } from "react";

function getValue(my_string) {
  var regex = /[^0-9.]/g;
  var answer = [...my_string.replace(regex,'')].join("");
  return parseFloat(answer);
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinValue, setCoinValue] = useState(0);
  const [result, setResult] = useState(0);
  
  const onChange = (event) => {
    const usd = event.target.value;
    setResult(usd / coinValue);
  }
  const selectOnChange = (event) => setCoinValue(() => getValue(event.target.value));
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers"
    ).then((resopnse) => (resopnse.json()
    ).then((json) => {
      setCoins(json);
      setLoading(false);
    }));
  },[])

  return (
    <div> 
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (<strong>Loading...</strong>
        ) : (
          <div>
            <select onChange={selectOnChange}>
              <option key="0">
                  =======================================================
              </option>
              {coins.map((coin) => (
                <option key={coin.id}>
                  {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
            <hr />
            <form>
              <h2>Calculate USD to Coins</h2>
              <input type="number" placeholder="USD" onChange={onChange}></input>
              <label>{"\t"}{result} Coins</label>
            </form>
          </div>
        )
      }
    </div>
  
  );
}

// USD -> BTC
// input에 달러 입력 -> btc 얼마나 가능, 다른 코인 전부
// 0.00 coin
export default App;
