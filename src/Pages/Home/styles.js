import { makeStyles } from "@material-ui/core";
import background from "./../../assets/backgroundImage.png";

export const useStyles = makeStyles((theme) => ({
    homeContainer: {
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        [theme.breakpoints.down('xs')]: {
            backgroundRepeat: "no-repeat",
            backgroundSize: "700px 100%",
        }
    },
  
}));

export default useStyles;