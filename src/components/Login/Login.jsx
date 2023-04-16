import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/google_icon.png";

const Login = () => {
  return (
    <section>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card max-w-[500px] flex-grow  form__container border border-border_color bg-base-100">
          <div className="p-9">
            <h2 className="text-4xl text-[#2A414F] text-center mb-7">Login</h2>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="text-base">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-2 text-[14px]">
              New to Ema-john?{" "}
              <Link className="text-secondary" to="/sign-up">
                Create New Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full border-gray-300 capitalize">
              <img className="h-8 inline-block mr-2" src={googleIcon} alt="" />
              <span className="inline-block"> Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
