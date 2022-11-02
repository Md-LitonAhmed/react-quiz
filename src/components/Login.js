import Form from "./Pages/Form"
import LoginIllustration from "./Pages/LoginIllustration";
import classes from '../styles/Signin.module.css';
import TextInput from "./TextInput";
import Button from "./Button";
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <>
     <h1>Login to your account</h1>
     <div className="column">
     <LoginIllustration />
     <Form className={`${classes.login}`}>
     <TextInput type="text" placeholder="Enter email" icon="alternate_email"  />
     <TextInput type="password" placeholder="Enter password" icon="lock" />
     <Button> <span>Submit now </span></Button>
     <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>

     </Form>
     </div>
    </>
  )
}
