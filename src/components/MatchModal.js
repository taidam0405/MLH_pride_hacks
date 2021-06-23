import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import clsx from 'clsx';

function MatchModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [isShowMore, setIsShowMore] = React.useState(false);

    const handleClickShowMore = () => {
        setIsShowMore(!isShowMore)
    }

    const handleClickOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div>
             <Button variant="outlined" className={classes.button} onClick={handleClickOpenModal}>
                Find Now
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <div className={classes.paper}>
                    <h1 style={{textAlign: "center"}}>MATCHING...</h1>
                    <div>
                        <div className={classes.infoUser}>
                            <img src="https://avatars.githubusercontent.com/u/56160839?v=4" alt="avatar" className={classes.imgUser}/>
                            <p className={classes.nameUser}>Khoa</p>
                            <p className={clsx(classes.descUser, isShowMore && classes.descUser1)}>ABCDEFGHIKLMNOPWABCDEFGHIKLMNOPWABCDEFGHIKLMNOPWABCDEFGHIKLMNOPWABCDEFGHIKLMNOPWABCDEFGHIKLMNOPW</p>
                            {!isShowMore ? 
                                <ExpandMoreIcon className={classes.btnShow} onClick={handleClickShowMore} /> 
                                : 
                                <ExpandLessIcon className={classes.btnShow} onClick={handleClickShowMore} />
                            }
                        </div>

                        <div className={classes.progressTime}>
                            <div className={classes.timeProgress}></div>
                            <div className={classes.timeProgress1}></div>
                        </div>

                        <div className={classes.blockYesNo}>
                            <div className={classes.btnYes} onClick={handleCloseModal}>
                                <CheckIcon/>
                            </div>
                            <div className={classes.btnNo} onClick={handleCloseModal}>
                                <CloseIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MatchModal

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#fff",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        boxShadow: theme.shadows[5],
        padding: '32px',
    },
    infoUser: {
        backgroundColor: "#000", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "400px", 
        height: "400px", 
        borderRadius: "8px",
    },
    imgUser: {
        height: "200px",
        width: "200px",
        borderRadius: "50%", 
        border: "4px solid #fd2c63",
    },
    nameUser: {
        fontSize: '20px',
        color: "#fff", 
        marginTop: "10px",
        maxWidth: "80%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    descUser: {
        fontSize: '12px',
        color: "#fff",
        textAlign: 'justify',
        marginTop: "10px",
        maxWidth: "80%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        wordBreak: "break-all",
        lineClamp: 2,
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    descUser1: {
        fontSize: '12px',
        color: "#fff",
        textAlign: 'justify',
        marginTop: "10px",
        maxWidth: "80%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        wordBreak: "break-all",
        lineClamp: 2,
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "horizontal",
    },
    btnShow: {
        color: "#fff",
        cursor: "pointer",
        borderRadius: "50%",
        '&:hover': {
            backgroundColor: "rgba(255,255,255,0.2)"
        },
    },
    progressTime: {
        width: '100%',
        position: 'relative',
    },
    timeProgress: {
        margin: "20px 0",
        backgroundColor: '#ccc',
        height: "5px",
        width: "100%",
    },
    timeProgress1: {
        backgroundColor: "green",
        height: "5px",
        width: "60%",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        transition: '0.4s ease',
    },
    blockYesNo: {
        display: 'flex', 
        justifyContent: "space-between", 
        alignItems: "center"
    },
    btnYes: {
        width: "100%", 
        height: "50px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "green", 
        borderRadius: "8px", 
        fontSize: "20px", 
        color: "#fff",
        marginRight: "10px",
        cursor: "pointer",
        transition: '0.4s ease',
        '&:hover': {
            opacity: '0.8',
        }
    },
    btnNo: {
        width: "100%", 
        height: "50px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "red", 
        borderRadius: "8px", 
        fontSize: "20px", 
        color: "#fff", 
        marginLeft: "10px",
        cursor: "pointer",
        transition: '0.4s ease',
        '&:hover': {
            opacity: '0.8',
        }
    },
}));