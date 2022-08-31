import { useLoginMutation } from "@src/services/argentBank";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [login] = useLoginMutation();
  const [hasError, setHasError] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<Inputs>({ mode: "onTouched" });
  const onSubmit = async (data: Inputs) => {
    try {
      const user = await login(data);
      console.log(user);
    } catch (err) {
      setHasError(true);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("email", { required: true })}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
