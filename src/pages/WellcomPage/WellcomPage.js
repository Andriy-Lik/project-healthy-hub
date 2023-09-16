import styles from './WellcomPage.module.css';
import welcomeLogo from '../../images/WelcomeLogo.png';

const WelcomePage = () => {
  return (
    <div>
      <div className={styles.backgroundContainer}>
        <img src={welcomeLogo} className={styles.welcomeLogo} alt='Reg Logo'/>
        <div className={styles.perksContainer}>
          <h1 className={styles.welcomeHeadline}>Set goals and achieve them</h1>
          <p className={styles.welcomeText}>The service will help you set goals and follow them.</p>
          <button className={styles.signInActivated}>Sign in</button>
          <button className={styles.signUpInactive}>Sign up</button>

          <ul className={styles.welcomePagePerksList}>
            <li className={styles.perks}>Set goals</li>
            <li className={styles.perks}>Watch your calories</li>
            <li className={styles.perks}>Keep track of your water intake</li>
            <li className={styles.perks}>Control your weight</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
