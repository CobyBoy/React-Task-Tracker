import React from 'react'
import { Button, Typography, Container } from '@material-ui/core';
import useStyles from './styles';

const Header = ({ title, showForm, addOrCloseText }) => {
    const classes = useStyles();

    return (
        <Container className={classes.header} component="div">
            <Typography variant="h4" align="center">{title}</Typography>
            <Button color={addOrCloseText ? "secondary" : "primary"} variant="contained" onClick={ showForm }>{ addOrCloseText ? 'Close' : 'Add' }</Button>
        </Container>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
