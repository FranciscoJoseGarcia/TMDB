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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div className="-mt-px">
              <input
                aria-label="First Name"
                type="text"
                required
                placeholder="Name"
                {...firstName}
              />
            </div>

            <div className="-mt-px">
              <input
                aria-label="Last Name"
                type="text"
                required
                placeholder="Last Name"
                {...lastName}
              />
            </div>
            <div>
              <input
                aria-label="Email address"
                type="text"
                required
                placeholder="Email address"
                {...email}
              />
            </div>
            <div className="-mt-px">
              <input
                aria-label="Password"
                type="password"
                required
                placeholder="Password"
                {...password}
              />
            </div>
          </div>

          <div className="mt-6">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
