import React from 'react'

import Avatarka from '../Avatar/AvatarPic';
import { Box, makeStyles, Tooltip, Typography, withStyles } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';


const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection:'column',
      width:200,
      marginBottom:41,
      backgroundColor: '#f9f9f3',
      whiteSpace:'nowrap',
    },
    avatar:{
      marginBottom: 20
    },
    name:{
      whiteSpace:'normal',
      width: '100%',
      textAlign: 'center',
      fontSize:24,
      marginBottom: 20
    },
    email:{
      width: '100%',
      textAlign: 'center'
    },

    
  }));
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: 'rgb(45, 45, 45)',
      color: '#fff',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }))(Tooltip);

const UserCard = (props)=> {
    const {id,name,email,phone,position,regtime,photo} = props
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Avatarka className={classes.avatar} avatarUrl={photo}/>
                <Box className={classes.name}>{name}</Box>
                <Typography className={classes.position} >{position}</Typography>
                <LightTooltip className={classes.tooltip} title={email}>
                  <Box className={classes.email} textOverflow="ellipsis" overflow="hidden" component="div">{email}</Box>
                </LightTooltip>
                <Typography className={classes.phone}>{phone}</Typography>
            </div>
    )
}
export default UserCard