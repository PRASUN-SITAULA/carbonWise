import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState("");

//   const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

    apiClient
      .post("/auth/login/", {
        username: username,
        password: password,
      })
      .then(({ data }) => {
        setToken(data.token.access);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      })
      .finally(() => {
        setUsername("");
        setPassword("");
        setRememberme("");
      });
  };

  return (
<div className="flex justify-center items-center">
  <div className="bg-transparent w-[35rem] sm:w-[30rem] rounded-xl shadow-lg p-6">
    <form className="mx-auto space-y-4" onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-600">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="mt-2 p-3 w-full border rounded-md focus:ring-black-500 focus:border-blue-500 text-lg bg-transparent placeholder-gray-500"
          placeholder="Enter your username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-lg font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-2 p-3 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 text-lg bg-transparent placeholder-gray-500"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          id="remember"
          type="checkbox"
          className="w-5 h-5 border border-gray-300 rounded bg-gray-100 focus:ring-2 focus:ring-blue-300"
          onChange={(e) => {
            setRememberme(e.target.value);
          }}
        />
        <label
          htmlFor="remember"
          className="ml-2 text-base font-medium text-gray-600"
        >
          Remember me
        </label>
      </div>
      <div></div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded-md py-3"
      >
        Submit
      </button>
    </form>
  </div>
</div>


  );
};

export default LoginForm;
