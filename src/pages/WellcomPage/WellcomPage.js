import styles from './WellcomPage.module.css';
import welcomeLogo from '../../images/WelcomeLogo.png';

const WelcomePage = () => {
  return (
    <div>
      <div className={styles.backgroundContainer}>
        <img src={welcomeLogo} alt='Reg Logo'/>
        <div className={styles.perksContainer}>
          <p className={styles.welcomeHeadline}>Set goals and achieve them</p>
          <p className={styles.welcomeText}>The service will help you set goals and follow them.</p>
          <button className={styles.signInActivated}>Sign in</button>
          <button className={styles.signUpInactive}>Sign up</button>

          <ul className={styles.welcomePagePerksList}>
            <li>Set goals</li>
            <li>Watch your calories</li>
            <li>Keep track of your water intake</li>
            <li>Control your weight</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
