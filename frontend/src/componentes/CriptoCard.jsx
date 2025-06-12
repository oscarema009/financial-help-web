import React, { useEffect, useRef, memo } from 'react';

function CriptoCard() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "550",
        "symbolsGroups": [
          {
            "name": "Criptos",
            "symbols": [
              { "name": "BINANCE:BTCUSD", "displayName": "BTCUSD" },
              { "name": "BINANCE:ETHUSD", "displayName": "ETHUSD" },
              { "name": "BINANCE:SOLUSD", "displayName": "SOLUSD" },
              { "name": "BINANCE:ADAUSD", "displayName": "ADAUSD" },
              { "name": "BINANCE:BNBUSD", "displayName": "BNBUSD" },
              { "name": "BINANCE:DOTUSD", "displayName": "DOTUSD" },
              { "name": "BINANCE:XRPUSD", "displayName": "XRPUSD" }
            ]
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "es",
        "backgroundColor": "#131722"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="bg-[#181c26] rounded-xl shadow-lg p-4 w-full max-w-[600px] mx-auto">
      <h2 className="text-lg font-bold text-white mb-2 text-center">Criptomonedas</h2>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        
      </div>
    </div>
  );
}

export default memo(CriptoCard);