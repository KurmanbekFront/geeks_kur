import React from "react";
import axios from "axios";
import classes from "./RegisterPage.module.scss";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const regex = /^\d+$/;
const regExEmail = /^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/;

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3, "min 3"),
  email: Yup.string().required("Email is required").matches(regExEmail, "Enter a valid email"),
  password: Yup.string().required("Password is required").matches(regex, "Enter a valid password"),
  re_password: Yup.string().oneOf([Yup.ref("password"),null,"Passwords must match",]),
});
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  // const name = watch('name');
  // const email = watch('email');
  // const password = watch('password');
  // const re_password = watch('re_password');

  const submit = (data) => {
    postAxios(data)
    console.log(data);
  };
  const error = (data) => {
    console.log(data);
  };

  const postAxios = async (data) => {
    const response = await axios.post(`http://localhost:5000/user`, data);
    
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <h1>Register with</h1>
        <form onSubmit={handleSubmit(submit, error)} className={classes.form}>
          <div className={classes.input_form}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              aria-invalid={errors.name ? true : false}
              {...register("name")}
            />
          
          </div>

          <div className={classes.input_form}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your email"
              aria-invalid={errors.email ? true : false}
              {...register("email")}
            />
          
          </div>

          <div className={classes.input_form}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Your password"
              aria-invalid={errors.password ? true : false}
              {...register("password")}
            />
           
          </div>

          <div className={classes.input_form}>
            <label htmlFor="re-enter password">Re-enter password</label>
            <input
              type="text"
              id="re-enter password"
              placeholder="Your password"
              aria-invalid={errors.re_password ? true : false}
              {...register("re_password")}
            />

          </div>
          <div className={classes.btn}>
            <button>CONTINUE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
