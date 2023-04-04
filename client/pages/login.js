const Login = () => {
  return (
    <div class="bg-grey-lighter h-screen text-base text-grey-darkest font-normal relative">
      <div class="container mx-auto p-8">
        <div class="mx-auto max-w-sm">
          <div class="py-10 text-center text-xl text-primary uppercase">
            Starting With REPLIQ
          </div>

          <div class="bg-white rounded shadow ">
            <div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
              Welcome back!
            </div>

            <form class="bg-grey-lightest px-10 py-10 ">
              <div class="mb-3">
                <input
                  class="border w-full p-3"
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                />
              </div>
              <div class="mb-6">
                <input
                  class="border w-full p-3"
                  name="password"
                  type="password"
                  placeholder="**************"
                />
              </div>
              <div class="flex">
                <button class="bg-primary hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
                  Login
                </button>
              </div>
            </form>

            <div class="border-t px-10 py-6">
              <div class="flex justify-between">
                <a
                  href="#"
                  class="font-bold text-primary hover:text-primary-dark no-underline"
                >
                  Don't have an account?
                </a>
                <a
                  href="#"
                  class="text-grey-darkest hover:text-black no-underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
