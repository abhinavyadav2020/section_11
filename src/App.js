import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// import AuthContext from "./components/Store/auth-context";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // To check the state of isLoggedIn true and prevent infinite loop
//   useEffect(() => {
//     const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    
//     if (storeUserLoggedInInformation === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
//         <MainHeader />
//         <main>
//           {!isLoggedIn && <Login onLogin={loginHandler} />}
//           {isLoggedIn && <Home onLogout={logoutHandler} />}
//         </main>
//       </AuthContext.Provider>
//     </React.Fragment>
//   );
// }

// export default App;
