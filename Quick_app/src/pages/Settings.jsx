import React, { useState } from 'react'
import { Settings as SettingsIcon,Shield,Lock,Languages,ChevronRight,
        Bell, Moon,Trash2,AlertTriangle, Eye,EyeOff} from "lucide-react";
import {saveLanguage,getLanguage,saveDarkMode,getDarkMode,saveNotificationStatus,
getNotificationStatus}from "../utils/SettingsStorage";
import {applyDarkMode} from "../utils/darkMode";
import API from "../api/axios";
import { useLanguage } from "../context/LanguageContext";
import { translations } from '../translation/translation';
import {useNavigate} from "react-router-dom";

const Settings = () => {
    const [notification, setNotification] = useState(getNotificationStatus());
    const [darkMode, setDarkMode] = useState(getDarkMode());
    const [showLanguageModal, setShowLanguageModal] = useState(false);   
    const [showDeactivateModal, setShowDeactivateModal] = useState(false); 
    const [accountDeactivated, setAccountDeactivated] = useState(false); 
    const [loading,setLoading]=useState(false);
    const[showPasswordModal,setShowPasswordModal]=useState(false)
    const [showCurrentPassword,setShowCurrentPassword]=useState(false);
    const [showNewPassword,setShowNewPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const[capsLock,setCapsLock]=useState(false);
    const[passwordStrength,setPasswordStrength]=useState("");
    const [passwordChanged,setPasswordChanged]=useState(false);
    const [currentPassword,setCurrentPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const { language, setLanguage } = useLanguage();
    // const data = useLanguage();
    const t = translations[language];
    // console.log(language);
    // console.log(t);
    const navigate = useNavigate();
    const handleLanguage=(value)=>{
        setLanguage(value);
        // saveLanguage(value);
    };
    const handleNotification=()=>{
        setNotification(!notification);
        saveNotificationStatus(!notification);
    };
    const handleDarkMode=()=>{

        const value = !darkMode;    
        setDarkMode(value);
        saveDarkMode(value);
        applyDarkMode();
        window.location.reload();
    };
    const handleChangePassword = async()=>{

        try{
        if(
            !currentPassword ||
            !newPassword ||
            !confirmPassword
        ){
            return alert("All Fields Required");
        }

        if(newPassword.length<6){
            return alert("Password must be minimum 6 characters.");
        }

        if(
            newPassword!==confirmPassword

        ){

            return alert("Passwords do not match.");

        }
        setLoading(true);

        const user = JSON.parse(
            localStorage.getItem("user")

        );

        const response = await API.put(
            "/auth/change-password",
            {
                userId:user.id,
                oldPassword:currentPassword,
                newPassword:newPassword
            }
        );

        if(response.data.success){
            setShowPasswordModal(false);
            setPasswordChanged(true);
        }

        }catch(error){
            alert(error.response?.data?.message ||
                "Something Went Wrong"
            );
        }

        finally{setLoading(false);}
    };
    const checkPasswordStrength=(password)=>{

        if(password.length<6){
            setPasswordStrength("WEAK");
        }

        else if(
            password.length>=6 &&
            password.length<=8
        ){
            setPasswordStrength("MEDIUM");
        }

        else{
            setPasswordStrength("STRONG");
        }
    };
    const handleCapsLock=(e)=>{
        setCapsLock(
            e.getModifierState("CapsLock")
        );
    };
    const handleDeactivateAccount = async () => {

        try{

            const user = JSON.parse(localStorage.getItem("user"));

            const response = await API.put("/auth/deactivate-account",
                {
                    userId:user.id
                }

            );


            if(response.data.success){

                setShowDeactivateModal(false);
                setAccountDeactivated(true);

            }


        }catch(error){

            alert(
            error.response?.data?.message ||"Something Went Wrong");

        }

    };
   
  return (
    <>
        <div className="flex-1 pt-24 lg:pt-8 px-4 sm:px-6 lg:px-8 pb-12">

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-10">

                    <div
                        className=" mx-auto mb-5 w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-700
                        via-violet-600 to-pink-500 flex items-center justify-center shadow-xl">

                        <SettingsIcon
                            size={42}
                            className="text-white"
                        />

                    </div>


                    <h1
                        className=" text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r
                        from-purple-700 via-violet-600 to-pink-500 bg-clip-text text-transparent theme-text">

                        {t.settings}
                    </h1>


                    <p
                        className="mt-4 text-gray-50 text-base sm:text-lg theme-text-light"
                    >

                        Manage your preferences and customize
                        your Quizonary account.

                    </p>

                </div>

                <div
                    className=" relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#6D28D9]
                    via-[#9333EA] to-[#EC4899] p-[2px] shadow-[0_20px_60px_rgba(147,51,234,.35)]">

                    <div className=" relative rounded-[33px] bg-white overflow-hidden theme-card">

                        <div className="absolute inset-0">

                            <div
                                className="absolute -top-24 -left-24 w-72 h-72
                                rounded-full bg-purple-300/30 blur-[120px]"
                            />

                            <div
                                className="absolute -bottom-24 -right-24 w-80
                                h-80 rounded-full bg-pink-300/30 blur-[140px]"
                            />

                        </div>

                        <div className="relative p-8 sm:p-10">

                            <div className="flex items-center gap-4">

                                <div
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700
                                    via-violet-600 to-pink-500 flex items-center justify-center"
                                >

                                    <Shield
                                        size={32}
                                        className="text-white"
                                    />

                                </div>


                                <div>

                                    <h2 className="text-3xl font-black text-gray-800 theme-text">
                                        {t.accountSettings}
                                    </h2>


                                    <p className="text-gray-500 theme-text-light">
                                        Personalize your account
                                        preferences.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="mt-10 space-y-5">

                    <button
                        onClick={()=>setShowPasswordModal(true)}
                        className="w-full rounded-3xl border border-purple-100
                        bg-white/70 backdrop-blur-sm p-6 flex items-center
                        justify-between hover:shadow-xl hover:-translate-y-1 duration-300 theme-card"
                    >

                        <div className="flex items-center gap-5">


                            <div
                                className=" w-16 h-16 rounded-2xl bg-purple-100
                                flex items-center justify-center"
                            >

                                <Lock
                                    size={28}
                                    className="text-purple-700"
                                />

                            </div>


                            <div className="text-left">

                                <h2 className="text-xl font-bold text-gray-800 theme-text">
                                    {t.changePassword}
                                </h2>


                                <p className="text-gray-500 theme-text-light">

                                    Update your account password.

                                </p>

                            </div>

                        </div>


                        <ChevronRight
                            size={28}
                            className="text-purple-700"
                        />

                    </button>

                    <button
                        onClick={()=>setShowLanguageModal(true)}
                        className=" w-full rounded-3xl border border-purple-100
                        bg-white/70 backdrop-blur-sm p-6 flex items-center
                        justify-between hover:shadow-xl hover:-translate-y-1 duration-300 theme-card"
                    >

                        <div className="flex items-center gap-5">


                            <div
                                className=" w-16 h-16 rounded-2xl bg-purple-100
                                flex items-center justify-center"
                            >

                                <Languages
                                    size={28}
                                    className="text-pink-600"
                                />

                            </div>


                            <div className="text-left">

                                <h2 className="text-xl font-bold text-gray-800 theme-text">
                                    {t.language}
                                </h2>


                                <p className="text-gray-500 theme-text-light">
                                    Select your preferred language.
                                </p>

                                <p className="text-gray-500 theme-text-light">
                                    Current : {language}
                                </p>
                                
                            </div>

                        </div>


                        <ChevronRight
                            size={28}
                            className="text-pink-600"
                        />

                    </button>


                </div>

                <div className="mt-12">
                    

                    <h2 className="text-3xl font-black text-gray-800 theme-text">
                        {t.preferences}
                    </h2>


                    <p className="mt-2 text-gray-500 theme-text-light">
                        Manage your personal preferences.
                    </p>


                    <div className="mt-6 space-y-5">

                        <div
                            className=" rounded-3xl border border-purple-100
                            p-6 flex items-center justify-between"
                        >

                            <div className="flex items-center gap-5">

                            <div
                                    className=" w-16 h-16 rounded-2xl bg-yellow-100
                                    flex items-center justify-center">

                                    <Bell
                                        size={28}
                                        className="text-yellow-600"
                                    />

                                </div>


                                <div>

                                    <h2 className="text-xl font-bold text-gray-800 theme-text">
                                        {t.notifications}
                                    </h2>


                                    <p className="text-gray-500 theme-text-light">
                                        Turn notifications ON or OFF.
                                    </p>

                                </div>

                            </div>


                            <button
                                onClick={handleNotification}
                                className={` w-16 h-9 rounded-full duration-300 flex items-center px-1 
                                    ${notification
                                    ? "bg-green-500"
                                    : "bg-gray-300"}
                                `}
                            >

                                <div
                                    className={` w-7 h-7 rounded-full bg-white duration-300 theme-card

                                        ${notification
                                        ? "translate-x-7"
                                        : "translate-x-0"}
                                    `}
                                />

                            </button>


                        </div>

                        <div
                            className="rounded-3xl border border-purple-100 p-6 flex items-center justify-between">

                            <div className="flex items-center gap-5">

                            <div
                                    className=" w-16 h-16 rounded-2xl bg-purple-100
                                    flex items-center justify-center">

                                    <Moon
                                        size={28}
                                        className="text-purple-700"
                                    />

                                </div>


                                <div>

                                <h2 className="text-xl font-bold text-gray-800 theme-text">
                                        {t.darkMode}
                                    </h2>


                                    <p className="text-gray-500 theme-text-light">
                                        Enable dark theme.
                                    </p>

                                </div>

                            </div>


                            <button
                                onClick={ handleDarkMode}
                                className={` w-16 h-9 rounded-full duration-300 flex items-center px-1
                                    ${darkMode
                                    ? "bg-purple-600"
                                    : "bg-gray-300"}
                                `}
                            >

                                <div
                                    className={` w-7 h-7 rounded-full bg-white duration-300 theme-card

                                        ${darkMode
                                        ? "translate-x-7"
                                        : "translate-x-0"}
                                    `}
                                />

                            </button>

                        </div>


                    </div>

                </div>

                <div className="mt-14">

                    <h2 className="text-3xl font-black text-red-600 ">
                        {t.dangerZone}
                    </h2>


                    <p className="mt-2 text-gray-500 theme-text">
                        Be careful. This action cannot be undone.
                    </p>


                    <div
                        className="mt-6 rounded-[35px] border-2
                        border-red-200 bg-red-50 p-8 theme-card">


                        <div
                            className=" flex flex-col lg:flex-row
                            items-center justify-between gap-8 ">

                            <div className="flex gap-5 items-start">


                                <div
                                    // className=" w-16 h-16 rounded-full bg-red-100
                                    // flex items-center justify-center"
                                    >

                                    <AlertTriangle
                                        size={32}
                                        className="text-red-600"
                                    />

                                </div>


                                <div>

                                    <h2 className="text-xl font-black text-red-600">
                                        {t.deactivateAccount}
                                    </h2>


                                <p className="mt-3 text-gray-600 theme-text">
                                        Permanently Deactivate your
                                        Quizonary account along
                                        with your points, profile,
                                        achievements and rewards.

                                    </p>


                                    <div className="mt-5 space-y-2">

                                        <p className=''>• Your Profile</p>

                                        <p>• Leaderboard Rankings</p>

                                        <p>• Total Points</p>

                                        <p>• Achievements & Rewards</p>

                                    </div>

                                </div>

                            </div>

                            <button
                                onClick={()=>setShowDeactivateModal(true)}
                                className=" px-10 py-4 rounded-2xl bg-gradient-to-r
                                from-red-500 to-red-700 text-white font-bold
                                shadow-xl hover:scale-105 duration-300"
                            >

                                <span className=" flex items-center gap-3">

                                    <Trash2 size={22} />

                                    {t.deactivateAccount}

                                </span>

                            </button>


                        </div>

                    </div>

                </div>
            </div>
            {
            showLanguageModal &&(

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center
                    bg-black/50 backdrop-blur-sm px-4 ">


                    <div className="w-full max-w-md rounded-[35px] bg-white p-8 shadow-2xl theme-card">


                        <h2 className="text-3xl font-black text-center text-purple-700 theme-text">
                            {t.language}
                        </h2>


                        <p className="mt-2 text-center text-gray-500 theme-text-light">
                            Select your preferred language.
                        </p>

                        <div className="mt-8 space-y-4 ">

                            <button
                                onClick={()=>{
                                    handleLanguage("English");
                                    setShowLanguageModal(false);
                                }}
                                className=" w-full py-4 rounded-2xl bg-purple-50 hover:bg-purple-100 font-bold theme-lang ">

                                {t.english}
                            </button>



                            <button
                                onClick={()=>{
                                    handleLanguage("Hindi");
                                    setShowLanguageModal(false);
                                }}
                                className=" w-full py-4 rounded-2xl bg-purple-50 hover:bg-purple-100 font-bold theme-lang">

                                {t.hindi}

                            </button>

                            <button
                                onClick={()=>{
                                    handleLanguage("Gujarati");
                                    setShowLanguageModal(false);
                                }}
                                className=" w-full py-4 rounded-2xl bg-purple-50 hover:bg-purple-100 font-bold theme-lang">

                                {t.gujarati}

                            </button>


                        </div>

                        <button
                            onClick={()=>setShowLanguageModal(false)}
                            className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r
                            from-purple-700 via-violet-600 to-pink-500 text-white font-bold"
                        >
                            {t.cancel}

                        </button>
                    </div>

                </div>

            )}

            {showDeactivateModal && (

                <div
                    className=" fixed inset-0 z-50 flex  items-center 
                    justify-center bg-black/60 backdrop-blur-sm px-4">

                    <div className=" w-full max-w-md rounded-[35px] bg-white shadow-2xl overflow-hidden">

                        <div className=" bg-gradient-to-r from-red-500 to-red-700 p-7 text-white">

                            <h2 className="text-3xl font-black">
                                {t.deactivateAccount}
                            </h2>

                            <p className="mt-2 text-white/90">
                                Your account willbe deactivated temporarily.
                            </p>

                        </div>

                        <div className="p-8 text-center">

                            <AlertTriangle
                                size={60}
                                className="mx-auto text-red-600"
                            />
                            <h2 className="mt-5 text-2xl font-black text-gray-800">
                            Are You Sure?
                            </h2>

                            <p className=" mt-3 text-gray-500">
                                Do you really want to Deactivate your
                                Quizonary Account?

                                You can login again
                                whenever you want.
                            </p>



                            <div className="flex gap-4 mt-8">


                                <button
                                onClick={() => setShowDeactivateModal(false)}
                                className=" flex-1 h-14 rounded-2xl border border-gray-300
                                font-bold hover:bg-gray-100 duration-300">

                                No

                                </button>



                                <button
                                        onClick={handleDeactivateAccount}
                                    className=" flex-1 h-14 rounded-2xl bg-gradient-to-r
                                    from-red-500 to-red-700 text-white font-bold"
                                >
                                    Yes
                                </button>


                            </div>


                        </div>

                    </div>

                </div>

            )}

            {accountDeactivated && (

                <div
                    className=" fixed inset-0 z-50 flex  items-center 
                    justify-center bg-black/60 backdrop-blur-sm px-4">

                    <div className=" w-full max-w-md rounded-[35px] bg-white p-10 text-center shadow-2xl">


                        <div className=" w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">

                            ✓

                        </div>


                        <h2 className=" mt-6 text-3xl font-black text-green-600">
                            Account Deactivate
                        </h2>


                        <p className="mt-3 text-gray-500">
                            Your Quizonary account has been
                            Deactivate successfully.
                        </p>


                        <button
                            onClick={()=>{
                                localStorage.removeItem("token");
                                localStorage.removeItem("user");
                                localStorage.clear();
                                navigate("/login");
                            }}
                            className=" mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-purple-700
                            via-violet-600 to-pink-500 text-white font-bold"
                        >
                            OK
                        </button>


                    </div>

                </div>

            )}

            {showPasswordModal &&(

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
                    <div className="relative w-full max-w-md bg-white theme-card rounded-3xl shadow-2xl p-8">

                        <h1 className="text-3xl font-black text-center theme-text">
                            {t.changePassword}
                        </h1>

                        <p className="text-center text-gray-500 mt-2">
                            Update your account password securely.
                        </p>

                        <div className="mt-8 space-y-5">

                        {/* Current Password */}
                        <div className="relative">
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                placeholder="Current Password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full h-14 rounded-2xl border theme-input px-5 pr-14 outline-none focus:ring-2 focus:ring-purple-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition"
                            >
                                {showCurrentPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <input
                                type={showNewPassword ? "text" : "password"}
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value);
                                    checkPasswordStrength(e.target.value);
                                }}
                                onKeyUp={handleCapsLock}
                                className="w-full h-14 rounded-2xl border theme-input px-5 pr-14 outline-none focus:ring-2 focus:ring-purple-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition"
                            >
                                {showNewPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>

                            {passwordStrength && (
                            <p
                                className={`mt-2 text-sm font-bold ${
                                passwordStrength === "WEAK"
                                    ? "text-red-500"
                                    : passwordStrength === "MEDIUM"
                                    ? "text-yellow-500"
                                    : "text-green-500"
                                }`}
                            >
                                Password Strength : {passwordStrength}
                            </p>
                            )}

                            {capsLock && (
                            <p className="mt-2 text-sm font-bold text-red-500">
                                Caps Lock is ON
                            </p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full h-14 rounded-2xl border theme-input px-5 pr-14 outline-none focus:ring-2 focus:ring-purple-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition"
                            >
                                {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-2">
                            <button
                                onClick={() => setShowPasswordModal(false)}
                                className="flex-1 h-14 rounded-2xl border border-gray-300 theme-text font-semibold hover:bg-gray-100 transition"
                            >
                                {t.cancel}
                            </button>

                            <button
                                onClick={handleChangePassword}
                                disabled={loading}
                                className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition disabled:opacity-60 disabled:hover:scale-100"
                            >
                                {t.loading ? "Updating..." : "Update Password"}
                            </button>
                        </div>

                        </div>
                    </div>
                </div>

            )}

            {passwordChanged &&(

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
                    <div className="relative w-full max-w-md bg-white theme-card rounded-3xl shadow-2xl p-10 text-center">

                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="mt-6 text-3xl font-black theme-text">
                            Password Changed Successfully
                        </h1>

                        <p className="mt-3 text-base theme-text-light">
                            Your password has been updated successfully.
                            <br />
                            Please login again to continue.
                        </p>

                        <button
                            onClick={() => {
                                localStorage.clear();
                                navigate("/login");
                            }}
                            className="mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition"
                        >
                            Login Again
                        </button>

                    </div>
                </div>

            )}
        </div>
    </>
  )
}

export default Settings