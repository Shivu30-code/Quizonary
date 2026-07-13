import React from "react";
import {Bell,Megaphone,} from "lucide-react";

const notices = [
  {
    title: "Welcome to Quiznary!",
    description:
      "🎉 Test your knowledge, compete with players, and win exciting rewards.",
  },
  {
    title: "Stable Internet Required",
    description:
      "⚠️ Please ensure your internet connection is stable before joining any live quiz.",
  },
  {
    title: "Reward Verification",
    description:
      "💰 Rewards will be credited only after successful result verification.",
  },
  {
    title: "Maintenance Updates",
    description:
      "🔄 Any maintenance or updates will be announced here. Thank you for your patience.",
  },
  {
    title: "Fair Play Policy",
    description:
      "🚫 Any suspicious activity, cheating, or use of multiple accounts may result in permanent account suspension.",
  },
  {
    title: "Stay Updated",
    description:
      "📢 Check this notice section regularly for the latest announcements and upcoming events.",
  },
];

const NoticeSection = () => {
  return (
    <div 
      // className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6">
      className="bg-white rounded-3xl shadow-xl border border-purple-100 p-4 sm:p-6">

      <div className="flex items-center gap-3 mb-5">

        <div className="bg-pink-100 p-2.5 sm:p-3 rounded-xl">
          <Megaphone className="text-pink-600" />
        </div>

        <div>

          {/* <h2 className="text-2xl font-bold"> */}
          <h2 className="text-xl sm:text-2xl font-bold">
            Notices
          </h2>

          <p className="text-gray-500">
            Latest announcements
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {notices.map((item, index) => (

          <div
            key={index}
            // className="border border-purple-100 rounded-2xl p-4 hover:bg-purple-50 transition"
            className="border border-purple-100 rounded-2xl p-4 hover:bg-purple-50 transition-all duration-300"
          >

            {/* <h3
            //  className="font-semibold text-gray-800 flex items-center gap-2"
              className="font-semibold text-sm sm:text-base text-gray-800 flex items-center gap-2"
            >

              <Bell size={18} className="text-purple-600" />

              {item.title}

            </h3>

            <div 
            // className="flex gap-5 mt-3 text-sm text-gray-500">
              className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-3 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-2">

                <CalendarDays size={16} />

                {item.date}

              </span>

              <span className="flex items-center gap-2">

                <Clock3 size={16} />

                {item.time}

              </span>

            </div> */}
            <div className="flex items-start gap-3">

  <div className="bg-purple-100 p-2 rounded-xl mt-1">
    <Bell size={18} className="text-purple-600" />
  </div>

  <div>
    <h3 className="font-semibold text-sm sm:text-base text-gray-800">
      {item.title}
    </h3>

    <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-6">
      {item.description}
    </p>
  </div>

</div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default NoticeSection;