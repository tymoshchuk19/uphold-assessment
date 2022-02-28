import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SDK from '@uphold/uphold-sdk-javascript';
import Grid from '@mui/material/Grid';
import images from './assets/images';
import './Converter.css';

const Converter = () => {
    const currencies = ['USD','EUR','AED','ARS','AUD','BAT',
        'BCH','BRL','BTC','XRP','VOX','XAU','UAE'];
    const [currency, setCurrency] = React.useState('USD');
    const [tickers, setTickers]  = React.useState([]);
    const [amount, setAmount]  = React.useState(0.00);

    const sdk = new SDK({
        baseUrl: 'http://api-sandbox.uphold.com',
        clientId: 'foo',
        clientSecret: 'bar',
    });

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);

        sdk.getTicker(event.target.value)
            .then(res => {
                const aux = res.filter(ticker => 
                    currencies.includes(
                        ticker.pair.replace('-','').replace(event.target.value,'')
                    ) && ticker.currency !== event.target.value
                );
                setTickers(aux);
            });
    };

    const handleAmountChange = (event) => {
        if(amount == 0 && event.target.value > 0 && currency === 'USD') 
            handleCurrencyChange({target: {value: 'USD'}});
        setAmount(event.target.value ? event.target.value : 0);
    }
    

    return ( 
        <div className="converter">
            <OutlinedInput 
                id="amount" 
                defaultValue="0.00"
                type="number"
                inputProps={{ min: 0 }}
                notched={false}
                fullWidth
                onChange={handleAmountChange}
                endAdornment={
                    <InputAdornment position="end" >
                        <Select
                            id="currency"
                            value={currency}
                            onChange={handleCurrencyChange}
                            size="small"
                        >{currencies.map((currency) => (
                            <MenuItem value={currency} key={currency}>
                                <div className="centered">
                                    <img 
                                        src={images[currency]} 
                                        alt="currency-logo" 
                                        className="resize"
                                    />
                                    <span className='adjust'>{currency}</span>
                                </div>
                            </MenuItem>
                            ))}
                        </Select>
                    </InputAdornment>
                } 
            />
            {   amount > 0 &&
                tickers.map((ticker) => ( 
                    <Grid 
                        container 
                        className="fix" 
                        key={ticker.pair} 
                        alignItems="center"
                    >
                        <Grid item xs={6} align="left">
                            <span>{(parseFloat(ticker.bid)*amount).toString(10).slice(0,8)}</span>
                        </Grid>

                        <Grid item xs={4} align="right">
                                <img 
                                    src={images[ticker.pair.replace(currency,'')]} 
                                    alt="currency" 
                                    className="resize"
                                />
                        </Grid>
                        <Grid item xs={2}>
                            <span>{ticker.pair.replace(currency,'')}</span>
                        </Grid>
                    </Grid>
                ))
            }
            {   amount == 0 &&
                (<span className="fieldinfo">Enter an amount to check the rates.</span>)
            }
        </div>
     );
}
 
export default Converter;