
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import logo from './assets/logo.svg';
import './Header.css';

const Header = () => {
    return ( 
        <Grid 
            className="header"
            container
            alignItems="center"
        >
            <Grid item align="center" xs={10} sm={4}>
                <span className="tab">Personal</span>
                <span className="tab">Business</span>
                <span className="tab">Partners</span>
            </Grid>
            <Grid 
                item 
                align="center" 
                justify="center" 
                xs={5} 
                sm={4}
            >
                <img src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Grid item align="right" xs={5} sm={4}>
                <Button variant="contained" color="success">
                    Log In
                </Button>
            </Grid>
        </Grid>
    );
}
 
export default Header;