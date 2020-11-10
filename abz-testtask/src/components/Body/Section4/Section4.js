import React, { useRef } from 'react'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import './Section4.scss'
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { connect } from 'react-redux';


const Section4 = (props) => {

    const { positions } = props

    let positionsList = typeof positions !== 'undefined' ? positions : []
    let imgRef = useRef('')
    let name = useRef('')
    let email = useRef('')
    let phone = useRef('')

    let fileName = imgRef.current.value !== undefined ? imgRef.current.value.replace(/^.*[\\\/]/, '') : ''
    const [value, setValue] = React.useState('')
    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData()
        formData.append("name", name.current.value)
        formData.append("email", email.current.value)
        formData.append("phone", phone.current.value)
        formData.append("position_id", +value)
        formData.append("photo", imgRef.current.files[0])

        const registration = async () => {
            const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token', {
                method: "GET"
            })

            const data = await res.json()
            const token = data.token

            const newUser = async () => {
                const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
                    method: "POST",
                    headers: {
                        'Token': token
                    },
                    body: formData
                })
            }
            newUser()
        }
        registration()

    }
    return (
        <div name='form'>
            <h1>Register to get a work </h1>
            <form className='form' onSubmit={handleSubmit} autoComplete="off">
                <FormControl>
                    <FormLabel component="legend" htmlFor='name'>Name</FormLabel>
                    <TextField id='name' inputRef={name} minLength='2' maxLength='60' placeholder='Your name' required variant="outlined" ></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel component="legend" htmlFor='email'>Email</FormLabel>
                    <TextField id='email' inputRef={email} minLength='2' maxLength='60' placeholder='Your email' required variant="outlined"  ></TextField>
                </FormControl>
                <FormControl>
                    <FormLabel component="legend" htmlFor='phone' >Phone number</FormLabel>
                    <TextField id='phone' inputRef={phone} placeholder='+380 XX XXX XX XX' variant="outlined" ></TextField>
                    <FormHelperText>Enter phone number in open format</FormHelperText>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select your position</FormLabel>
                    <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange}>
                        {positionsList.map(position => <FormControlLabel value={position.id + ''} control={<Radio />} key={position.name} label={position.name} />)}
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel component="legend">Photo</FormLabel>
                    <input
                        accept='image/*'
                        id='image'
                        type='file'
                        style={{ display: "none" }}
                        ref={imgRef}
                    />
                    <TextField placeholder='Upload you photo' variant="outlined" id='file'/>
                    <label htmlFor='image'>
                        <Button id='image' component="span" variant="contained" >Browse</Button>
                    </label>

                </FormControl>
                <button type='submit'>Sign up now</button>
            </form>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        positions: state.positions.positions,
    }
}


export default connect(mapStateToProps)(Section4)