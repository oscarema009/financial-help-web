import React, { useEffect, useRef, memo } from 'react';

function ArriesgadoCard() {
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
            "name": "Arriesgado",
            "symbols": [
              { "name": "NASDAQ:NVDA", "displayName": "NVDA" },
              { "name": "NASDAQ:INTC", "displayName": "INTC" },
              { "name": "NASDAQ:AMD", "displayName": "AMD" },
              { "name": "NASDAQ:SBUX", "displayName": "SBUX" },
              { "name": "NYSE:NKE", "displayName": "NKE" },
              { "name": "NASDAQ:PEP", "displayName": "PEP" },
              { "name": "NYSE:KO", "displayName": "KO" },
              { "name": "NASDAQ:CSCO", "displayName": "CSCO" },
              { "name": "NASDAQ:AAL", "displayName": "AAL" },
              { "name": "NYSE:DAL", "displayName": "DAL" },
              { "name": "NASDAQ:PYPL", "displayName": "PYPL" },
              { "name": "NASDAQ:ADBE", "displayName": "ADBE" },
              { "name": "NYSE:BA", "displayName": "BA" },
              { "name": "NASDAQ:QCOM", "displayName": "QCOM" },
              { "name": "NASDAQ:MRVL", "displayName": "MRVL" }
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
      <h2 className="text-lg font-bold text-white mb-2 text-center">Arriesgado S&P</h2>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        
      </div>
    </div>
  );
}

export default memo(ArriesgadoCard);