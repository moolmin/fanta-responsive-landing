import { useState } from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { UpdateFollower } from 'react-mouse-follower';
import Products from './components/Products/Product';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner/BannerText';

function App() {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 10,
        followSpeed: 1.5,
      }}
      >
      <Hero />
      <Products />
      </UpdateFollower>
      <Banner />
      <BannerText />
      
    </main>
  );
}

export default App
