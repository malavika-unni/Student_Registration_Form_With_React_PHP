import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import StudentView from './components/ViewData';
import StudentRegForm from './components/StudentRegForm';



const App = () => {
  // State to hold the submitted user data
  const [userData, setUserData] = useState(null);
  return (
    <div>
      {/*Conditional rendering: Render StudentRegForm component if userData is null, else render StudentView component */}
      {!userData ? <StudentRegForm setUserData={setUserData} /> : <StudentView userData={userData} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
