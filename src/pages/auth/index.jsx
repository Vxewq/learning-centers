import "./style.scss";
import { useState } from "react";
import { api } from "../../utils/axios";

export default function Auth() {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phoneNumber, setPhone] = useState("");
  let [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sigin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", name);
    formData.append("lastName", surname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    formData.append("role", "USER");
    if (file) {
      formData.append("profilePicture", file);
    }

    try {
      const res = await api.post("/api/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message);
    } catch (error) {
      alert("Registration failed!");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/login", { email, password });
      alert(res.data.message);
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="container-signin">
      <div className="side">
        <form onSubmit={sigin}>
          <input type="file" onChange={handleFileChange} />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="First Name"
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone Number"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="side login">
        <form onSubmit={login}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
