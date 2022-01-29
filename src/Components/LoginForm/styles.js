import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    loginForm: {
        width: '25%',
        padding: '7rem',
        top: '8rem',
        position: 'absolute',

        [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding: '0',
            top: '13rem',
            marginLeft: '1rem'
        },

    },
    header: {
        fontFamily: 'Heebo',
        lineHeight: '40px',
        color: '#FFFFFF',
        fontSize: '28px',
        marginBottom: '2rem',

        "& span": {
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginRight: '0.5rem'
        },

        [theme.breakpoints.down('xs')]: {
            marginLeft: '1rem'
        },
    },
    textfieldInput: {
        color: 'white'
    },
    textfieldLabel: {
        color: '#FFFFFF',
    },
    formContent: {
        display: 'flex',
        flexDirection: 'column',

        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
            marginRight: '1rem'
        }

    },
    firstInput: {
        marginBottom: '1rem',
        background: 'rgba(0, 0, 0, 0.32)',
        borderRadius: '5px'
    },
    groupButton: {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'rgba(0, 0, 0, 0.32)',
        borderRadius: '5px'
    },
    btn: {
        backgroundColor: '#FFFFFF',
        borderRadius: '44px',
        alignSelf: 'center',
        marginRight: '1.1rem',
        fontFamily: 'Heebo',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 'bold',
        color: '#B22E6F',
        textTransform: 'capitalize' 
    },
    error: {
        background: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '5px',
        fontSize: '1rem',
        lineHeight: '1rem',
        fontFamily: 'Heebo',
        fontWeight: 'bold',
        padding: '0.9rem',
        marginTop: '1rem',
        color: 'white'
    }
}));


export default useStyles;