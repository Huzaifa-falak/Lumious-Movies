import "./Auth.css";

import { useState } from "react";
import { toast } from "react-toastify";


import { supabase } from "../../lib/supabase";

const Auth = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [isLogin, setIsLogin] =
    useState(true);

  // AUTH FUNCTION
  const handleAuth = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // LOGIN
      if (isLogin) {

        const { error } =
          await supabase.auth.signInWithPassword({

            email,
            password,

          });

        if (error) throw error;

       toast.success("Logged in successfully");

      }

      // SIGNUP
      else {

        const { data, error } =
          await supabase.auth.signUp({

            email,
            password,

          });

        if (error) throw error;

        const user = data.user;

        //  USER IN DATABASE
        if (user) {

          const {
            error: profileError,
          } = await supabase
            .from("profiles")
            .insert([

              {
                id: user.id,
                email: user.email,
              },

            ]);

          if (profileError) {

            console.log(
              profileError
            );

          }

        }

        toast.success(
          "Account created successfully."
        );

      }

      setEmail("");
      setPassword("");

    } catch (error) {

      toast.error(error.message);

      

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="auth-page">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-8">

            <div className="auth-card">

              <h1>

                {isLogin
                  ? "Welcome Back"
                  : "Create Account"}

              </h1>

              <p>
                Stream premium movies and TV shows.
              </p>

              <form onSubmit={handleAuth}>

              
                <div className="mb-3">

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />

                </div>

                
                <div className="mb-4">

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />

                </div>

               
                <button
                  type="submit"
                  className="btn auth-submit-btn w-100"
                  disabled={loading}
                >

                  {loading
                    ? "Please Wait..."
                    : isLogin
                    ? "Sign In"
                    : "Create Account"}

                </button>

              </form>

              
              <div className="auth-switch">

                <button
                  onClick={() =>
                    setIsLogin(!isLogin)
                  }
                >

                  {isLogin
                    ? "Create New Account"
                    : "Already Have Account?"}

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Auth;