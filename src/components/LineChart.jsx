import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    } from 'chart.js';

import { Col, Row, Typography } from 'antd';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = [];
    const coinTimestamp = [];
    const coinHistoryLength = coinHistory?.data?.history?.length;
    let timeFormat = 'll';
    let diff = coinHistory?.data?.history[0].timestamp - coinHistory?.data?.history[coinHistoryLength-1].timestamp;

    // Extracting CoinPrice Array
    for (let i = 0; i < coinHistoryLength; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    // Extracting Timestamp Array
    if(diff < 86400)
    {
      timeFormat = 'LT';
    }    
    for (let i = 0; i < coinHistoryLength; i += 1) {
        let currentTime = coinHistory?.data?.history[i].timestamp;
        coinTimestamp.push(moment(currentTime*1000).format(timeFormat));
    }

    const data = {
        labels: coinTimestamp.reverse(),
        datasets: [{
            label: 'Price In USD',
            data: coinPrice.reverse(),
            fill: false,
            backgroundColor: '#1A2980',
            borderColor: '#808080',
          },
        ],
    };

      return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} />
        </>
      );
};

export default LineChart;