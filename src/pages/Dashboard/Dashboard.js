import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListChat from './ListChat';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MatchModal from "../../components/MatchModal"

const drawerWidth = 360;

function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleLogout = () => {
      window.location = "/"
    }

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                </Typography>

                <Avatar src="https://avatars.githubusercontent.com/u/56160839?v=4" className={classes.avatarUser}></Avatar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Logout"
                  onClick={handleLogout}
                >
                  <ExitToAppIcon />
                </IconButton>


                <MatchModal />
              </Toolbar>
            </AppBar>

            <Drawer
              variant="permanent"
              classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}>
                <img src="./logo-symbol.png" alt="logo" height="50"/>

                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>

              <Divider />
              <List className={classes.mainList}>
                <ListChat />
              </List>
            </Drawer>

            <main className={classes.content}>
              <Container maxWidth="lg" className={classes.container}>
                <Paper className={fixedHeightPaper}>
                  <div className={classes.chatFrame}>
                    <div className={classes.headingChatFrame}>
                      <Avatar src="https://avatars.githubusercontent.com/u/44116015?v=4"></Avatar>
                      <p className={classes.nameFriend}>Tài</p>
                    </div>

                    <div className={classes.bodyChatFrame}>
                      <h1>Đoạn chat</h1>
                    </div>
                  </div>
                </Paper>
              </Container>
            </main>
        </div>
    )
}

export default Dashboard

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  avatarUser: {
    marginRight: "8px",
    cursor: "pointer",
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: '100vh',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(10),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    height: '100vh',
  },
  chatFrame: {
    marginTop: '64px',
  },
  paper: {
    // padding: theme.spacing(2),
    display: 'flex',
    // overflow: 'auto',
    height: '100vh',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: '100vh',
  },
  mainList: {
    overflow: 'auto',
    overflowX: 'hidden',
  },
  headingChatFrame: {
    padding: "16px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    boxShadow: "rgb(0 0 0 / 8%) 0px 1px 12px",
    clear: "both",
  },
  nameFriend: {
    fontSize: "20px",
    marginLeft: "16px",
  },
  bodyChatFrame: {
    height: '100%',
  },
}));