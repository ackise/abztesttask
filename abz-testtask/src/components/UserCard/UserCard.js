import React from 'react'
import Card from '@material-ui/core/Card';
import Avatarka from '../Avatar/AvatarPic';
import { makeStyles, Tooltip, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection:'column',
      width:200,
      marginBottom:41,
      backgroundColor: '#f9f9f3'
    },
  }));

const UserCard = (props)=> {
    const {id,name,email,phone,position,regtime,photo} = props
    const classes = useStyles();

    return (
            <Card className={classes.root}>
                <Avatarka avatarUrl={photo}/>
                <Typography>{name}</Typography>
                <Typography>{position}</Typography>
                <Tooltip title={email}>
                  <Typography>{email}</Typography>
                </Tooltip>
                <Typography>{phone}</Typography>
            </Card>
    )
}
export default UserCard