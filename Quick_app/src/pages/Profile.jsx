// import React, { useState } from "react";
// import { Camera, ShieldCheck, CalendarDays, X, User,Sparkles } from "lucide-react";
// import API from "../api/axios";

// import lion from "../assets/avatars/lion.jpg";
// import tiger from "../assets/avatars/tiger.jpg";
// import panda from "../assets/avatars/panda.jpg";
// import fox from "../assets/avatars/fox.jpg";
// import koala from "../assets/avatars/koala.jpg";
// import bear from "../assets/avatars/bear.jpg";
// import cat from "../assets/avatars/cat.jpg";
// import unicorn from "../assets/avatars/unicorn.jpg";

// const Profile = () => {

//   const user = JSON.parse(localStorage.getItem("user"));
//   const [showAvatarModal, setShowAvatarModal] = useState(false);

//   const [fullName, setFullName] = useState(user?.fullName || "");
//   const [bio, setBio] = useState(user?.bio || "");
//   const [gender, setGender] = useState(user?.gender || "");
//   const [avatar, setAvatar] = useState(user?.avatar || "");
  
//   const avatars = [
//   { name: "Lion", url: lion },
//   { name: "Tiger", url: tiger },
//   { name: "Panda", url: panda },
//   { name: "Fox", url: fox },
//   { name: "Koala", url: koala },
//   { name: "Bear", url: bear },
//   { name: "Cat", url: cat },
//   { name: "Unicorn", url: unicorn },
// ];
// const handleUpdateProfile = async () => {
//   try {

//     const res = await API.put("/auth/profile", {
//       userId: user.id,
//       fullName,
//       bio,
//       gender,
//       avatar,
//     });

//     if (res.data.success) {

//       localStorage.setItem(
//         "user",
//         JSON.stringify(res.data.user)
//       );

//       alert("Profile Updated Successfully");

//     //   window.location.reload();

//     }

//   } catch (error) {

//     alert(
//       error.response?.data?.message ||
//       "Failed to update profile"
//     );

//   }
// };

//   return (

//     <div className="flex-1 lg:ml-72 pt-24 lg:pt-8 px-4 sm:px-6 lg:px-8 pb-10">

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}

//         <div className="text-center mb-10">

//   <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-4">

//     <Sparkles size={18} />

//     Personal Dashboard

//   </div>

//   <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-700 via-pink-500 to-violet-600 bg-clip-text text-transparent">

//     My Profile

//   </h1>

//   <p className="text-gray-500 mt-3 text-lg">

//     Manage your personal information and customize your account.

//   </p>

// </div>

//         {/* Card */}

//         <div className="relative overflow-hidden rounded-[35px] bg-white border border-purple-100 shadow-[0_20px_60px_rgba(124,58,237,.15)] p-6 sm:p-8">

//         <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>

// <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl"></div>
//           <div className="relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">


//             {/* LEFT */}

// <div className="flex flex-col items-center">

//   {/* Avatar */}

//   <div className="relative group">

//     <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-r from-purple-600 via-violet-500 to-pink-500 shadow-2xl">

//       <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">

//         {avatar ? (
//           <img
//             src={avatar}
//             alt="Avatar"
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-purple-100">
//             <span className="text-6xl">👤</span>
//           </div>
//         )}

//       </div>

//     </div>

//     {/* Camera Button */}

//     <button
//       onClick={() => setShowAvatarModal(true)}
//       className="absolute bottom-2 right-2 w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300"
//     >
//       <Camera size={20} />
//     </button>

//   </div>

//   {/* Name */}

//   <h2 className="mt-6 text-2xl font-bold text-gray-800 text-center">
//     {fullName}
//   </h2>

//   <p className="text-purple-600 font-medium">
//     Quiznary Player
//   </p>

//   {/* Account Card */}

//   <div className="w-full mt-8 rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 shadow-lg">

//     <div className="flex justify-between items-center">

//       <span className="font-semibold text-gray-700">
//         Account Status
//       </span>

//       <div className="flex items-center gap-2 text-green-600 font-semibold">
//         <ShieldCheck size={18} />
//         Verified
//       </div>

//     </div>

//     <div className="border-t border-purple-200 my-5"></div>

//     <div className="flex justify-between items-center">

//       <span className="text-gray-600">
//         Member Since
//       </span>

//       <div className="flex items-center gap-2 text-gray-700 font-medium">

//         <CalendarDays size={18} />

//         {user?.createdAt
//           ? new Date(user.createdAt).toLocaleDateString(
//               "en-US",
//               {
//                 month: "long",
//                 year: "numeric",
//               }
//             )
//           : "July 2026"}

//       </div>

//     </div>

