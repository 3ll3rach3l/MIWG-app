import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import history from '../store/history'

import useModal from "../components/useModal";
import EditFormModal from "../components/EditFormModal"

import { fetchMissing } from '../store/actions/missing';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card, CardHeader, CardMedia, CardContent, CardActions,
Collapse, Avatar, IconButton, Typography, Grid} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
    },
    background:{
        default: 'black'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        image: '/red-hand.svg',
        backgroundColor: red[500],
    },
    pos: {
        marginBotton: 12
    },
     gridContainer: {
      paddingTop: '10px',
      paddingLeft: '40px',
      paddingRight: '40px'
  },
  cardHeader:{
      color: 'red'
  }
}));

export default function MissingCard() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const { isShowing, toggle } = useModal();   
    const [card, setCard] = React.useState([]);
    const [expandedId, setExpandedId] = React.useState(-1);
    const currentUserId = useSelector(state=> state.auth.id)
    const missing = useSelector(state => state.missingReducer.missing)
    console.log('missing', missing)

   
    useEffect(() => {
        async function getMissing() {
            const missingObj = await dispatch(fetchMissing())
            // console.log('this is inside the missingObj', missingObj.missings)
            await setCard(missingObj.missings)
        }
        getMissing()
    }, [dispatch]);
    

    const handleExpandClick = (i) => {
        // setExpanded(!expanded);
        setExpandedId(expandedId === i ? -1 : i)
    };

    const viewOneMissing = () => {
         toggle()
        // dispatch(fetchOneMissing())
    }

    if(!missing) return 'loading cards...'

    return (
        <Grid container spacing={4} className={classes.gridContainer} justify='center'>
            {missing.map((person, i) => (
            <Grid item xs={12} sm={6} md={4}>

                <Card key={person.id} className={classes.root}> 
                    <CardHeader className={classes.cardHeader}
                        // avatar={
                            
                        // <Avatar className={classes.avatar}>
                        //     M
                        // </Avatar>}
                         action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon onClick={() => viewOneMissing(i)} />
                        </IconButton>
                        }
                        title={person.fullName}
                        subheader={person.status}
                    />
                    <CardMedia
                    className={classes.media}
                    image="/MMIW-BLOG.png"
                    title="Recent Photo"
                    />
                     <CardActions disableSpacing>
                    <Typography paragraph >More Info:</Typography>
                    <IconButton
                        // className={clsx(classes.expand, {
                        //     [classes.expandOpen]: expanded,
                        //     })}
                        onClick={() => handleExpandClick(i)}
                        aria-expanded={expandedId === i}
                        aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                    </CardActions>
                     <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                     <CardContent>
                         <Typography variant={'h6'}>Age: </Typography>
                         <Typography paragraph>{person.age} </Typography>
                         <Typography variant={'h6'}>Tribal Afilliiation: </Typography>
                        <Typography paragraph>{person.tribalAffiliation} </Typography>
                        <Typography variant={'h6'}>Date Last Seen: </Typography>
                         <Typography paragraph>{person.dateLastSeen}</Typography>
                        <Typography variant={'h6'}>City Last Seen: </Typography>
                        <Typography paragraph>{person.location}</Typography>
                         <Typography variant={'h6'}> Details:</Typography>
                         <Typography paragraph>{person.details}</Typography>
                     </CardContent>
                      </Collapse>
                        
                </Card>
          </Grid>
          ))}
         <EditFormModal isShowing={isShowing} hide={toggle} />
        </Grid>
   
    ) 

}