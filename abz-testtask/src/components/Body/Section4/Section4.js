import React, { useRef } from 'react'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import './Section4.scss'
import { Button, createMuiTheme, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { loadUsersFromServer } from '../../../redux/users/usersActions';
import { makeStyles } from '@material-ui/core/styles';
import { toggleModal } from '../../../redux/modal/modalActions';

export const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#000'
      },
    },
  });


const useStyles = makeStyles((theme) => ({
    root: {
        width: '330px',
        '& .MuiTextField-root': {
            marginTop: '14px',

        },
        '& .Mui-focused':{
            borderColor: 'red'
        },
    
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'solid 1px #d4d9de'
            },
        },
      
        '& .MuiOutlinedInput-input': {
            "&::placeholder": {
                fontSize: '16px',
                color: '#b2b9c0',
                fontFamily: 'PT Sans , sans-serif',
            },
            padding: '14px',
            height: '14px'
        },
        '& .MuiFormLabel-root': {
            fontFamily: 'PT Sans , sans-serif',
            fontSize: '16px',
            color: '#212529',
        },
        '& .MuiFormGroup-root': {
            marginTop: '22px',
            marginBottom: '22px'
        },
        '& .MuiRadio-root': {
            color: '#adb5bd'
        },
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: '#007bff',
        },
        '& .MuiButton-contained':{
            marginTop: '14px',
            width: '83px',
            backgroundColor:'#f8f7f5',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            fontFamily: 'PT Sans , sans-serif',
            textTransform:"none",
            boxShadow:'none',
            border: 'solid 1px #d4d9de'
        }
    },
    field: {
        margin: '0 auto',
        marginBottom: '27px',
        width: '100%'

    },
    photo: {
        '& .MuiOutlinedInput-input': {
            padding: '14px 68px 10px 13px',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRight: 'none',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }
        }

    },
    inputfield:{
        '&$focused':{
            borderColor:theme.palette.primary
        }
    }

}));


const Section4 = (props) => {


    const classes = useStyles();

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

    const dispatch = useDispatch()
    const openModal = () => dispatch(toggleModal())
    const update = () => dispatch(loadUsersFromServer()) 

    const handleSubmit = (e) => {
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
                // console.log(await res.json())
            }
            newUser()
        }
        registration()
        update()
        openModal()
        
    }
    return (
        <>
        <div name='form' id='form' className='formwrapper'>
            <h1 className='formwrapper__title'>Register to get a work </h1>
            <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
                <FormControl className={classes.field}>
                    <FormLabel component="legend" htmlFor='name'>Name</FormLabel>
                    <TextField id='name' inputRef={name} minLength='2' maxLength='60' placeholder='Your name' required variant="outlined"  className={classes.inputfield}></TextField>
                </FormControl>
                <FormControl className={classes.field}>
                    <FormLabel component="legend" htmlFor='email'>Email</FormLabel>
                    <TextField id='email' inputRef={email} minLength='2' maxLength='60' placeholder='Your email' required variant="outlined"  ></TextField>
                </FormControl>
                <FormControl className={classes.field}>
                    <FormLabel component="legend" htmlFor='phone' >Phone number</FormLabel>
                    <TextField id='phone' inputRef={phone} placeholder='+380 XX XXX XX XX' variant="outlined" ></TextField>
                    <FormHelperText>Enter phone number in open format</FormHelperText>
                </FormControl>
                <FormControl component="fieldset" className='form__field'>
                    <FormLabel component="legend">Select your position</FormLabel>
                    <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange}>
                        {positionsList.map(position => <FormControlLabel value={position.id + ''} control={<Radio />} key={position.name} label={position.name} />)}
                    </RadioGroup>
                </FormControl>
                <FormControl >
                    <FormLabel component="legend">Photo</FormLabel>
                    <input
                        accept='image/*'
                        id='image'
                        type='file'
                        style={{ display: "none" }}
                        ref={imgRef}
                    />
                    <div className='photo-input'>
                        <TextField placeholder='Upload you photo' disabled variant="outlined" className={classes.photo} id='file'>{fileName}</TextField>
                        <label htmlFor='image'>
                            <Button id='image' component="span" variant="contained" >Browse</Button>
                        </label>
                    </div>
                </FormControl>

                <button className='button' type='submit' >Sign up now</button>
            </form>
            
        </div> 
    
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        positions: state.positions.positions,
        modal: state.modal.modalIsOpen
    }
}


export default connect(mapStateToProps)(Section4)