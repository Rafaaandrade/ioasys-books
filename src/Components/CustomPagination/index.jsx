import { ButtonBase } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import Next from "./../../assets/Next.png";
import Prev from "./../../assets/Prev.png";
import { useMyContext } from "../APIContext";

const CustomPagination = ({ page, setPage }) => {
  const styles = useStyles();
  const { pagination } = useMyContext();

  const returnPage = () => {
    if (page !== 1) {
      setPage(page - 1);
      window.scroll(0, 0);
    }
  };

  const nextPage = () => {
    if (page < pagination.totalPages) {
      setPage(page + 1);
      window.scroll(0, 0);
    }
  };

  return (
    <div className={styles.pagination}>
      <ButtonBase onClick={returnPage}>
        <img src={Prev} alt="Voltar página" />
      </ButtonBase>
      {pagination.page && (
        <p>
          Página {page} de {pagination.totalPages}
        </p>
      )}
      <ButtonBase onClick={nextPage}>
        <img src={Next} alt="Avançar página" />
      </ButtonBase>
    </div>
  );
};

export default CustomPagination;
