import Hero from './components/Hero';
import { UpdateFollower } from 'react-mouse-follower';
import Products from './components/Products/Product';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner/BannerText';
import Blogs from './components/Blogs/Blogs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
// import { useTranslation } from 'react-i18next';

function App() {
  // const {t} = useTranslation();

  return (
    <main className='overflow-x-hidden cursor-none'>
      {/* {t ('WelcomeMessage')} */}
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
      <Blogs />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App
