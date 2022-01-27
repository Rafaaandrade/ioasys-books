import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyContext } from "../APIContext";
import useStyles from "./styles";
import { Controller, useForm } from "react-hook-form";

const LoginForm = () => {
  const { user, isSigned, apiData, Login } = useMyContext();
  const navigate = useNavigate();
  const styles = useStyles();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //Se for verificado que existe uma authenticação do usuario (Token) redireciona para a próxima página
  useEffect(() => {
    if (isSigned) {
      navigate("/books");
    }
  }, [user, isSigned]);

  const onSubmit = (data) => {
    const { email, password } = data;
    Login(email, password);
  };

  return (
    <div>
      <div className={styles.loginForm}>
        <div className={styles.header}>ioasys Books</div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
          <div className={styles.firstInput}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField {...field} type="email" label="Email" fullWidth />
              )}
            />
          </div>

          <div className={styles.groupButton}>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField {...field} type="password" label="Senha" fullWidth />
              )}
            />
            <Button
              className={styles.btn}
              label="Entrar"
              type="submit"
            >
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
