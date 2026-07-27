import { Routes, Route } from "react-router-dom";

import WelcomeLayout from "./layouts/WelcomeLayout";
import HomeLayout from "./layouts/HomeLayout";

import WelcomeHome from "./component/WelcomeHome";

import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyForgotOTP from "./pages/VerifyForgotOTP";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SidebarLayout from "./layouts/SidebarLayout";
import LeaderBoard from "./pages/LeaderBoard";
import Settings from "./pages/Settings";
import HelpSupport from "./pages/HelpSupport";
import QuizDetails from "./pages/QuizDetails";
import QuizPage from "./pages/QuizPage";
import QuizSubmitted from "./pages/QuizSubmitted";
import QuizHistory from "./pages/QuizHistory";
import QuizHistoryDetails from "./pages/QuizHistoryDetails";
import {getDarkMode}from "./utils/settingsStorage";
import ProtectedRoute from "./component/ProtectedRoute";
import PublicRoute from "./component/PublicRoute";
import Notification from "./pages/Notification";



function App() {

  return (

    <Routes>
      <Route element={<WelcomeLayout />}>
        <Route path="/" element={<WelcomeHome />} />
      </Route>


      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/verify-otp" element={<PublicRoute><VerifyOTP /></PublicRoute>} />
      <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
      <Route path="/verify-forgot-otp" element={<PublicRoute><VerifyForgotOTP /></PublicRoute>} />
      <Route path="/reset-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />
      
      <Route
path="/quiz-details"
element={<QuizDetails />}
/>
      <Route
path="/quiz-page"
element={<QuizPage />}
/>
<Route

path="/quizSubmitted"

element={<QuizSubmitted/>}

/>
<Route

path="/quiz-history"

element={<QuizHistory/>}

/>
<Route

path="/quiz-details"

element={

<QuizHistoryDetails/>

}

/>


      <Route element={<HomeLayout />}>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Route>

      <Route element={<SidebarLayout />}>

          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
          <Route path="/leaderboard" element={<ProtectedRoute><LeaderBoard /></ProtectedRoute>}/>
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>}/>
          <Route path="/help-support" element={<ProtectedRoute><HelpSupport /></ProtectedRoute>}/>
          <Route path="/notifications" element={<Notification/>}/>
          
        </Route>
      </Routes>
  );
}

export default App;