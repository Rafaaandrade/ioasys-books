import React from "react";
import BookList from "../../Components/BookList";
import useStyles from "./styles";

const Listagem = () => {
  const styles = useStyles();
  return (
    <div className={styles.homeContainer}>
      <div className={styles.bookContent}>
        <BookList />
      </div>
    </div>
  );
};

export default Listagem;
