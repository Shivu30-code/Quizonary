import React from "react";
import {
  Bell,
  CalendarDays,
  Clock3,
  Megaphone,
} from "lucide-react";

const notices = [
  {
    title: "Today's Quiz Starts",
    date: "Today",
    time: "7:00 PM",
  },
  {
    title: "Weekly Mega Contest",
    date: "Sunday",
    time: "8:00 PM",
  },
  {
    title: "New Science Category Added",
    date: "Today",
    time: "Available",
  },
  {
    title: "Maintenance",
    date: "15 July",
    time: "12 AM - 2 AM",
  },
];

const NoticeSection = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-pink-100 p-3 rounded-xl">
          <Megaphone className="text-pink-600" />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
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
            className="border border-purple-100 rounded-2xl p-4 hover:bg-purple-50 transition"
          >

            <h3 className="font-semibold text-gray-800 flex items-center gap-2">

              <Bell size={18} className="text-purple-600" />

              {item.title}

            </h3>

            <div className="flex gap-5 mt-3 text-sm text-gray-500">

              <span className="flex items-center gap-2">

                <CalendarDays size={16} />

                {item.date}

              </span>

              <span className="flex items-center gap-2">

                <Clock3 size={16} />

                {item.time}

              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default NoticeSection;