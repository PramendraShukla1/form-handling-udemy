import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = {"Access-Control-Allow-Origin":"*"}
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://64b2533738e74e386d54f818.mockapi.io/form',{
      name:name,
      email:email,
header
    })
  };

  return (
    <div className="App">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your name with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
