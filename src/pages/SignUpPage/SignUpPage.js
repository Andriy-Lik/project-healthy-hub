import { Link } from "react-router-dom";

const SignUpPage = () => {

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
                <h3>Sign up</h3>
                <p>You need to register to use the service</p>
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="E-mail"/>
                    <input placeholder="Password"/>
                    <button>Sign in</button>
                </form>

                <p>Do you already have an account?</p>
                <Link>Sign in</Link>
              </div>
          </div>
      </div>
    )
  };
  export default SignUpPage;