import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

    

export default function Input(props) {
    const classes = useStyles();
    const { name, label, value, error = null, onChange } = props;
    return (
        <TextField
            rows={4}
            multiline
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />
    );
}
