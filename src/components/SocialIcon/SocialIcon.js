import React from 'react'
import { Facebook, Twitter, Instagram } from "react-feather";


function SocialIcon(props){

    let { url, facebook, twitter, instagram } = props;

    return(
        <div>
        <a href={url}>
        {
            facebook &&
            <Facebook className="icon-social" color="white" />
        }
        {
            twitter &&
            <Twitter className="icon-social" color="white" />
        }
        {
            instagram &&
            <Instagram className="icon-social" color="white" />
        }
        </a>
        </div>
    )
}

export default SocialIcon;