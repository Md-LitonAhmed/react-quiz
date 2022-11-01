import classes from '../../styles/Illustration.module.css';
import loginImage from '../../assets/images/login.svg'

export default function Illustration() {
  return (
    <div className={classes.illustration}>
    <img src={loginImage} alt="Signin" />
  </div>
  )
}
