import React from "react";
import BookList from "../BookList";
import LoginForm from "../LoginForm";
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
