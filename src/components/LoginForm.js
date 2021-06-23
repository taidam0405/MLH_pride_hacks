import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Divider from '@material-ui/core/Divider';

function LoginForm() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ 
        username: false, 
        password: false 
    });
    const [errorMessage, setErrorMessage] = useState({ 
        username: '', 
        password: '' 
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleUsername = (e) => {
        let value = e.target.value
        setUsername(value)
        if (value === '') {
            setError({ ...error, username: true })
            setErrorMessage({ ...errorMessage, username: "Please enter your username." })
        }
        else if (!(/^\S*$/).test(value)) {
            setError({ ...error, username: true })
            setErrorMessage({ ...errorMessage, username: "Please enter valid username." })
        }
        else {
            setError({ ...error, username: false })
            setErrorMessage({ ...errorMessage, username: '' })
        }
    }

    const handlePassword = (e) => {
        let value = e.target.value
        setPassword(value)
        if (value === '') {
            setError({ ...error, password: true })
            setErrorMessage({ ...errorMessage, password: "Please enter your password." })
        }
        else if (value.length < 6) {
            setError({ ...error, password: true })
            setErrorMessage({ ...errorMessage, password: "Please add at least 6 characters." })
        }
        else {
            setError({ ...error, password: false })
            setErrorMessage({ ...errorMessage, password: '' })
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location = "/dashboard"
        console.log( 'Name:', username); 
        console.log( 'Password:', password); 
    }

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

                <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="Username"
                        type="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsername}
                        error={error.username}
                        helperText={errorMessage.username}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        error={error.password}
                        helperText={errorMessage.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                          }}
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

                    <Divider />
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
    },
}));
