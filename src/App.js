import React from "react"; 
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed"; 
import Widgets from "./Widgets"; 
import Login from "./Login";

function App() {
  const user = null; 
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (  
        <React.Fragment>
          <Header/>

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />  
            </div>
          </React.Fragment>
      )}
   </div>
  );
}

export default App;
  