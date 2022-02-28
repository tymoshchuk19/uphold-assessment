import Grid from '@mui/material/Grid';
import ConverterInfo from './ConverterInfo';
import Converter from './Converter';

const Content = () => {
    return ( 
        <Grid 
            className="content" 
            container 
            justifyContent="center"
        >
            <Grid item xs={10} sm={8} md={4} align="center">
                <ConverterInfo />
                <Converter />
            </Grid>
        </Grid> 
  );
}
 
export default Content;