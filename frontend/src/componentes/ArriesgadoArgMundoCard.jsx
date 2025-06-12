import React, { useEffect, useRef, memo } from 'react';

function ArriesgadoArgMundoCard() {
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
            "name": "Arriesgado ARG y el Mundo Tickets",
            "symbols": [
              { "name": "BCBA:YPFD", "displayName": "YPF" },
              { "name": "NASDAQ:GGAL", "displayName": "GGAL" },
              { "name": "NYSE:BMA", "displayName": "BMA" },
              { "name": "BCBA:TECO2", "displayName": "TECO2" },
              { "name": "BCBA:ALUA", "displayName": "ALUA" },
              { "name": "NYSE:VALE", "displayName": "VALE" },
              { "name": "NYSE:PBR", "displayName": "PBR" },
              { "name": "NYSE:BBD", "displayName": "BBD" },
              { "name": "NYSE:BABA", "displayName": "BABA" },
              { "name": "NASDAQ:PDD", "displayName": "PDD" },
              { "name": "NYSE:NU", "displayName": "NU" },
              { "name": "NYSE:NIO", "displayName": "NIO" },
              { "name": "NASDAQ:AZN", "displayName": "AZN" },
              { "name": "NYSE:SHOP", "displayName": "SHOP" }
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
      <h2 className="text-lg font-bold text-white mb-2 text-center">Arriesgado ARG y el Mundo</h2>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        
      </div>
    </div>
  );
}

export default memo(ArriesgadoArgMundoCard);