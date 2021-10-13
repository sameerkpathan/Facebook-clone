import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightsidebar from './Rightsidebar';
import Login from './Login';
import { useStateValue } from './StateProvider';

const App = () => {
  const [{user},dispatch] = useStateValue();
  console.log(user);
  return (
    <>
    {
      !user ? (<Login/>) : (<div className="App">
      {/*Header*/}

      <Header />

      <div className="app__body">
        {/*Sidebar*/}

        <Sidebar />

        <Feed/>
        
       
        
        <Rightsidebar/>
        
      </div>

      {/*App Body*/}





    </div>)
    }
    
    </>
  );
};

export default App;