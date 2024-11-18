import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaFacebook, FaInstagram} from "react-icons/fa";


const socials = [
    {icon : <FaGithub/> , path : ""},
    {icon : <FaLinkedinIn/> , path : ""},
    {icon : <FaFacebook/> , path : ""},
    {icon : <FaInstagram/> , path : ""},
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
