import * as React from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import appstore from './assets/appstore.svg';
import playstore from './assets/playstore.svg';
import logo from './assets/small-logo.svg';
import qrcode from './assets/qr-code.svg';
import './Footer.css';

const Footer = () => {
    const [language, setLanguage] = React.useState("English");
  
    const handleChange = (event) => {
      setLanguage(event.target.value);
    };

    return ( 
        <div className="footer">
            <Grid container>
                <Grid item xs={2}>
                    <img src={logo} alt="logo" />
                </Grid>
                <Grid item xs={2}>
                    <span className="small-title">Products</span>
                    <span className="option">Consumers</span>
                    <span className="option">Business</span>
                    <span className="option">Partners</span>
                </Grid>
                <Grid item xs={2}>
                    <span className="small-title">Company</span>
                    <span className="option">About</span>
                    <span className="option">Carrers</span>
                    <span className="option">Press</span>
                    <span className="option">Blog</span>
                </Grid>
                <Grid item xs={2}>
                    <span className="small-title">Help</span>
                    <span className="option">FAQ & Support</span>
                    <span className="option">Platform Status</span>
                    <span className="option">Criptionary</span>
                    <span className="option">Pricing</span>
                    <span className="option">Legal</span>
                </Grid>
                <Grid item xs={2}>
                    <span className="small-title">Social</span>
                    <span className="option">Facebook</span>
                    <span className="option">Twitter</span>
                    <span className="option">Instagram</span>
                    <span className="option">LinkedIn</span>
                </Grid>
                <Grid item xs={2} align="right">
                    <img src={appstore} alt="appstore"/>
                    <img 
                        src={playstore} 
                        alt="playstore" 
                        className="spacing"
                    />
                    <div>
                        <Select
                            id="language"
                            value={language}
                            onChange={handleChange}
                            size="small"
                        >
                            <MenuItem value="English">English</MenuItem>
                            <MenuItem value="Portuguese">Portuguese</MenuItem>
                        </Select>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={8}>
                    <span className="address">
                        Uphold Europe Limited, Reg No. 09281410, 
                        Registered Office: Interchange Triangle, Chalk Farm Road,
                        London, England, NW1 8AB
                    </span>
                    <span className="bottom">© Uphold, Inc. 2022, All Rights Reserved</span>
                    <span className="bottom link">Agreements</span>
                    <span className="bottom link">Privacy & Data Policy</span>
                    <span className="bottom link">Cookie Policy</span>
                </Grid>
                <Grid item xs={4} align="right">
                    <img src={qrcode} alt="qrcode" />
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Footer;