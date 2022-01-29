import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../APIContext";
import useStyles from "./styles";

const LoginForm = () => {
  const { user, isSigned, error, Login } = useMyContext();
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
        <div className={styles.header}>
          <span>ioasys</span> Books
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
          <div className={styles.firstInput}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  label="Email"
                  inputProps={{ className: styles.textfieldInput }}
                  InputLabelProps={{
                    className: styles.textfieldLabel,
                  }}
                  fullWidth
                />
              )}
            />
          </div>
          <div className={styles.groupButton}>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Senha"
                  inputProps={{ className: styles.textfieldInput }}
                  InputLabelProps={{
                    className: styles.textfieldLabel,
                  }}
                  fullWidth
                />
              )}
            />
            <Button className={styles.btn} type="submit">
              Entrar
            </Button>
          </div>
        </form>
        {error && (
          <div className={styles.error}>Email e/ou senha incorretos.</div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
