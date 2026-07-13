import React, { useState } from "react";
import { Bell, Pencil, X , User} from "lucide-react";
import API from "../../api/axios";
import lion from "../../assets/avatars/lion.jpg";
import tiger from "../../assets/avatars/tiger.jpg";
import panda from "../../assets/avatars/panda.jpg";
import fox from "../../assets/avatars/fox.jpg";
import koala from "../../assets/avatars/koala.jpg";
import bear from "../../assets/avatars/bear.jpg";
import cat from "../../assets/avatars/cat.jpg";
import unicorn from "../../assets/avatars/unicorn.jpg";


const Navbar = () => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
    const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar);

//   const avatars = [
//   {
//     name: "Lion",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=lion",
//   },
//   {
//     name: "Tiger",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=tiger",
//   },
//   {
//     name: "Panda",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=panda",
//   },
//   {
//     name: "Fox",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=fox",
//   },
//   {
//     name: "Dog",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=dog",
//   },
//   {
//     name: "Cat",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=cat",
//   },
//   {
//     name: "Rabbit",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=rabbit",
//   },
//   {
//     name: "Bear",
//     url: "https://api.dicebear.com/9.x/adventurer/svg?seed=bear",
//   },
// ];
  const avatars = [
  { name: "Lion", url: lion },
  { name: "Tiger", url: tiger },
  { name: "Panda", url: panda },
  { name: "Fox", url: fox },
  { name: "Koala", url: koala },
  { name: "Bear", url: bear },
  { name: "unicorn", url: unicorn },
  { name: "Cat", url: cat },

];
const handleSaveAvatar = async () => {
  try {

    const updatedUser = {
      ...user,
      avatar: selectedAvatar,
    };

    const res = await API.put("/auth/avatar", {
      userId: user.id,
      avatar: selectedAvatar,
    });

    if (res.data.success) {

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      alert("Avatar Updated Successfully");

      setShowAvatarModal(false);

      window.location.reload();

    }

  } catch (error) {

    alert(error.response?.data?.message || "Failed to update avatar");

  }
};
  return (
    <>
    <div className="w-full bg-white shadow-lg rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3">

      <div className="flex-1 min-w-0 pl-14 lg:pl-0">
        <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800 truncate">
          Welcome Back 👋
          <span className="text-purple-600">
            {user?.fullName}
          </span>
        </h2>

        <p className="hidden sm:block text-sm lg:text-base text-gray-500 mt-1">
          Ready to win today's quiz?
        </p>
      </div>


      <div className="flex items-center gap-2 sm:gap-4 shrink-0">

        <button 
          className="relative p-2 rounded-full hover:bg-purple-50 transition duration-300"
        >
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />

          <span 
            className="absolute -top-1 -right-1 bg-pink-500 text-white w-4 h-4 sm:w-5 sm:h-5 rounded-full text-[9px] sm:text-[10px] flex items-center justify-center font-semibold"
          > 
            2
          </span>
        </button>

        {/* Profile */}
        {/* <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-purple-200 object-cover"
        /> */}
        <div className="relative">

  {/* <img
    src={
      user?.avatar ||
      "lion"
    }
    alt="Profile"
    onClick={() => setShowAvatarModal(true)}
    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-purple-300 cursor-pointer object-cover hover:scale-105 duration-300"
  /> */}
  <div
  onClick={() => setShowAvatarModal(true)}
  className="relative cursor-pointer"
>
  {user?.avatar ? (
    <img
      src={user.avatar}
      alt="Profile"
      className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-purple-300 object-cover hover:scale-105 duration-300"
    />
  ) : (
    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-purple-300 bg-purple-100 flex items-center justify-center hover:scale-105 duration-300">
      <User className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
    </div>
  )}
</div>

  <button
    onClick={() => setShowAvatarModal(true)}
    className="absolute -bottom-1 -right-1 bg-purple-600 text-white rounded-full p-1 shadow-lg hover:bg-purple-700"
  >
    <Pencil size={10} />
  </button>

</div>


      </div>
      
    </div>
    {showAvatarModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">

          <div className="bg-white rounded-3xl w-[95%] max-w-md p-6 shadow-2xl">

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Change Avatar
              </h2>

              <button
                onClick={() => setShowAvatarModal(false)}
              >
                <X />
              </button>

            </div>

            <p className="mt-3 text-gray-500">
              Choose your favourite avatar.
            </p>

           <div className="grid grid-cols-4 gap-4 mt-6">

  {avatars.map((avatar, index) => (

    <button
      key={index}
      onClick={() => setSelectedAvatar(avatar.url)}
      className={`rounded-2xl p-2 border-2 transition-all duration-300

      ${
        selectedAvatar === avatar.url
          ? "border-purple-600 bg-purple-50 scale-105"
          : "border-gray-200 hover:border-purple-300"
      }`}
    >

      <img
        src={avatar.url}
        alt={avatar.name}
        className="w-16 h-16 rounded-full mx-auto"
      />

      <p className="text-xs mt-2 font-medium">
        {avatar.name}
      </p>

    </button>

  ))}

</div>
 <button
  onClick={handleSaveAvatar}
        className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] duration-300"
      >
        Save Avatar
      </button>

          </div>

        </div>
      )}

    </>
    
  );
};

export default Navbar;

