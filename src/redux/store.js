import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./auth/userSlice";
import resumesReducer from "../redux/searchResumes/resumesSlice";
import onboardListReducer from "../redux/onboardList/onboardListSlice";

export default configureStore({
	reducer: {
		auth: userReducer,
		resumes:resumesReducer,
		onboardList:onboardListReducer
	},
});