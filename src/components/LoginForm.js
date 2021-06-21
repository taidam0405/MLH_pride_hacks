import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function LoginForm() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline />

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5" style={{ fontWeight: 600 }}>
                    Log In
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="on"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="off"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        style={{ fontWeight: 700 }}
                    >
                        Log In
                    </Button>

                    <hr></hr>
                </form>
            </div>
        </Container>
    )
}

export default LoginForm

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 32px',
    },
    avatar: {
        margin: '8px',
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: '8px',
    },
    submit: {
        margin: '16px 0',
        padding: '12px 16px',
        // backgroundColor: theme.palette.primary.main,
        // transition: "0.4s ease",
        // "&:hover": {
        //     backgroundColor: theme.palette.primary.main,
        //     opacity: "0.8",
        // },
    },
}));
