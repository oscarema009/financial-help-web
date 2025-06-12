import React, { useEffect, useRef, memo } from 'react';

function MarketOverviewCard() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "dark",
        "dateRange": "12M",
        "showChart": true,
        "locale": "es",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": true,
        "width": "400",
        "height": "610",
        "plotLineColorGrowing": "rgba(0, 255, 0, 1)",
        "plotLineColorFalling": "rgba(255, 0, 0, 1)",
        "gridLineColor": "rgba(42, 46, 57, 0)",
        "scaleFontColor": "rgba(219, 219, 219, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "tabs": [
          {
            "title": "Principales",
            "symbols": [
              { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
              { "s": "FOREXCOM:NSXUSD", "d": "Nasdaq" },
              { "s": "FOREXCOM:DJI", "d": "Dow Jones" },
              { "s": "INDEX:NKY", "d": "Nikkei 225" },
              { "s": "INDEX:HSI", "d": "Hang Seng" },
              { "s": "BCBA:IMV", "d": "IMV" },
              { "s": "BINANCE:BTCUSDT", "d": "BTC" }
            ],
            "originalTitle": "Principales"
          },
          {
            "title": "Forex",
            "symbols": [
              { "s": "FX:EURUSD", "d": "EUR to USD" },
              { "s": "FX:GBPUSD", "d": "GBP to USD" },
              { "s": "FX:USDJPY", "d": "USD to JPY" },
              { "s": "FX:USDCHF", "d": "USD to CHF" },
              { "s": "FX:AUDUSD", "d": "AUD to USD" },
              { "s": "FX:USDCAD", "d": "USD to CAD" },
              { "s": "FX_IDC:USDARS", "d": "Dolar" }
            ],
            "originalTitle": "Forex"
          },
          {
            "title": "Futures",
            "symbols": [
              { "s": "BMFBOVESPA:ISP1!", "d": "S&P 500 Index Futures" },
              { "s": "BMFBOVESPA:EUR1!", "d": "Euro Futures" },
              { "s": "PYTH:WTI3!", "d": "WTI CRUDE OIL" },
              { "s": "BMFBOVESPA:ETH1!", "d": "Hydrous ethanol" },
              { "s": "BMFBOVESPA:CCM1!", "d": "Corn" }
            ],
            "originalTitle": "Futures"
          },
          {
            "title": "Cripto",
            "symbols": [
              { "s": "BINANCE:BTCUSDT", "d": "BTC" },
              { "s": "BINANCE:ETHUSDT", "d": "ETH" },
              { "s": "BINANCE:XRPUSDT", "d": "XRP" },
              { "s": "BINANCE:SOLUSDT", "d": "SOL" },
              { "s": "BINANCE:ADAUSDT", "d": "ADA" },
              { "s": "BINANCE:BNBUSDT", "d": "BNB" },
              { "s": "BINANCE:DOTUSDT", "d": "DOT" }
            ],
            "originalTitle": "Cripto"
          }
        ]
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="rounded-xl border-2 border-[#232a3b] bg-[#181c26] shadow-[0_4px_24px_0_rgba(0,0,0,0.6)] p-0 w-full max-w-[420px] mx-auto h-[610px] flex flex-col mt-4">
      
      <div className="flex-1 px-2 py-0 overflow-hidden">
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
}

export default memo(MarketOverviewCard);