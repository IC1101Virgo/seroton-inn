import React,{useState} from 'react';
import {
    makeStyles,
    AppBar,
    Grid,
    Typography,
    Avatar,
    Input,
    InputAdornment,
    IconButton,
    InputLabel,
    Button,
    Badge,
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { 
    Done, 
    Edit, 
    PowerSettingsNew,
    Camera
} from '@material-ui/icons';

import BottomNav from './BottomNav';
import img4 from '../assests/image/image4.png';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        fontFamily: "'Saira', sans-serif"
    },
    title: {
        paddingLeft: "10px",
        flexGrow: 1,
        fontSize: "20px",
        color: "#C4C4C4",
        textAlign: "center"
    },
    nav: {
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0, 0.25)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
        height: "10vh"
    },
    navIcon: {
        textAlign: "center",
        '& .MuiSvgIcon-root': {
            fontSize: '20px',
            color: "red"
        },
    },
    allContainer: {
        zIndex: "1",
        padding: "3px 10px 10px 10px",
        height: "92vh"
    },
    formContainer: {
        boxShadow: "0px 0px 50px -18px rgba(0, 0, 0, 0.25)",
        marginTop: "80px"   
    },
    imageGridContainer: {
        flex: "1.5",
        padding: "20px",
    },
    largeAvatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    userNameInputField: {
        fontSize: "14px",
        padding: "4px",
        fontFamily: "Rubik"
    },
    usernameField: {
        fontSize: "16px",
        marginTop: "20px",
        padding: "0px 20px 0px 20px"
    },
    secondGrid: {
        flex: "0.8"
    },
    nameLabel: {
        fontSize: "12px",
        padding: "5px 20px 5px 20px"
    },
    nameInputField: {
        fontSize: "16px",
        margin: "0px 20px 0px 20px",
    },
    nameField: {
        fontSize: "16px",
        padding: "0px 20px 0px 20px"
    },
    thirdGrid: {
        flex: "1"
    },
    formButton1: {
        fontFamily: "Rubik",
        fontWeight: "600",
        '&.MuiButton-outlined': {
            fontSize: "10px",
            padding: "5px 30px",
            border: "1px solid #C2C7F0",
            boxShadow: "0px 0px 4px rgba(110, 143, 193, 0.55)",
            borderRadius: "5px"
        }
    },
    formButton2: {
        fontFamily: "Rubik",
        fontWeight: "600",
        '&.MuiButton-outlined': {
            fontSize: "10px",
            padding: "5px 30px",
            backgroundColor: "#C5C3FF",
            border: "1px solid #C2C7F0",
            boxShadow: "0px 0px 4px rgba(110, 143, 193, 0.55)",
            borderRadius: "5px"
        }
    },
    bottom: {
        height: "10vh",
        position: 'static'
    }
}));
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 35,
        top: 150,
        background: "#C5C3FF",
        padding: '22px 12px',
        borderRadius: "100px"
    },
}))(Badge);

export default function EditProfile(){
    const classes = useStyles();

    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);

    return(
        <div className={classes.root}>
            <div>
                <AppBar className={classes.nav} position="fixed">
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="h6" className={classes.title}>
                                LOGO
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.navIcon}>
                            <PowerSettingsNew />
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
            <div>
                <form>
                    <Grid container className={classes.allContainer}>
                        <Grid item sm={1} md={2} />
                        <Grid item container xs={12} sm={10} md={8} direction="column" className={classes.formContainer} justify="space-between">
                            <Grid item container justify="space-between" alignItems="center" direction="column" className={classes.imageGridContainer}>
                                <Grid item>
                                    <StyledBadge badgeContent={
                                        <>
                                        <label for="imageInput" className={classes.imageInputLabel}>
                                                <Camera 
                                                    style = {{
                                                        "cursor": "pointer",
                                                        fontSize: "20px"
                                                    }} 
                                                />
                                        </label>
                                        <input type="file" id="imageInput" style={{"display": "none"}}/>
                                        </>
                                    }>
                                        <Avatar alt="Remy Sharp" src={img4} className={classes.largeAvatar} />
                                    </StyledBadge>
                                </Grid>
                                <Grid item>
                                    {
                                        isEditingUsername ? (
                                            <>
                                                <Input 
                                                    className={classes.userNameInputField}
                                                    defaultValue="Hello world" 
                                                    inputProps={{ 'aria-label': 'description' }} 
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={() => setIsEditingUsername(!isEditingUsername)}>
                                                                <Done 
                                                                    style={{
                                                                        fontSize: "15px",
                                                                        color: "green"
                                                                    }}
                                                                />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </>
                                        ) : (
                                                <>
                                                    <div className={classes.usernameField}>
                                                        <span>Username 
                                                            <IconButton onClick={() => setIsEditingUsername(!isEditingUsername)}>
                                                                <Edit 
                                                                    style={{
                                                                        fontSize: "22px",
                                                                        background: "#C5C3FF",
                                                                        padding: "5px",
                                                                        borderRadius: "3px"
                                                                    }}
                                                                />
                                                            </IconButton>
                                                        </span>
                                                    </div>
                                                </>
                                            )
                                    }
                                </Grid>
                            </Grid>
                            <Grid item container justify="center" alignContent="center" className={classes.secondGrid}>
                                <Grid item xs={12} sm={10} container justify="space-between" direction="column">
                                    <Grid item>
                                        <InputLabel className={classes.nameLabel}> Full Name </InputLabel>
                                    </Grid>
                                    {
                                        isEditingName ? (
                                            <>
                                                <Grid item>
                                                    <Input
                                                        className={classes.nameInputField}
                                                        defaultValue="Guddu Pandit"
                                                        inputProps={{ 'aria-label': 'description' }}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton onClick={() => setIsEditingName(!isEditingName)}>
                                                                    <Done 
                                                                        style={{
                                                                            fontSize: "15px",
                                                                            color: "green"
                                                                        }}
                                                                    />
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                    />
                                                </Grid>
                                            </>
                                        ) : (
                                            <>
                                                <Grid item className={classes.nameField}>
                                                    <span>GudduPandit
                                                        <IconButton onClick={() => setIsEditingName(!isEditingName)}>
                                                            <Edit 
                                                                style={{
                                                                    fontSize: "22px",
                                                                    background: "#C5C3FF",
                                                                    padding: "5px",
                                                                    borderRadius: "3px"
                                                                }}
                                                            />
                                                        </IconButton>
                                                    </span>
                                                </Grid>
                                            </>
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <Grid item container spacing="3" alignItems="center" justify="center" className={classes.thirdGrid}>
                                <Grid item>
                                    <Button variant="outlined" className={classes.formButton1}>Cancel</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" className={classes.formButton2}>Save</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={1} md={2} />
                    </Grid>
                </form>
            </div>
            <div>
                <BottomNav className={classes.bottom}/>
            </div>
        </div>
    )


}
