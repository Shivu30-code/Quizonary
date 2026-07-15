import React, { useState } from "react";
import { Camera, ShieldCheck, CalendarDays, X, User,Sparkles } from "lucide-react";
import API from "../api/axios";

import elephant from "../assets/avatars/elephant.png";
import fox from "../assets/avatars/fox.jpg";
import giraffe from "../assets/avatars/giraffe.png";
import panda from "../assets/avatars/panda.jpg";
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
  { name: "elephant", url: elephant },
  { name: "Fox", url: fox },
  { name: "giraffe", url: giraffe },
  { name: "Panda", url: panda },
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

  <div className="pt-4 lg:pt-2 pb-12">

    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-8">

        <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500 bg-clip-text text-transparent">
          My Profile
        </h1>

        <p className="text-gray-500 mt-3 text-base sm:text-lg">
          Manage your personal information and account settings
        </p>

      </div>

      <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#6D28D9] via-[#9333EA] to-[#EC4899] p-[2px] shadow-[0_20px_60px_rgba(147,51,234,.35)]">

        <div className="relative rounded-[33px] bg-white overflow-hidden">


          <div className="absolute inset-0">

            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-300/30 blur-[130px]" />

            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-300/30 blur-[150px]" />

          </div>

          <div className="relative h-48 bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500">

            <div className="absolute inset-0 opacity-20">

              <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_2px,transparent_2px)] bg-[length:28px_28px]" />

            </div>

          </div>


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


            <h2 className="mt-6 text-3xl font-black text-gray-800">

              {fullName || "Quiznary User"}

            </h2>

   

            <p className="mt-2 font-semibold text-purple-600">

              User ID :

              {user?.userId
              ? `#${user.userId}`
              : "#QUIZ-USER"}

            </p>


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

        <div className="grid lg:grid-cols-2 gap-7">

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


        <div className="mt-7">

          <div className="flex justify-between items-center mb-2">

            <label className="font-semibold text-gray-700">
              Bio
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


        <div className="my-10 border-t border-purple-100"></div>


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

