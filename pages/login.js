import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  async function checkhtmlForm() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/dashboard")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // toast.error(errorMessage, {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
      });
  }
  return (
    <>
    <Navbar/>
      <section className="text-gray-400 bg-transparent body-font relative h-screen">
        <div className="container px-5 py-24 mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex  text-white  border-0 py-1/2 px-3 focus:outline-none  rounded text-lg"
          >
            <Image src="/back_button_black.svg" alt="" width="50" height="60" />
          </button>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl md:text-4xl lg:text-6xl text-4xl font-medium title-font mb-4 text-white">
              User Login
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkhtmlForm();
            }}
            method="post"
            autoComplete="off"
          >
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                  <div className="relative sm:mb-0 flex-grow w-full">
                    <label
                      htmlFor="full-name"
                      className="leading-7 text-xl text-white"
                    >
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      value={email}
                      type="email"
                      id="full-name"
                      name="full-name"
                      minLength="4"
                      maxLength="50"
                      className="w-full bg-zinc-900 bg-opacity-40 rounded border border-zinc-900 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900 focus:bg-zinc-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative sm:mb-0 flex-grow w-full">
                    <label
                      htmlFor="full-name"
                      className="leading-7 text-xl text-white"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      value={password}
                      type="password"
                      id="full-name"
                      name="full-name"
                      minLength="4"
                      maxLength="50"
                      className="w-full bg-zinc-900 bg-opacity-40 rounded border border-zinc-900 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900 focus:bg-zinc-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* </section> */}
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-zinc-900 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Login;
