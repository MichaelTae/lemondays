import lemonDays from '../../assets/le_mondays_logo_web_may2023.png'
import './Banner.css'
const LemonDaysBanner = () => {
    return(
        <div>
          <img src={lemonDays} className='banner' alt='Lemondays Logotype' />
        </div>
    )
};

export default LemonDaysBanner;