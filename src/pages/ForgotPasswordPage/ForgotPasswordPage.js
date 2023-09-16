import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {

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
                <h3>Forgot your password</h3>
                <p>We will send you an email with recovery instructions</p>
                <form>
                    <input placeholder="E-mail"/>
                    <button>Send</button>
                </form>

                <p>Do you already have an account?</p>
                <Link>Sign in</Link>
              </div>
          </div>
      </div>
    )
  };
  export default ForgotPasswordPage;