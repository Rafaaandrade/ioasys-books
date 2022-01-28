import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import Quotes from "./../../assets/Quotes.png";

const ModalContent = ({ content, getDetalhesLivro, id }) => {
  const styles = useStyles();
  console.log("ModalContent", content);

  return (
    <div className={styles.paper}>
      <div className={styles.content}>
        <img
          src={content.imageUrl}
          alt={content.title}
          className={styles.img}
        />
        <div>
          <Typography variant="h4" className={styles.title}>
            {content.title}
          </Typography>
          <div className={styles.authors}>
            {content.authors &&
              content.authors.map((a) => (
                <Typography variant="body2" key={a}>
                  {a},
                </Typography>
              ))}
          </div>
          {/* Divisao */}
          <Typography variant="h6">INFORMAÇÕES</Typography>
          <div className={styles.informationBox}>
            <div className={styles.informations}>
              <Typography variant="h6">Páginas</Typography>
              <Typography variant="h6">Editora</Typography>
              <Typography variant="h6">Publicação</Typography>
              <Typography variant="h6">Idioma</Typography>
              <Typography variant="h6">Titulo Original</Typography>
              <Typography variant="h6">ISBN-10</Typography>
              <Typography variant="h6">ISBN-13</Typography>
            </div>
            <div className={styles.informationsValues}>
              <Typography variant="h6">{content.pageCount} páginas</Typography>
              <Typography variant="h6">{content.publisher}</Typography>
              <Typography variant="h6">{content.published}</Typography>
              <Typography variant="h6">{content.language}</Typography>
              <Typography variant="h6">{content.title}</Typography>
              <Typography variant="h6">{content.isbn10}</Typography>
              <Typography variant="h6">{content.isbn13}</Typography>
            </div>
          </div>

          {/* Divisao */}
          <div>
            <Typography variant="body1">RESENHA DA EDITORA</Typography>
            <div style={{ flexWrap: "wrap", display: "flex" }}>
              <div>
                <img src={Quotes} alt="aspas" />
              </div>
              <Typography variant="subtitle2" className={styles.description}>
                {content.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
