import React from "react";
import LoginForm from "../../Components/LoginForm";
import useStyles from "./styles";

const Home = () => {
  const styles = useStyles();
  return (
    <div className={styles.homeContainer}>
      <LoginForm />
    </div>
  );
};

export default Home;