//   </div>

// </div>



//             {/* RIGHT */}

// <div className="lg:col-span-2">

//   <div className="grid md:grid-cols-2 gap-6">

//     {/* Full Name */}

//     <div>

//       <label className="block mb-2 font-semibold text-gray-700">
//         Full Name
//       </label>

//       <input
//         type="text"
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         placeholder="Enter Full Name"
//         className="w-full rounded-2xl border border-purple-200 px-5 py-4 outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100 duration-300"
//       />

//     </div>

//     {/* Gender */}

//     <div>

//       <label className="block mb-2 font-semibold text-gray-700">
//         Gender
//       </label>

//       <select
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//         className="w-full rounded-2xl border border-purple-200 px-5 py-4 outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100 duration-300"
//       >

//         <option value="">Select Gender</option>
//         <option>Male</option>
//         <option>Female</option>
//         <option>Other</option>
//         <option>Prefer not to say</option>

//       </select>

//     </div>

//   </div>

//   {/* Email */}

//   <div className="mt-6">

//     <label className="block mb-2 font-semibold text-gray-700">
//       Email Address
//     </label>

//     <input
//       value={user.email}
//       readOnly
//       className="w-full rounded-2xl bg-gray-100 border border-gray-200 px-5 py-4 text-gray-500 cursor-not-allowed"
//     />

//   </div>

//   {/* Mobile */}

//   <div className="mt-6">

//     <label className="block mb-2 font-semibold text-gray-700">
//       Mobile Number
//     </label>

//     <input
//       value={user.mobile}
//       readOnly
//       className="w-full rounded-2xl bg-gray-100 border border-gray-200 px-5 py-4 text-gray-500 cursor-not-allowed"
//     />

//   </div>

//   {/* Bio */}

//   <div className="mt-6">

//     <label className="block mb-2 font-semibold text-gray-700">
//       Bio
//     </label>

//     <textarea
//       rows={5}
//       maxLength={150}
//       value={bio}
//       onChange={(e) => setBio(e.target.value)}
//       placeholder="Tell us something about yourself..."
//       className="w-full rounded-2xl border border-purple-200 px-5 py-4 resize-none outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-100 duration-300"
//     />

//     <div className="flex justify-between mt-2">

//       <p className="text-sm text-gray-400">
//         Maximum 150 characters
//       </p>

//       <p className="text-sm text-purple-600 font-semibold">
//         {bio.length}/150
//       </p>

//     </div>

//   </div>

//   {/* Save Button */}

//   <div className="flex justify-center mt-10">

//     <button
//       onClick={handleUpdateProfile}
//       className="px-14 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 text-white font-semibold text-lg shadow-xl hover:scale-105 duration-300 hover:shadow-purple-300"
//     >

//       Update Profile

//     </button>

//   </div>

// </div>

//           </div>
//           </div>

//         </div>

//       </div>
// {showAvatarModal && (

// <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">

// <div className="w-full max-w-lg bg-white rounded-[35px] shadow-2xl overflow-hidden animate-[fadeIn_.25s_ease]">

// {/* Header */}

// <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 p-6 text-white flex justify-between items-center">

// <div>

// <h2 className="text-2xl font-bold">
// Choose Avatar
// </h2>

// <p className="text-purple-100 text-sm mt-1">
// Select your favourite profile avatar
// </p>

// </div>

// <button
// onClick={()=>setShowAvatarModal(false)}
// className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 duration-300 flex items-center justify-center"
// >

// <X/>

// </button>

// </div>

// {/* Body */}

// <div className="p-6">

// <div className="grid grid-cols-4 gap-5">

// {avatars.map((item)=>(
// <button

// key={item.name}

// onClick={()=>setAvatar(item.url)}

// className={`relative rounded-3xl p-2 transition-all duration-300

// ${
// avatar===item.url
// ?
// "bg-purple-100 border-2 border-purple-600 scale-110 shadow-xl"
// :
// "border border-gray-200 hover:border-purple-300 hover:scale-105"
// }`}

// >

// <img

// src={item.url}

// alt=""

// className="w-16 h-16 rounded-full object-cover mx-auto"

// />

// <p className="text-xs font-semibold mt-2">

// {item.name}

// </p>

// {avatar===item.url &&(

// <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">

// ✓

// </div>

// )}

// </button>

// ))}

// </div>

// {/* Buttons */}

// <div className="flex gap-4 mt-8">

// <button

// onClick={()=>setShowAvatarModal(false)}

// className="flex-1 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 duration-300"

// >

// Cancel

// </button>

// <button

// onClick={()=>{

// setShowAvatarModal(false)

// }}

