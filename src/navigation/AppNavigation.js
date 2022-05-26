import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Layout from "../components/Layout";
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import AddCalendar from '../pages/calendar/AddCalendar';
import Profiles from "../pages/Profiles";
import AddProfile from "../pages/profiles/AddProfile";
import Search from "../pages/Search";
import SearchResumes from "../pages/SearchResumes";
import OnboardList from "../pages/OnboardList"
import Upload from "../pages/Upload";


function AppNavigation() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calendar" element={<Calendar />} /> 
            <Route exact path="/addCalendar" element={<AddCalendar />} />
            <Route exact path="/profiles" element={<Profiles />} />
            <Route exact path="/addProfile" element={<AddProfile />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/searchResumes" element={<SearchResumes />} />
            <Route exact path="/onboardList" element={<OnboardList />} />
            <Route exact path="/upload" element={<Upload />} />
          </Routes>
        </Layout>
      </Router>
    )
}

export default AppNavigation
