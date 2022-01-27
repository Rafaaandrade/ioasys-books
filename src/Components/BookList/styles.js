import { makeStyles } from "@material-ui/core";
import background from "./../../assets/backgroundImage2.png";

export const useStyles = makeStyles((theme) => ({

    booksContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    header: {
        fontFamily: 'Heebo',
        color: '##333333',
        fontSize: '28px',
        fontWeight: '300',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: '100px',

        "&p:span": {
            fontWeight: 'bold',
        }
    },
    logout: {
        display: 'flex',
        alignSelf: 'center',
        gap: '12px',
    },
    gridContainer: {
        gap: '16px'
    },
    img: {
        width: '30%',
        height: '100%',
        objectFit: 'contain',
        marginLeft: '1rem',
        marginRight: '1rem',
    },
    card: {
        display: 'inline-flex',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontFamily: 'Heebo',
        fontWeight: 'bold',
        fontSize: '14x',
        lineHeight: '20px'
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