import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    paper: {
        width: '57%',
        height: '80vh',
        backgroundColor: '#FFFFFF',
        margin: '0 auto',
        padding: '2rem',
        marginTop: '2rem',
        overflowY: "scroll",
        scrollbarsWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    content: {
        display: "flex",
        gap: '2rem',

        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
        }
    },
    img: {
        width: '50%',

        [theme.breakpoints.down("sm")]: {
            width: '100%'
        }

    },
    title: {
        fontFamily: 'Heebo',
        fontWeight: 'bold',
        fontSize: '2rem',
        lineHeight: '40px',

    },
    infoTitle: {
        fontSize: '14px',
        fontFamily: 'Heebo',
        fontWeight: 'bold',
        marginTop: '1rem'
    },
    authors: {
        display: 'inline-flex',
        fontSize: '.8rem',
        fontFamily: 'Heebo',
        color: '#AB2680',
        flexWrap: 'wrap'
    },

    informationBox: {
        display: 'flex',
        width: '100%',
    },
    informations: {
        width: '40%',
        textAlign: 'left',
        "& > *": {
            lineHeight: '30px',
            fontSize: '1rem',
            fontFamily: 'Heebo',
            fontWeight: 'bold',
        }
    },
    informationsValues: {
        width: '60%',
        textAlign: 'right',
        "& > *": {
            lineHeight: '30px',
            fontSize: '.99rem',
            fontFamily: 'Heebo',
            whiteSpace: 'nowrap',
        }
    },
    resenha: {
        fontSize: '14px',
        fontFamily: 'Heebo',
        fontWeight: 'bold',
    },
    description: {
        color: '#999999',
    }

}));

export default useStyles;