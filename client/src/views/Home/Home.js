import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='home-container d-flex'>
        <div className='home-detail'>
      <h1 className='heading'>Smart Spend</h1>
      <span>A Smart Spend is a user-friendly financial management tool that helps individuals and businesses monitor and categorize their spending. </span><span className='second-para'>With real-time tracking, budgeting features, and detailed insights through reports, it empowers users to make informed decisions about their finances. The tool often comes with multi-platform accessibility, ensuring easy and secure management of expenses anytime, anywhere.</span>
      </div>
      </div>
    </div>
  )
}

export default Home
