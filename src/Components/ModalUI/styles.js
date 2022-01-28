import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    modalContainer: {
        "&:hover": {
            cursor: "pointer",
        },
    }

}));

export default useStyles;