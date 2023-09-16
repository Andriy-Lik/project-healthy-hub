import { Link } from "react-router-dom";

const SignInPage = () => {

    return (
      <div>
          <header>
              <h2>HealthyHub</h2>
              <Link>Sign in</Link>
              /
              <Link>Sign up</Link>
              {/* <img /> */}
          </header>
  
          <div>
              {/* <img /> */}
              <div>
                <h3>Sign ip</h3>
                <p>You need to login to use the service</p>
                <form>
                    <input placeholder="E-mail"/>
                    <input placeholder="Password"/>
                    <button>Sign in</button>
                </form>
                <Link>Forgot your password?</Link>

                <p>Do you already have an account?</p>
                <Link>Sign up</Link>
              </div>
          </div>
      </div>
    )
  };
  export default SignInPage;