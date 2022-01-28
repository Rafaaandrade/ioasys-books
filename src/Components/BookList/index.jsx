import { ButtonBase, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../APIContext";
import CustomPagination from "../CustomPagination";
import ModalUI from "../ModalUI";
import ButtonImage from "./../../assets/LogOut.png";
import useStyles from "./styles";

const BookList = () => {
  const { user, Logout, apiData, getListaDeLivros, getDetalhesLivro} = useMyContext();
  const [page, setPage] = useState(1);
  const styles = useStyles();
  const navigate = useNavigate();
  console.log("apiDAta", apiData);

  useEffect(() => {
    getListaDeLivros(page);
  }, [page]);

  const handleLogout = () => {
    Logout();
    navigate("/");
  };
  return (
    <div className={styles.booksContainer}>
      <div className={styles.header}>
        <p>
          <span>ioasys</span> Books
        </p>
        <div className={styles.logout}>
          {user.data.name && (
            <Typography variant="body1">Bem vindo, {user.data.name}</Typography>
          )}
          <ButtonBase onClick={handleLogout}>
            <img src={ButtonImage} alt="Logout" />
          </ButtonBase>
        </div>
      </div>
      <Grid container spacing={0} className={styles.gridContainer}>
        {apiData.listedBooks.data &&
          apiData.listedBooks.data.map((book) => (
            <Grid
              item
              xs={12}
              sm={5}
              md={3}
              lg={3}
              key={book.id}
              className={styles.card}
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className={styles.img}
                />

               <ModalUI key={book.id} id={book.id}>
                <Typography variant="body2" className={styles.title}>
                  {book.title}
                </Typography>
                {book.authors.map((author) => (
                  <Typography
                    variant="body1"
                    key={author}
                    className={styles.author}
                  >
                    {author}
                  </Typography>
                ))}
                <div className={styles.bookInfo}>
                  <Typography variant="body2" className={styles.subtitle}>
                    {book.pageCount} páginas
                  </Typography>
                  <Typography variant="body2" className={styles.subtitle}>
                    Editora {book.publisher}
                  </Typography>
                  <Typography variant="body2" className={styles.subtitle}>
                    Publicado em {book.published}
                  </Typography>
                </div>
              </ModalUI>
             
            </Grid>
          ))}
      </Grid>      
      <CustomPagination page={page} setPage={setPage} />
    </div>
  );
};

export default BookList;
