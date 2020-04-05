import React from "react";

import fb_logo from "../images/fb_logo.png";
import twitter_logo from "../images/twitter_logo.png";
import who_logo_without_text from "../images/who_logo_without_text.png";
import YouTube_social from "../images/YouTube_social.jpg";

export const Footer = () => {
  return (
    <div className="f_container">
      <a
        href="https://www.youtube.com/user/who?sub_confirmation=1"
        target="_blank"
      >
        <img className="social_logo" src={YouTube_social} alt="who" />
      </a>
      <a href="https://www.facebook.com/WHO/" target="_blank">
        <img className="social_logo" src={fb_logo} alt="fb" />
      </a>
      <a
        href="https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=who"
        target="_blank"
      >
        <img className="social_logo" src={twitter_logo} alt="twitter" />
      </a>
      <a
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        target="_blank"
      >
        <img className="social_logo" src={who_logo_without_text} alt="who" />
      </a>
    </div>
  );
};
