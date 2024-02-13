import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import StudentView from './components/ViewData';
import StudentRegForm from './components/StudentRegForm';



const App = () => {
  const [userData, setUserData] = useState(null);
  return (
    <div>
      {!userData ? <StudentRegForm setUserData={setUserData} /> : <StudentView userData={userData} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
