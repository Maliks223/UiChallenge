import React from "react";
import "./footer.css";
import {SocialMediaIconsReact} from 'social-media-icons-react';

const footer = () => {
  return (
    <div className="footer">
      <div id="contact-section">
        <div className="footerTitle">ROLLS-ROYCE</div>
            <div className="footerInfo">
                <div className="footerLeft">
                    <div className="footerLeft1">
                    <div>MY ROLLS-ROYCE</div>
                    <div>PRE-OWNED</div>
                    <div>COOKIES</div>
                    <div>PRESS CLUB</div>
                    <div>LEGAL</div>
                    </div>

                    <div className="footerLeft2">
                    <div>COMPLAINTS</div>
                    <div>FIND A DEALER</div>
                    <div>EU TYRE LABELS</div>
                    <div>FAQS</div>
                    <div>CONTACT</div>
                    </div>

                    <div className="footerLeft3">
                    <div>PRIVACY</div>
                    <div>CAREERS</div>
                    <div>SITE MAP</div>
                    <div>WHISPERS</div>
                    <div>LANGUAGE</div>
                    </div>

                </div>
                <div className="footerRight">
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="30" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="30" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="phone" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="30" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,0)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="30" />
                </div>
            </div>

      </div>
    </div>
  );
};

export default footer;
