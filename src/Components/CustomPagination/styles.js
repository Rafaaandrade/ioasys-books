import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    pagination: {
        width: '90%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '10',
        fontFamily: 'Heebo',
        "& span": {
            fontWeight: 'bold',
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center',
        },
    },
    buttonReturn: {
        marginLeft: '1rem',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    buttonNext: {
        marginLeft: '1rem'
    },
    buttonsMobile: {
        marginRight: '1rem',
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        },
    }

}));