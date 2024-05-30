import facebookLogo from '../assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg'

const networkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
}

export const OverviewCard = ({ user, audience, audienceType, network }) => {
    return (
        <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto">
            <img src={networkLogos[network]} alt={`logo ${network}`}/>
            <p>{user}</p>
            <p>{audience}</p>
            <p>{audienceType}</p>
        </article>
    )
}