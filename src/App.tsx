import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [look, setLook] = useState({date: "", count: null});

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get("https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/daily_positive_detail.json");
            const json = res.data;
            console.log(json);
            const jsonData = json.data;
            const dates = jsonData.map(item=>item.diagnosed_date);
            const counts = jsonData.map(item=>item.count);
            console.log(dates, counts)

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

    return (
        <>
            <h2
                style={{
                    textAlign: "center",
                    width: "100vw",
                    color: "black",
                    fontSize: "5vh",
                }}
            >
                    {look.date.split(" ")[0].replace("/", "年 ").replace("/", "月")+"日"}
            </h2>
            <h1
                style={{
                    textAlign: "center",
                    width: "100vw",
                    color: "crimson",
                    fontSize: "10vh",
                }}
            >
                <a style={{fontSize: "5vh", color:"black"}}>感染者 </a>
                    {look.count}
                <a style={{fontSize: "5vh", color:"black"}}> 人</a>
            </h1>
            <div style={{width:"100vw", overflowX: "scroll"}}>
            <Bar
                data={data}
                width={window.innerWidth*5}
                height={window.innerHeight}
                options={{
                    maintainAspectRatio: false,
                    responsive: false
                }}
            />
            </div>
        </>
    );
}

export default App;
