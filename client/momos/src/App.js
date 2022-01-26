import React, { useState } from 'react'
import logo from './logo.svg'
import { useApi } from './hooks/useApi';

function App() {
  const [data, doScraping] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrapUrl = "https://api.proxycrawl.com/scraper?token=JsviWNTmu-y-Ze3d15TXCg&url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB00JITDVD2";
  const url = '/lets-scrape';
  const [, getScrapedData] = useApi(url, {}, { method: 'POST' }, false);
  const fetchInfo = async () => {
    setLoading(true)
    console.log('fetched');
    const requestObj ={
      "urls" : [scrapUrl]
  }
  const { responseData, isLoading }= await getScrapedData(requestObj);
  doScraping(responseData.data)
  setLoading(false)

  }
  return (
    <div className="App">
      <button className="btn btn-primary" style={{ backgroundColor: 'green', color: 'white',margin: '50px'}}onClick={fetchInfo}>{loading ? 'Pleae wait...' : 'Scrap Data'}</button>

          {data && data && data.length > 0 && data.map((item, _index) =>
                  <div>
                    <img style={{height: '360px'}} src={item.images[0] || logo} className="d-block w-100" alt="..." />
                    <div>
                      <h5 style={{ color: 'black' }}>Name: {item.name || ''}</h5>
                      <p style={{ color: 'black' }}>Brand: {item.brand || ''}</p>
                    </div>
                  </div>
                )}
    </div>
  );
}

export default App;
