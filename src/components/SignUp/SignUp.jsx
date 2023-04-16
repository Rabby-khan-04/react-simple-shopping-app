import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/google_icon.png";

const SignUp = () => {
  return (
    <section>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card max-w-[500px] flex-grow  form__container border border-border_color bg-base-100">
          <div className="p-9">
            <h2 className="text-4xl text-[#2A414F] text-center mb-7">
              Sign Up
            </h2>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mt-2 text-[14px]">
              Already Have An Account{" "}
              <Link className="text-secondary" to="/login">
                Login Now
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

export default SignUp;
