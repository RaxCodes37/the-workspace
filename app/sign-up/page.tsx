import { signUpAction } from "../api/auth";
import AuthNavbar from "../components/auth/auth-navbar";

export default function SignUpPage() {
  return (
    <div>
      <AuthNavbar />
      <div className="flex justify-center mt-30">
        <form
          action={signUpAction}
          className="border border-[#3d3d3d] bg-[#1e1c1c] flex flex-col items-center gap-3 w-85 sm:w-100 text-center rounded-md py-5"
        >
          <h1 className="text-2xl font-bold">Sign up</h1>

          <input
            type="text"
            name="name"
            required
            className="border border-[#3d3d3d] bg-[#272525] py-1 px-2 rounded-md outline-0 w-[80%] mt-1"
            placeholder="Username"
          />
          <input
            type="text"
            name="email"
            required
            className="border border-[#3d3d3d] bg-[#272525] py-1 px-2 rounded-md outline-0 w-[80%]"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            required
            className="border border-[#3d3d3d] bg-[#272525] py-1 px-2 rounded-md outline-0 w-[80%]"
            placeholder="Password"
          />

          <button
            type="submit"
            className="border border-[#3d3d3d] bg-[#272525] duration-400 hover:bg-[#2f2d2d] w-40 py-2 mt-1 rounded-md font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
