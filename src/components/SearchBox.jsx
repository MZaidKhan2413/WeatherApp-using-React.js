import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox(){
    return (
        <form className="searchBox">
            <TextField id="city" label="City Name" variant="standard" name='city'/>
            <br />
            <Button variant="contained">search</Button>
        </form>
    )
}