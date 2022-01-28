import { Backdrop, Fade, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useMyContext } from "../APIContext";
import ModalContent from "../ModalContent";
import useStyles from "./styles";

const ModalUI = ({ children, id }) => {
  const [open, setOpen] = useState(false);
  const { getDetalhesLivro, apiData } = useMyContext();
  const styles = useStyles();

  console.log("MODAL UI API DATA", apiData);
  const handleOpen = () => {
    setOpen(true);
    getDetalhesLivro(id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={styles.modalContainer}
        type="button"
        value={id}
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContent
          content={apiData.bookDetails}
          />
        </Fade>
      </Modal>
    </>
  );
};

export default ModalUI;
