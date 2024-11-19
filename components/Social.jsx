import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaFacebook, FaInstagram} from "react-icons/fa";


const socials = [
    {icon : <FaGithub/> , path : "https://github.com/MohammadKerdasi"},
    {icon : <FaLinkedinIn/> , path : "https://www.linkedin.com/in/mohammad-kerdasi-3851422a9/"},
    {icon : <FaFacebook/> , path : "https://www.facebook.com/mohammad.kerdasi"},
    {icon : <FaInstagram/> , path : "https://www.instagram.com/mohammad_bilal_kerdasi/?hl=ar"},
]
const Social = ({containerStyles, iconStyle}) => {
  return <div className={containerStyles}>
    {socials.map((Item, index) => {
        return <Link key={index} href={Item.path} className={iconStyle} >
            {Item.icon}
        </Link>

        
    })}
  </div>;
};

export default Social;
