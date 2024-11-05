/* eslint-disable react/prop-types */

const Header = ({data}) => {
  console.log(data);
  
  return (
    <div className=" text-white flex justify-between items-center px-3">
        <h1 className="text-xl font-medium">Hello, <br /> <span className="text-3xl font-semibold">{data.name} 👋</span></h1>
        <button className="bg-red-700 px-5 py-2 rounded-md">Log out</button>
    </div>
  )
}

export default Header