import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function RegisterModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState({
        fullName: false, 
        username: false, 
        password: false,
        description: false,
    });
    const [errorMessage, setErrorMessage] = useState({ 
        fullName: '', 
        username: '', 
        password: '',
        description: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleClickOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const onFileChange = (e) => {
        setSelectedFile(URL.createObjectURL(e.target.files[0]))
    }

    const handleFullName = (e) => {
        let value = e.target.value
        setFullName(value)
        if (value === '') {
            setError({ ...error, fullName: true })
            setErrorMessage({ ...errorMessage, fullName: "Please enter your full name." })
        }
        else {
            setError({ ...error, fullName: false })
            setErrorMessage({ ...errorMessage, fullName: '' })
        }
    }

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

    const handleDescription = (e) => {
        let value = e.target.value
        setDescription(value)
        if (value === '') {
            setError({ ...error, description: true })
            setErrorMessage({ ...errorMessage, description: "Please enter your description." })
        }
        else if (value.length > 300) {
            setError({ ...error, description: true })
            setErrorMessage({ ...errorMessage, description: "Limit your description to 300 words." })
        }
        else {
            setError({ ...error, description: false })
            setErrorMessage({ ...errorMessage, description: '' })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log( 'Name:', username); 
        console.log( 'Password:', password); 
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpenModal}>
                Create New Account
            </Button>

            <Box mt={8}>
                <Copyright />
            </Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <div className={classes.paper}>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="FullName"
                                    name="fullName"
                                    autoComplete="off"
                                    placeholder="FullName"
                                    autoFocus
                                    value={fullName}
                                    onChange={handleFullName}
                                    error={error.fullName}
                                    helperText={errorMessage.fullName}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="on"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleUsername}
                                    error={error.username}
                                    helperText={errorMessage.username}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    autoComplete="off"
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
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="on"
                                    placeholder="Description"
                                    multiline
                                    value={description}
                                    onChange={handleDescription}
                                    error={error.description}
                                    helperText={errorMessage.description}
                                />
                            </Grid>
                     
                            <Grid item xs={12} className={classes.gridUploadImage}>
                                <Typography variant="body1" color="textSecondary">
                                    Profile Picutre
                                </Typography>

                                <img src={selectedFile} alt="" className={classes.image}/>

                                <div className={classes.uploadImage}>
                 
                                    <input 
                                        accept="image/*"
                                        className={classes.inputFile}
                                        id="icon-button-file" 
                                        type="file" 
                                        onChange={onFileChange}
                                    />

                                    <label htmlFor="icon-button-file" className={classes.labelUpload}>
                                        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconBtn}>
                                            <PhotoCamera className={classes.iconCamera} />
                                        </IconButton>
                                    </label>
                                </div>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleCloseModal}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default RegisterModal

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                RainbowsApp
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        boxShadow: theme.shadows[5],
        padding: '32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '90%',
        marginTop: '24px',
    },
    submit: {
        margin: '16px 0',
        padding: '12px 16px',
    },
    gridUploadImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '150px',
        height: '150px',
        backgroundColor: '#ccc',
        borderRadius: '50%',
        border: '5px solid #000',
    },
    uploadImage: {
        width: '150px',
        height: '150px',
        position: 'absolute',
        margin: '5px',
        bottom: 0,
    },
    inputFile: {
        display: 'none',
    },
    labelUpload: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBtn: {
        width: '100%',
        height: '100%',
        "&:hover $iconCamera": {
            display: 'block',
        }
    },
    iconCamera: {
        display: 'none',
    }
}));