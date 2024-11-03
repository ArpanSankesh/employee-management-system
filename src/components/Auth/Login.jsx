import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ handelLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handelLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border border-blue-400 px-20 pt-10 pb-20 rounded-xl">
        <h1 className=" text-white text-3xl font-black mb-16">Log In</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex justify-center items-center flex-col "
        >
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="mb-5 px-10 py-3 rounded-xl text-xl outline-none bg-transparent border-blue-400 border text-white"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="mb-5 px-10 py-3 rounded-xl text-xl outline-none bg-transparent border-blue-400 border text-white"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-blue-400 w-full  py-3 text-lg rounded-lg mb-10 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
