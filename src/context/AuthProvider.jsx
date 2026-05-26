import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  supabase,
} from "../lib/supabase";

const AuthContext =
  createContext();

const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    // CURRENT SESSION
    supabase.auth
      .getSession()
      .then(({ data }) => {

        setUser(
          data.session?.user ?? null
        );

        setLoading(false);

      });

    // AUTH CHANGES
    const {
      data: listener,
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(
          session?.user ?? null
        );

      }
    );

    return () => {

      listener.subscription.unsubscribe();

    };

  }, []);

  // LOGOUT
  const logout = async () => {

    await supabase.auth.signOut();

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};

export default AuthProvider;
export { AuthContext }



           
    