import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import './Section4.scss'
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';




const Section4 = ()=> {


    return (
        <div name='form'>
            <h1>Register to get a work </h1>
            <form className='form'>
            
                <FormControl>
                <FormLabel component="legend" >Name</FormLabel>
                    <TextField placeholder='Your name' type='text' variant="outlined"></TextField>
                </FormControl>
                <FormControl>
                <FormLabel component="legend">Email</FormLabel>
                    <TextField placeholder='Your email' variant="outlined"></TextField>
                </FormControl>
                <FormControl>
                <FormLabel component="legend" >Phone number</FormLabel>
                    <TextField placeholder='+380 XX XXX XX XX' variant="outlined"></TextField>
                    <FormHelperText>Enter phone number in open format</FormHelperText>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="position" name="position" >
                        <FormControlLabel  value="1" control={<Radio/>} label="Lawyer" />
                        <FormControlLabel value="2" control={<Radio />} label="Content manager" />
                        <FormControlLabel value="3" control={<Radio />} label="Security" />
                        <FormControlLabel value="4" control={<Radio />} label="Designer" />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                <FormLabel component="legend">Photo</FormLabel>
                    <TextField placeholder='Upload you photo' variant="outlined" type='file' id='file' accept='.jpeg'></TextField><Button id='button' value='upload'>Browse</Button>
                </FormControl>
            <button>Sign up now</button>
            </form>

        </div>
    )
}
export default Section4