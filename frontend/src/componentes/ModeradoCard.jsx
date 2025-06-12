import React, { useEffect, useRef, memo } from 'react';

function ModeradoCard() {
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
            "name": "Moderado",
            "symbols": [
              { "name": "SPREADEX:SPX", "displayName": "S&P" },
              { "name": "NASDAQ:AAPL", "displayName": "APPLE" },
              { "name": "NYSE:DELL", "displayName": "DELL" },
              { "name": "NASDAQ:AMZN", "displayName": "AMAZON" },
              { "name": "NASDAQ:GOOGL", "displayName": "GOOGLE" },
              { "name": "NASDAQ:MSFT", "displayName": "MICRO" },
              { "name": "NYSE:WFC", "displayName": "WFC" },
              { "name": "NYSE:WMT", "displayName": "WALL" },
              { "name": "NASDAQ:COST", "displayName": "COST" },
              { "name": "NYSE:BRK.B", "displayName": "BRK" },
              { "name": "NYSE:XOM", "displayName": "EXXOM" },
              { "name": "NYSE:CVX", "displayName": "CVX" },
              { "name": "NYSE:TSM", "displayName": "TSM" },
              { "name": "NYSE:SONY", "displayName": "SONY" }
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
      <h2 className="text-lg font-bold text-white mb-2 text-center">Moderado</h2>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        
      </div>
    </div>
  );
}

export default memo(ModeradoCard);