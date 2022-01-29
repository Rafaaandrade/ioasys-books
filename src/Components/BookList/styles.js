import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    booksContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        margin: '0 auto'
    },
    header: {
        fontFamily: 'Heebo',
        color: '#333333',
        fontSize: '28px',
        fontWeight: '300',
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        minHeight: '100px',

        "& span": {
            fontWeight: 'bold',
            fontSize: '36px',
            color: '#333333',
            marginRight: '.8rem'
        }
    },
    logout: {
        display: 'flex',
        alignSelf: 'center',
        gap: '12px',

    },
    userInfo: {
        fontFamily: 'Heebo',
        fontSize: '1rem',
        "& span": {
            fontWeight: 'bold',
            fontSize: '1rem',
        },

        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },
    gridContainer: {
        gap: '1rem  ',
        margin: '0 auto',
        width: '100%'
    },
    img: {
        width: '25%',
        objectFit: 'contain',
        marginLeft: '1rem',
        marginRight: '1rem',

    },
    card: {
        display: 'inline-flex',
        backgroundColor: '#FFFFFF',
        [theme.breakpoints.up("md")]: {
            flexBasis: '22%'
        },
        [theme.breakpoints.down("md")]: {
            flexBasis: '100%'
        }
    },
    title: {
        fontFamily: 'Heebo',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '20px',
        marginTop: '10px'
    },

    author: {
        fontFamily: 'Heebo',
        color: '#AB2680',
        display: 'flex',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#999999',
        fontFamily: 'Heebo',
        fontSize: '12px',
        alignItems: 'flex-end'
    }

}));

export default useStyles;