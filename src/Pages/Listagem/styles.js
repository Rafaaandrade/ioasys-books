import { makeStyles } from "@material-ui/core";
import background from './../../assets/backgroundImage2.png'

export const useStyles = makeStyles(() => ({
  homeContainer: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bookContent: {
    width: '90%',
    margin:'0 auto'
  }
}));

export default useStyles;