import React, { useEffect, useRef, memo } from 'react';

function TickerTapeWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          { "proName": "NYSE:SNOW", "title": "SNOW" },
          { "proName": "NASDAQ:SBUX", "title": "SBUX" },
          { "proName": "NASDAQ:ROKU", "title": "ROKU" },
          { "proName": "NASDAQ:PYPL", "title": "PYPL" },
          { "proName": "NYSE:PFE", "title": "PFE" },
          { "proName": "NASDAQ:AZN", "title": "AZN" },
          { "proName": "NASDAQ:PEP", "title": "PEP" },
          { "proName": "NYSE:KO", "title": "KO" },
          { "proName": "NYSE:NKE", "title": "NKE" },
          { "proName": "NASDAQ:INTC", "title": "INTC" },
          { "proName": "NYSE:GLOB", "title": "GLOB" },
          { "proName": "NASDAQ:CSCO", "title": "CSCO" },
          { "proName": "NASDAQ:AAL", "title": "AAL" },
          { "proName": "NYSE:DAL", "title": "DAL" },
          { "proName": "NYSE:C", "title": "C" },
          { "proName": "NYSE:JPM", "title": "JPM" },
          { "proName": "NASDAQ:AMD", "title": "AMD" },
          { "proName": "NASDAQ:NVDA", "title": "NVDA" },
          { "proName": "NASDAQ:AAPL", "title": "AAPL" },
          { "proName": "NASDAQ:GOOG", "title": "GOOG" },
          { "proName": "NASDAQ:TSLA", "title": "TSLA" },
          { "proName": "NASDAQ:MSFT", "title": "MSFT" },
          { "proName": "NYSE:HAL", "title": "HAL" },
          { "proName": "NASDAQ:AVGO", "title": "AVGO" },
          { "proName": "NASDAQ:ADBE", "title": "ADBE" },
          { "proName": "NYSE:UBER", "title": "UBER" },
          { "proName": "BITSTAMP:BTCUSD", "title": "BTC" },
          { "proName": "BITSTAMP:ETHUSD", "title": "ETH" },
          { "proName": "NYSE:NEM", "title": "NEM" },
          { "proName": "NYSE:VALE", "title": "VALE" },
          { "proName": "NASDAQ:QCOM", "title": "QCOM" },
          { "proName": "NASDAQ:PARA", "title": "PARA" },
          { "proName": "NASDAQ:MU", "title": "MU" },
          { "proName": "NASDAQ:MRVL", "title": "MRVL" },
          { "proName": "NASDAQ:META", "title": "META" },
          { "proName": "NYSE:BABA", "title": "BABA" },
          { "proName": "NASDAQ:PDD", "title": "PDD" },
          { "proName": "NASDAQ:MELI", "title": "MELI" },
          { "proName": "NYSE:MCD", "title": "MCD" },
          { "proName": "NASDAQ:JD", "title": "JD" },
          { "proName": "NASDAQ:EA", "title": "EA" },
          { "proName": "NYSE:GM", "title": "GM" },
          { "proName": "NASDAQ:LYFT", "title": "LYFT" },
          { "proName": "NASDAQ:SMCI", "title": "SMCI" },
          { "proName": "NYSE:F", "title": "F" },
          { "proName": "NYSE:RBLX", "title": "RBLX" },
          { "proName": "NYSE:DIS", "title": "DIS" },
          { "proName": "NYSE:DELL", "title": "DELL" },
          { "proName": "NYSE:CVX", "title": "CVX" },
          { "proName": "NYSE:GE", "title": "GE" },
          { "proName": "NYSE:XOM", "title": "XOM" },
          { "proName": "NASDAQ:COST", "title": "COST" },
          { "proName": "NYSE:WMT", "title": "WMT" },
          { "proName": "NASDAQ:AMZN", "title": "AMZN" },
          { "proName": "NASDAQ:ADSK", "title": "ADSK" },
          { "proName": "NYSE:PKX", "title": "PKX" },
          { "proName": "NASDAQ:WBA", "title": "WBA" },
          { "proName": "NYSE:NIO", "title": "NIO" },
          { "proName": "NASDAQ:NFLX", "title": "NFLX" },
          { "proName": "NYSE:PBR", "title": "PBR" },
          { "proName": "NYSE:X", "title": "X" },
          { "proName": "TVC:USOIL", "title": "WTI" },
          { "proName": "NASDAQ:PTEN", "title": "PTEN" },
          { "proName": "NYSE:PGR", "title": "PGR" },
          { "proName": "NYSE:ORCL", "title": "ORCL" },
          { "proName": "NASDAQ:PAAS", "title": "PAAS" },
          { "proName": "NYSE:NUE", "title": "NUE" },
          { "proName": "NYSE:MSI", "title": "MSI" },
          { "proName": "NYSE:MSCI", "title": "MSCI" },
          { "proName": "NYSE:INFY", "title": "INFY" },
          { "proName": "NYSE:IBM", "title": "IBM" },
          { "proName": "NYSE:HSBC", "title": "HSBC" },
          { "proName": "NASDAQ:GGAL", "title": "GGAL" },
          { "proName": "NYSE:YPF", "title": "YPF" },
          { "proName": "NASDAQ:DOCU", "title": "DOCU" },
          { "proName": "NYSE:CVNA", "title": "CVNA" },
          { "proName": "NASDAQ:COIN", "title": "COIN" },
          { "proName": "NYSE:CAT", "title": "CAT" }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "es"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(TickerTapeWidget);