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
            top: '16rem',
            marginLeft: '1rem'
        }
    },
    header: {
        fontFamily: 'Heebo',
        lineHeight: '40px',
        color: 'white',
        fontSize: '28px',
        marginBottom: '2rem',

        [theme.breakpoints.down('xs')]: {
            marginLeft: '1rem'
        },
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
    },
    groupButton: {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'rgba(0, 0, 0, 0.32)',
    },
    btn: {
        backgroundColor: '#FFFFFF',
        borderRadius: '44px',
        height: '90%',
        alignSelf: 'center',
        marginRight: '1.1rem'
    }
}));

export default useStyles;