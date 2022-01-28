import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    paper: {
        width: '55%',
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
     

    },
    img: {
        width: '50%'
    },
    title: {
        fontFamily: 'Heebo',
        fontWeight: 'bold',
        fontSize: '2rem',
        lineHeight: '40px',
        
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
        fontSize: '1rem',
        fontFamily: 'Heebo',
        fontWeight: 'bold',
      }
    },
    informationsValues: {
        width: '60%',
        textAlign: 'right',
        "& > *": {
            fontSize: '.99rem',
            fontFamily: 'Heebo',
            whiteSpace: 'nowrap',
          }
    },
    description: {
        color: '#999999',
        
    }

}));

export default useStyles;