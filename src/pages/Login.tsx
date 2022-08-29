import { argentBankApi, useLoginMutation } from "@src/services/argentBank";
import { FormEvent } from "react";

const Login = () => {
  const [login] = useLoginMutation();

  const test = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await login({
        email: "tony@stark.com",
        password: "password123",
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => test(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <a href="/user" className="sign-in-button">
            Sign In
          </a>
          <button className="sign-in-button">Sign In Test</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
