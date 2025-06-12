import React, { useEffect, useState } from 'react';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CORS_PROXY = "https://api.allorigins.win/get?url=";
    const FEED_URL = encodeURIComponent("https://es-us.finanzas.yahoo.com/rss/");

    fetch(`${CORS_PROXY}${FEED_URL}`)
      .then(res => res.json())
      .then(data => {
        const parser = new window.DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = Array.from(xml.querySelectorAll("item")).slice(0, 10);
        const newsData = items.map(item => ({
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          pubDate: item.querySelector("pubDate")?.textContent,
        }));
        setNews(newsData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="rounded-xl border-2 border-[#232a3b] bg-[#181c26] shadow-[0_4px_24px_0_rgba(0,0,0,0.6)] p-0 w-full max-w-[420px] mx-auto h-[610px] flex flex-col mt-4">
      <div className="bg-[#232a3b] rounded-t-xl px-6 py-4 border-b border-[#232a3b]">
        <h2 className="text-lg font-bold text-white text-center m-0">Noticias de Interés</h2>
      </div>
      <div className="flex-1 px-6 py-4 overflow-y-auto">
        {loading ? (
          <p className="text-white text-center flex-1 flex items-center justify-center">Cargando noticias...</p>
        ) : (
          <ul className="space-y-4">
            {news.map((item, idx) => (
              <li key={idx} className="border-b border-[#232a3b] pb-2 last:border-b-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-semibold"
                >
                  {item.title}
                </a>
                <p className="text-gray-400 text-xs mt-1">
                  {item.pubDate && new Date(item.pubDate).toLocaleDateString("es-AR")}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default React.memo(News);