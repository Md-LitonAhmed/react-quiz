import '../styles/App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from '../components/Login';
import Quiz from './Pages/Quiz';
import Result from './Result';
import {BrowserRouter as Router, Routes,Route} from  'react-router-dom';
import {AuthProvider} from '../context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
    <Layout>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/signin" element={ <Signin />} />
        <Route path="/quiz" element={ <Quiz />} />
        <Route path="/result" element={<Result />} /> 
      </Routes>

    </Layout>
    </AuthProvider>
    </Router>
  );
}

export default App;
