import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRealTimeData,
  fetchHistoricalData,
  fetchNews,
} from "../redux/slices/financeSlices";

const PortafolioPage = () => {
  const dispatch = useDispatch();
  const { realTime, historical, news, loading, error } = useSelector(
    (state) => state.finance
  );

  useEffect(() => {
    dispatch(fetchRealTimeData());
    dispatch(fetchHistoricalData());
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Columna 1: Datos en tiempo real */}
      <div>
        <h2>Mercado en tiempo real</h2>
        {realTime ? (
          <p>Precio actual: {realTime["05. price"]}</p>
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>

      {/* Columna 2: Datos históricos */}
      <div>
        <h2>Datos históricos</h2>
        {historical ? (
          Object.keys(historical).map((date) => (
            <p key={date}>
              {date}: {historical[date]["4. close"]}
            </p>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>

      {/* Columna 3: Noticias */}
      <div>
        <h2>Noticias Financieras</h2>
        {news.map((article, index) => (
          <div key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortafolioPage;
