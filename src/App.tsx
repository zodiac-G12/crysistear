import React, { useState, useEffect } from 'react';
import Chart, { Bar } from 'react-chartjs-2';
import axios from 'axios';

const getData = async (setData, setLook) => {
  try {
    const res = await axios.get("https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/daily_positive_detail.json");
    const json = res.data;
    console.log(json);
    const jsonData = json.data;
    const dates = jsonData.map(item=>item.diagnosed_date);
    const counts = jsonData.map(item=>item.count);
    console.log(dates, counts);

    const data = {
      labels: dates,
      datasets: [
        {
          label: "COVID-19 in TOKYO",
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: counts
        }
      ]
    };

    setData(data);
    setLook({date: json.date, count: counts.slice(-1)[0]});
  } catch (err) {
    console.error(err);
  }
};

function App() {
  // 感染者の過去全データ
  const [data, setData] = useState({});
  // 今日の日付・感染者数
  const [look, setLook] = useState({date: "", count: null});
  const [range, setRange] = useState(0);

  useEffect(() => {
    getData(setData, setLook);
  }, []);

  return (
    <>
      <h2
        style={{
          position: "fixed",
          width: "100vw",
          textAlign: "center",
          color: "black",
          fontSize: "5vh",
        }}
      >
        {look.date.split(" ")[0].replace("/", "年 ").replace("/", "月")+"日"}
      </h2>
      <h1
        style={{
          position: "fixed",
          width: "100vw",
          textAlign: "center",
          color: "crimson",
          fontSize: "10vh",
          top: "8vh",
        }}
      >
        <a style={{fontSize: "5vh", color:"black"}}>感染者 </a>
        {look.count}
        <a style={{fontSize: "5vh", color:"black"}}> 人</a>
      </h1>
      <div style={{width: `${100 + 700 * (range / 100)}vw`, height: "50vh", overflowX: "scroll", overflowY: "hidden", paddingTop: "30vh"}}>
        <Bar
          data={data}
          width={window.innerWidth + (1 + 7 * (range / 100))}
          redraw={true}
          height={window.innerHeight * 0.5}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
      <div style={{position: "fixed", width: "100vw", textAlign: "center", marginTop: "5vh"}}>
        <input type="range" id="dataRange" name="dataRange" min="0" max="100" value={range} step="1" onChange={(e)=>setRange(parseInt(e.target.value))} />
        <label htmlFor="dataRange">Range</label>
      </div>
    </>
  );
}

export default App;
