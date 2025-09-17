import './footer.css';
import { Mail } from 'react-feather';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footerContainer'>
      <div className='footerIncBox'>
        <p>© {currentYear} Le Mondays</p>
      </div>

      <div className='footerLinkBox'>
        <div className='footerLinks'>
          <a href='https://www.instagram.com/le.mondays/' target='_blank'>
            Instagram
          </a>
          {/* <a href='https://twitter.com/le_mondays' target='_blank'>
            Twitter
          </a> */}
          <a
            href='https://open.spotify.com/track/1aR6nOZDJAiFdH4eXI56dJ'
            target='_blank'
          >
            Spotify
          </a>
          <a href='https://www.youtube.com/@Le.Mondays' target='_blank'>
            Youtube
          </a>
        </div>
      </div>
      <div className='footerEmailBox'>
        <span>Contact us</span>
        <motion.div whileHover={{ scale: 1.1 }}>
          <a className='footerLinkBoxATag' href='mailto:le.mondays@outlook.com'>
            <Mail size={20} /> le.mondays@outlook.com
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
