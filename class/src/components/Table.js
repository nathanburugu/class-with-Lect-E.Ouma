import React, {useState} from 'react'

const Table = (props) => {
    // const names = [];
    // const addies = [];
    // const phone = [];
    // const emails = [];
    // const nate = ()=> {
    //     names.push(document.getElementById('name').value)
    //     addies.push(document.getElementById('address').value)
    //     phone.push(document.getElementById('phone').value)
    //     emails.push(document.getElementById('email').value)
    // }
    // console.log(names,  addies, phone, emails)

    return (
        <div>
            {/* <input id='name' type="text" aria-label=' Name' />
            <input id='address' type="text" aria-label='Address' />
            <input  id='phone' type="text" aria-label='Phone Number' />
            <input id='email' type="email" aria-label='Email' />
            <button onClick={nate}>Submit</button> */}
            {/* console.log(names) */}

              <table>
            <thead>
                <tr>
                    <th id='leftT'colSpan="2">Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id='fName'> nate</td>
                      <td>  Burugu</td>
                    <td>Jenny Chan street</td>
                    <td>073598456</td>
                    <td>Jenny@gmail.com</td>
                </tr>
                  <tr>
                    <td id='fName'>{props.name} </td>
                      <td>  {props.name2}</td>
                    <td>{props.address}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                </tr>
                  <tr>
                    <td id='fName'>nate </td>
                      <td>  Burugu</td>
                    <td>Jenny Chan street</td>
                    <td>073598456</td>
                    <td>Jenny@gmail.com</td>
                </tr>
                  <tr>
                    <td id='fName'>nate </td>
                      <td>  Burugu</td>
                    <td>Jenny Chan street</td>
                    <td>073598456</td>
                    <td>Jenny@gmail.com</td>
                </tr>
            </tbody>
        </table> 
    </div>
  )
}

export default Table