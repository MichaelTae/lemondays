import './App.css';
import LogoLink from './components/links/links.jsx';
import LemonDaysBanner from './components/Banner/lemonDaysBanner';
import { Instagram, Youtube, Twitter } from 'react-feather';
import { motion } from 'framer-motion';
import Footer from './shared/footer';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: -200,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};
function App() {
  const SpotifySVG = (props) => (
    <svg
      className='instagram-gradient'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 2931 2931'
    >
      <defs>
        <linearGradient
          id='instagram-gradient'
          x1='100%'
          y1='0%'
          x2='0%'
          y2='100%'
        >
          <stop offset='0%' style={{ stopColor: '#405DE6' }} />
          <stop offset='30%' style={{ stopColor: '#5851DB' }} />
          <stop offset='60%' style={{ stopColor: '#833AB4' }} />
          <stop offset='100%' style={{ stopColor: '#C13584' }} />
          <stop offset='100%' style={{ stopColor: '#E1306C' }} />
          <stop offset='100%' style={{ stopColor: '#FD1D1D' }} />
          <stop offset='100%' style={{ stopColor: '#F56040' }} />
          <stop offset='100%' style={{ stopColor: '#F77737' }} />
          <stop offset='100%' style={{ stopColor: '#FCAF45' }} />
          <stop offset='100%' style={{ stopColor: '#FFDC80' }} />
        </linearGradient>
      </defs>
      <path
        d='M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z'
        style={{
          fill: '#2ebd59',
        }}
      />
    </svg>
  );

  return (
    <>
      <div>
        <LemonDaysBanner />
        <motion.div
          className='mainGrid'
          variants={container}
          initial='hidden'
          animate='show'
        >
          <motion.div
            variants={item}
            className='logoLink'
            whileHover={{ scale: 1.05 }}
          >
            <LogoLink
              icon={<Instagram className='instagram-gradient' />}
              title={'Instagram'}
              link={'https://www.instagram.com/le.mondays/'}
            />
          </motion.div>

          <motion.div
            variants={item}
            className='logoLink'
            whileHover={{ scale: 1.05 }}
          >
            <LogoLink
              icon={<SpotifySVG />}
              title={'Spotify'}
              link={
                'https://open.spotify.com/artist/6RL0881Jgc4kEvgXwtfeDU?si=npErDQ45Q3aMToYqpj3o0A'
              }
            />
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className='logoLink'
          >
            <LogoLink
              icon={<Youtube fill='red' />}
              title={'Youtube'}
              link={'https://www.youtube.com/@Le.Mondays'}
            />{' '}
          </motion.div>
          {/* <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className='logoLink'
          >
            <LogoLink
              icon={<Twitter fill='#1DA1F2' color='#1DA1F2' />}
              title={'Twitter'}
              link={'https://twitter.com/le_mondays'}
            />{' '}
          </motion.div> */}
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default App;
