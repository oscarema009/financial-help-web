import React, { useEffect, useRef, memo } from 'react';

function ChartSymbolCard() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          ["SPREADEX:SPX|3M"],
          ["NASDAQ:NVDA|3M"],
          ["BCBA:IMV|3M"],
          ["NASDAQ:GGAL|3M"],
          ["BCBA:YPFD|3M"]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "400",
        "locale": "es",
        "colorTheme": "dark",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "candlesticks",
        "headerFontSize": "medium",
        "lineType": 0,
        "dateRanges": [
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ],
        "upColor": "#22ab94",
        "downColor": "#f7525f",
        "borderUpColor": "#22ab94",
        "borderDownColor": "#f7525f",
        "wickUpColor": "#22ab94",
        "wickDownColor": "#f7525f"
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

export default memo(ChartSymbolCard);