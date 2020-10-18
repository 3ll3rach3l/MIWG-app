import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMissing } from '../store/actions/missing';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card, CardHeader, CardMedia, CardContent, CardActions,
Collapse, Avatar, IconButton, Typography} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
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
    }
}));

export default function MissingCard() {
    const dispatch = useDispatch()
    const classes = useStyles();

    const [card, setCard] = React.useState([]);
    const [expanded, setExpanded] = React.useState(false);

    const currentUserId = useSelector(state=> state.auth.id)
    



    const missing = useSelector(state => state.missingReducer.missing)
    console.log('missing', missing)

   
    useEffect(() => {
        async function getMissing() {
            const missingObj = await dispatch(fetchMissing())
            console.log('this is inside the missingObj', missingObj)
            await setCard(missingObj)
        }
        getMissing()
    }, [dispatch]);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if(!missing) return 'loading cards...'

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    M
                </Avatar>}
                            
                title="Full Name"
                subheader="Date Last Seen"
            />
            <CardMedia
                className={classes.media}
                // image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardActions disableSpacing>
                <Typography paragraph>More Info:</Typography>

                <IconButton
                    className={clsx(classes.expand, {                 [classes.expandOpen]: expanded,
                        })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Age: </Typography>
                    <Typography paragraph>Tribal Afilliiation: </Typography>
                    <Typography paragraph>Date Last Seen:</Typography>
                    <Typography paragraph> Details:</Typography>
                    <Typography paragraph>{missing.details}</Typography>
                </CardContent>
        </Collapse>
        </Card>
    ) 

}