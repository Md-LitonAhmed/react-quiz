import '../styles/App.css';
import Layout from './Layout';
// import Home from './Pages/Home';
// import Signup from './Pages/Signup';
import Signin from '../components/Login'

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      <Signin />
    </Layout>
  );
}

export default App;
