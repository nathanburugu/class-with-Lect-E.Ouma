// import Hello from './components/Hello'
// import Proops from './components/Proops'
import './App.css';
// import Welcome from './components/Welcome';
// import Subscribe from './components/Subscribe'
// import Use from './components/Use'
import Table from './components/Table'
import React, { useRef } from 'react'
import Blogs from './components/Blogs';

function App() {
  // const inputRef = useRef(null);
  // var names = [];
  // const handleClick = () => {
  //   names.push(inputRef.current.value)

  //   console.log(inputRef.current.value)
  //   console.log(names)
  // }
  return (
    <div className='meza'>
      {/* <input ref={inputRef} type="text" id='message' name='message' />
      <button onClick={handleClick} >logMessage</button> */}

    {/* < Proops name='Nate' chain='Gold' number='8'/>
    <Proops name='Kamau' chain='Silver'  number='12'/>
    <Welcome name='Kamau'/>
    <Hello   />
    <Subscribe className='nate'/>
    <Use/> */}
    {/* <Table name='Nathan' name2='Burugu' address='22 Street Kimathi Street' phone='0722978025' email='nate@gmail.com'/> */}
   <Blogs/>
    </div>
  );
}

export default App;
