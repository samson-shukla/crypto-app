import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, BackTop } from 'antd';

import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className="main">
            <BackTop className='back-top' />
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </div>
            </Layout>
            <div className="footer" theme='dark'>
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    MyCryptoHub © All Rights Reserved
                </Typography.Title>
                <Space className='space'>
                    <Link to='/'>Home</Link>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    <Link to='/news'>News</Link>
                </Space>
                <Space className='space'>
                    <a href="https://samsonshukla.xyz" target='_blank' rel="noreferrer">" Dev by Samson "</a>
                </Space>
            </div>
        </div>
    </div>
  )
}

export default App