// className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 text-white font-semibold hover:scale-105 duration-300"

// >

// Done

// </button>

// </div>

// </div>

// </div>

// </div>

// )}
//     </div>

//   );
// };

// export default Profile;


import React, { useState } from "react";
import { Camera, ShieldCheck, CalendarDays, X, User,Sparkles } from "lucide-react";
import API from "../api/axios";

import lion from "../assets/avatars/lion.jpg";
import tiger from "../assets/avatars/tiger.jpg";
import panda from "../assets/avatars/panda.jpg";
import fox from "../assets/avatars/fox.jpg";
import koala from "../assets/avatars/koala.jpg";
import bear from "../assets/avatars/bear.jpg";
import cat from "../assets/avatars/cat.jpg";
import unicorn from "../assets/avatars/unicorn.jpg";

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  
  const avatars = [
  { name: "Lion", url: lion },
  { name: "Tiger", url: tiger },
  { name: "Panda", url: panda },
  { name: "Fox", url: fox },
  { name: "Koala", url: koala },
  { name: "Bear", url: bear },
  { name: "Cat", url: cat },
  { name: "Unicorn", url: unicorn },
];
const handleUpdateProfile = async () => {
  try {

    const res = await API.put("/auth/profile", {
      userId: user.id,
      fullName,
      bio,
      gender,
      avatar,
    });

    if (res.data.success) {

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Profile Updated Successfully");

    //   window.location.reload();

    }

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Failed to update profile"
    );

  }
};
return (

<div
className="
pt-4
lg:pt-2
pb-12
"
>



<div className="max-w-7xl mx-auto">

{/* ===================== PAGE TITLE ===================== */}

<div className="text-center mb-8">

<h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500 bg-clip-text text-transparent">
My Profile
</h1>

<p className="text-gray-500 mt-3 text-base sm:text-lg">
Manage your personal information and account settings
</p>

</div>

{/* ===================== PROFILE HERO ===================== */}

<div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#6D28D9] via-[#9333EA] to-[#EC4899] p-[2px] shadow-[0_20px_60px_rgba(147,51,234,.35)]">

<div className="relative rounded-[33px] bg-white overflow-hidden">

{/* Background Effect */}

<div className="absolute inset-0">

<div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-300/30 blur-[130px]" />

<div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-300/30 blur-[150px]" />

</div>

{/* Cover */}

<div className="relative h-48 bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500">

<div className="absolute inset-0 opacity-20">

<div className="w-full h-full bg-[radial-gradient(circle_at_center,white_2px,transparent_2px)] bg-[length:28px_28px]" />

</div>

</div>

{/* Avatar */}

<div className="relative flex flex-col items-center -mt-20">

<div className="relative">

<div className="w-40 h-40 rounded-full bg-white p-2 shadow-2xl">

{avatar ? (

<img
src={avatar}
alt="avatar"
className="w-full h-full rounded-full object-cover"
/>

) : (

<div className="w-full h-full rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">

<User
size={75}
className="text-purple-600"
/>

</div>

)}

</div>

<button
onClick={() => setShowAvatarModal(true)}
className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300"
>

<Camera size={22}/>

</button>

</div>

{/* Name */}

<h2 className="mt-6 text-3xl font-black text-gray-800">

{fullName || "Quiznary User"}

</h2>

{/* User ID */}

<p className="mt-2 font-semibold text-purple-600">

User ID :
{" "}
#{user?._id?.slice(-6).toUpperCase()}

</p>

{/* Badges */}

<div className="flex flex-wrap justify-center gap-4 mt-7 mb-10">

<div className="px-5 py-3 rounded-full bg-green-100 text-green-700 font-semibold flex items-center gap-2">

<ShieldCheck size={18}/>

Verified Account

</div>

<div className="px-5 py-3 rounded-full bg-purple-100 text-purple-700 font-semibold flex items-center gap-2">

<CalendarDays size={18}/>

Joined{" "}

{new Date(user.createdAt).toLocaleDateString(
"en-US",
{
month:"long",
year:"numeric",
}
)}

</div>

</div>

</div>

</div>

</div>

{/* ===================== PERSONAL INFORMATION ===================== */}

<div className="mt-10 bg-white rounded-[35px] shadow-2xl border border-purple-100 p-6 sm:p-10">

<div className="flex items-center gap-3 mb-8">

<div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white">

<Sparkles size={26}/>

</div>

<div>

<h2 className="text-3xl font-bold text-gray-800">

Personal Information

</h2>

<p className="text-gray-500">

Update your profile details

</p>

</div>

</div>
{/* ===================== FORM ===================== */}

<div className="grid lg:grid-cols-2 gap-7">

  {/* Full Name */}

  <div>

    <label className="block mb-2 font-semibold text-gray-700">
      Full Name
    </label>

    <input
      type="text"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      placeholder="Enter your full name"
      className="w-full h-14 rounded-2xl border border-purple-200 bg-purple-50/40 px-5 outline-none transition-all duration-300 focus:bg-white focus:border-purple-600 focus:ring-4 focus:ring-purple-200"
    />

  </div>

  {/* Gender */}

  <div>

    <label className="block mb-2 font-semibold text-gray-700">
      Gender
    </label>

    <select
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      className="w-full h-14 rounded-2xl border border-purple-200 bg-purple-50/40 px-5 outline-none transition-all duration-300 focus:bg-white focus:border-purple-600 focus:ring-4 focus:ring-purple-200"
    >

      <option value="">Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
      <option>Prefer not to say</option>

    </select>

  </div>

</div>

{/* Email */}

<div className="mt-7">

  <label className="block mb-2 font-semibold text-gray-700">
    Email Address
  </label>

  <input
    value={user.email}
    readOnly
    className="w-full h-14 rounded-2xl bg-gray-100 border border-gray-200 px-5 text-gray-500 cursor-not-allowed"
  />

</div>

{/* Mobile */}

<div className="mt-7">

  <label className="block mb-2 font-semibold text-gray-700">
    Mobile Number
  </label>

  <input
    value={user.mobile}
    readOnly
    className="w-full h-14 rounded-2xl bg-gray-100 border border-gray-200 px-5 text-gray-500 cursor-not-allowed"
  />

</div>

{/* Bio */}

<div className="mt-7">

  <div className="flex justify-between items-center mb-2">

    <label className="font-semibold text-gray-700">
      About Me
    </label>

    <span className="text-sm font-semibold text-purple-600">
      {bio.length}/200
    </span>

  </div>

  <textarea
    rows={6}
    maxLength={200}
    value={bio}
    onChange={(e) => setBio(e.target.value)}
    placeholder="Tell everyone something about yourself..."
    className="w-full rounded-2xl border border-purple-200 bg-purple-50/40 px-5 py-4 resize-none outline-none transition-all duration-300 focus:bg-white focus:border-purple-600 focus:ring-4 focus:ring-purple-200"
  />

  <p className="text-sm text-gray-400 mt-2">
    Your bio will appear on your public profile.
  </p>

</div>

{/* Divider */}

<div className="my-10 border-t border-purple-100"></div>

{/* Save Button */}

<div className="flex justify-center">

  <button
    onClick={handleUpdateProfile}
    className="group w-full sm:w-80 h-14 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 text-white text-lg font-bold shadow-xl hover:scale-105 hover:shadow-[0_15px_35px_rgba(168,85,247,.45)] duration-300"
  >

    <span className="flex items-center justify-center gap-2">

      <Sparkles
        size={20}
        className="group-hover:rotate-12 duration-300"
      />

      Save Changes

    </span>

  </button>

</div>

</div>

</div>




{showAvatarModal && (

<div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

  <div className="w-full max-w-lg rounded-[35px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.25)] overflow-hidden animate-[fadeIn_.3s_ease]">

    {/* Header */}

    <div className="bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500 px-8 py-6 text-white">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">

            Choose Avatar

          </h2>

          <p className="text-white/80 mt-1">

            Select your favourite profile picture

          </p>

        </div>

        <button
          onClick={() => setShowAvatarModal(false)}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 duration-300 flex items-center justify-center"
        >

          <X />

        </button>

      </div>

    </div>

    {/* Body */}

    <div className="p-7">

      <div className="grid grid-cols-4 gap-5">

        {avatars.map((item) => (

          <button
            key={item.name}
            onClick={() => setAvatar(item.url)}
            className={`rounded-3xl border-2 p-3 transition-all duration-300

            ${
              avatar === item.url
                ? "border-purple-600 bg-purple-50 scale-105 shadow-lg"
                : "border-gray-200 hover:border-purple-400 hover:scale-105"
            }`}
          >

            <img
              src={item.url}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover mx-auto"
            />

            <p className="text-xs mt-3 font-semibold text-gray-700">

              {item.name}

            </p>

          </button>

        ))}

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => setShowAvatarModal(false)}
          className="flex-1 h-12 rounded-2xl border border-gray-300 font-semibold hover:bg-gray-100 duration-300"
        >

          Cancel

        </button>

        <button
          onClick={() => setShowAvatarModal(false)}
          className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 text-white font-bold hover:scale-105 duration-300 shadow-lg"
        >

          Done

        </button>

      </div>

    </div>

  </div>

</div>

)}

</div>

);
}

export default Profile;

