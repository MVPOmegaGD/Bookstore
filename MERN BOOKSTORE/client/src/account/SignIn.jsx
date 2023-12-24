import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../contacts/AuthProvider";

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const username = form.username.value;
//     const password = form.password.value;

//     const userObj = { username, password };

//     try {
//       const response = await fetch('http://localhost:5000/account/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userObj),
//       });

//       if (response.ok) {
//         alert('Đăng nhập thành công');
//         navigate("/");
//       } else {
//         // Xử lý lỗi đăng nhập
//         console.error('Đăng nhập thất bại');
//       }
//     } catch (error) {
//       console.error('Error during fetch:', error);
//     }
//   };

const SignIn = () => {
  const {login} = useContext(AuthContext);
  const [error, serError] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email,password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Đăng nhập thành công");
      navigate(from, {replace: true});
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      serError(errorMessage)
    });

    // try {
    //   // Gọi hàm login từ context thay vì sử dụng fetch
    //   await login(username, password);

    //   // Đăng nhập thành công, chuyển hướng đến trang chính
    //   navigate("/");
    // } catch (error) {
    //   // Xử lý lỗi đăng nhập
    //   console.error('Đăng nhập thất bại:', error);
    // }
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div
              className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              {/* <!-- Left column container--> */}
              <div className="px-4 md:px-0">
                <div className="md:mx-6 md:p-12">
                  {/* <!--Logo--> */}
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      Đăng nhập tại Sách Điện Tử Việt
                    </h4>
                  </div>

                  <form onSubmit={handleLogin}>
                    <p className="mb-4">Xin hãy nhập thông tin đăng nhập</p>
                    {/* <!--Username input--> */}
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        className="peer block min-h-[auto] w-full"
                        type="email" value={username} id="username" placeholder="Tài khoản" onChange={(e) => setUsername(e.target.value)} name="username" />
                    </div>

                    {/* <!--Password input--> */}
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        className="peer block min-h-[auto] w-full"
                        type="password" value={password} id="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} name="password" />
                    </div>

                    {/* <!--Submit button--> */}
                    <div className="mb-12 pb-1 pt-1 text-center">
                      <button
                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Đăng nhập ngay
                      </button>
                    </div>

                    {/* <!--Register button--> */}
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Bạn vẫn chưa có tài khoản? Đăng ký ngay</p>
                      <button
                        type="button"
                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <Link to="/account/signup">
                          Register
                        </Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
