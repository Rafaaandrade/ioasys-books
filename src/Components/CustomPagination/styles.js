import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    pagination: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '10',

        "& span" : {
            fontWeight: 'bold',
        }
    },
    buttons: {
        marginLeft: '1rem'
    }
}));