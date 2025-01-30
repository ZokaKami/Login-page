import Flowers from "./images/flowers.jpg";
import GoogleIcon from "./images/googleIcon.svg";
import FacebookIcon from "./images/facebookIcon.svg";

export default function Login() {
  return (
    <div className="h-[100vh] p-6 md:p-4 text-xs font-normal relative md:grid md:grid-cols-2">
      <div className="relative w-full h-[25vh] md:h-full order-2">
        <img
          src={Flowers}
          className="absolute inset-0 w-full h-full object-cover  rounded-3xl"
          alt="Dutch flowers"
        />
      </div>
      <div className="order-1 md:w-[300px] xl:w-[360px] md:mx-auto md:grid md:items-center md:py-16 xl:py-24">
        <div>
          <h1 className="text-2xl font-bold py-3">Welcome Back</h1>
          <div className="leading-6">
            <p>Today is a new day.It's your day.You shape it.</p>
            <p>Sign in to start managing your projects.</p>
          </div>
        </div>
        <div className="space-y-2 py-3 md:py-0">
          <div>
            <p className="py-[4px]">Email</p>
            <input
              className="p-2 border-[2px] border-[#e7eaf2] w-full rounded-lg bg-[#f3f6fb] text-[#445266]"
              type="text"
              placeholder="Example@email.com"
            />
          </div>
          <div>
            <p className="py-[4px]">Password</p>
            <input
              className="p-2 border-[2px] border-[#e7eaf2] w-full rounded-lg bg-[#f3f6fb] text-[#445266]"
              type="text"
              placeholder="At least 8 characters"
            />
          </div>
          <a className="float-right text-[#5274ed] font-bold " href="">
            Forgot password?
          </a>
        </div>
        <div className="pt-4">
          <button className="p-2 rounded-xl w-full bg-[#162d3a] text-white  ">
            Sign in
          </button>
        </div>
        <div className="flex items-center py-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="px-4  text-center">Or sign in with</p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex md:block space-x-2 md:space-y-2 text-[16px]">
          <button className="flex justify-center items-center w-full p-2 rounded-xl bg-[#f3f9fa]">
            <img src={GoogleIcon} className="h-6 px-2" alt="" />
            Google
          </button>
          <button className="flex justify-center  items-center w-full p-2 rounded-xl bg-[#f3f9fa]">
            <img src={FacebookIcon} className="h-6 px-2" alt="" />
            Facebook
          </button>
        </div>

        <p className="text-center py-6">
          Do you have an account?{" "}
          <a href="" className="text-[#5274ed] font-bold">
            Sign up.
          </a>
        </p>
        <p className="w-full absolute bottom-4 text-center left-1/2 md:left-1/4 transform -translate-x-1/2 text-[#adb2c6]">
          @ 2023 ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}
