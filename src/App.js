import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './navigation/AppNavigation';
import AuthNavigation from './navigation/AuthNavigation';
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import {verifyUser} from "../src/redux/auth/userSlice";
import 'react-datepicker/dist/react-datepicker.css';

function App() {

  let dispatch = useDispatch()

  let user = useSelector(state => state.auth)

  useEffect(() => {
    let email = localStorage.getItem('email')
    dispatch(verifyUser({email:email}))
  }, [])


  if(user.loggedIn == false) {
    return <AuthNavigation />
  }

  return (
    <AppNavigation />
  );
}

export default App;
