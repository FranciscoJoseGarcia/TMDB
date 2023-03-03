import axios from "axios";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const firstName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/register", {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      .then(() => navigate("/login"))
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div>
      <h2 className="mt-5 mb-5 text-center">Create your account</h2>

      <form className="mt-8 text-center" onSubmit={handleSubmit}>
        <div className="mt-2">
          <input
            aria-label="First Name"
            type="text"
            required
            placeholder="First Name"
            {...firstName}
            style={{ borderRadius: "5px" }}
          />
        </div>

        <div className="mt-2">
          <input
            aria-label="Last Name"
            type="text"
            required
            placeholder="Last Name"
            {...lastName}
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="mt-2">
          <input
            aria-label="Email address"
            type="text"
            required
            placeholder="Email address"
            {...email}
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="mt-2">
          <input
            aria-label="Password"
            type="password"
            required
            placeholder="Password"
            {...password}
            style={{ borderRadius: "5px" }}
          />
        </div>

        <div className="mt-6">
          <button
            className="mt-2 btn btn-outline-dark bg-primary"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
