import './Hero.css'
import heroBanner from '../assets/herobanner.png';

function Hero() {


    return (
    <>
        <img className='hero-image' src={heroBanner} alt="Hero banner" />
    </>
)
}

export default Hero;