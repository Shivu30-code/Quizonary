import React from "react";

const StatsCard = ({
  title,
  value,
  icon: Icon,
  bg,
  iconBg,
  text,
}) => {
  return (
    <div
      className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`${bg} w-16 h-16 rounded-2xl flex items-center justify-center`}
        >
          <Icon
            className={`${iconBg}`}
            size={30}
          />
        </div>

      </div>

      <p className={`mt-4 font-semibold ${text}`}>
        Updated Today
      </p>

    </div>
  );
};

export default StatsCard;