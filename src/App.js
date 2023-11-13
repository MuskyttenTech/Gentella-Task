import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MainListItems from './components/listItems';
import Home from './components/Home';
import store from './redux/store';
import { Provider } from 'react-redux';
import Avatar from "@mui/material/Avatar";
import image5 from "./components/Images/image5.jpg";
import '../src/assets/Styles/AppStyle.css'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      backgroundColor: '#2A3F54',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        // overflowX: 'hidden',
        overflow: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
        height: '100%', // Add this line scroll
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open} sx={{ backgroundColor: '#EDEDED', height: '55px' }}>
            <Toolbar className='toolbar-style'>
              <Box className='toobar-container'>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={open ? handleDrawerClose : handleDrawerOpen}
                  sx={{ marginRight: '12px' }}
                >
                  <MenuIcon className='menuIcon'/>
                </IconButton>
              </Box>
              <Box className='mailContainer'>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailOutlineIcon className='mailIcon'/>
                  </Badge>
                </IconButton>
                <Box className='profileContainer'>
                  <Avatar src={image5} alt="John Doe" sx={{ ml: 2, mr: 1 }} />
                  <Typography fontSize='15px'fontWeight='400' fontFamily= "Arial" color= '#5A738E'>John Doe</Typography>
                  <ArrowDropDownIcon className='arrowIcon' />
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
          <Toolbar className="toolbar">
              <Box className="sidebar">
                <PetsOutlinedIcon sx={{ color: "#ECF0F1", margin: "5px" }} />
              </Box>
              <Typography
                sx={{
                  marginLeft: "10px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#ECF0F1",
                  fontFamily: "Arial",
                }}
              >
                Gentelella Alela!
              </Typography>
            </Toolbar>
            <Box
              sx={{
                display: open ? "flex" : "none",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <Avatar
                src={image5}
                alt="John Doe"
                className="sidebarAvatar"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <Box className="sidebarListContainer">
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#BAB8B8",
                    fontSize: "13px",
                    fontFamily: "Arial",
                  }}
                >
                  Welcome,
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ECF0F1",
                    fontSize: "15px",
                    fontFamily: "Arial",
                    fontWeight: "300",
                  }}
                >
                  John Doe
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                paddingLeft: "23px",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "400",
                letterSpacing: ".6px",
                fontFamily: "Arial",
                mt: "20px",
                mb: "10px",
                opacity: open ? 1 : 0,
                display: open ? "block" : "none",
              }}
            >
              GENERAL
            </Typography>
            <Divider />
            <List component="nav">
              {MainListItems({ open })}
              <Divider sx={{ my: 1 }} />
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              // height: '100vh',
              // overflow: 'auto',
              bgcolor: "#F7F7F7",
            }}
          >
            <Toolbar />
            <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
              <Home drawerWidth={drawerWidth} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}
