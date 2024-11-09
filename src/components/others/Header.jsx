/* eslint-disable react/prop-types */

// import { useState } from "react"

const Header = (props) => {
  // const [username, setUsername] = useState('')

  // if(!username){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.name)
  // }

  
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  
  return (
    <div className=" text-white flex justify-between items-center px-3">
        <h1 className="text-xl font-medium">Hello, <br /> <span className="text-3xl font-semibold">username 👋</span></h1>
        <button onClick={logOutUser} className="bg-red-700 px-5 py-2 rounded-md">Log out</button>
    </div>
  )
}

export default Header

