import { Link } from "react-router-dom";

const WelcomePage = () => {

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
                <p>Set goals and achieve them</p>
                <p>The service will help you set goals
and follow them.</p>
                <button>Sign in</button>
                <button>Sign up</button>

                <ul>
                    <li>Set goals</li>
                    <li>Watch your calories</li>
                    <li>Keep track of your water intake</li>
                    <li>Control your weight</li>
                </ul>
            </div>
        </div>
    </div>
  )
};
export default WelcomePage;