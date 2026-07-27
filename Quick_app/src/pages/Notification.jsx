import React from "react";
import { Bell} from "lucide-react";

import {getNotifications} from "../utils/NotificationStorage";

const Notification = () => {
    const handleMarkAllRead = () => {

    const updated =
        notifications.map(
            (item)=>({
                ...item,
                read:true
            })
        );

    localStorage.setItem(
        "notifications",
        JSON.stringify(updated)
    );

    window.location.reload();
};
const handleClearAll = () => {

    localStorage.removeItem(
        "notifications"
    );

    window.location.reload();

};
const handleDelete = (id) => {

    const updated =
        notifications.filter(
            (item)=>item.id!==id
        );

    localStorage.setItem(
        "notifications",
        JSON.stringify(updated)
    );

    window.location.reload();

};

    const notifications =
        getNotifications();

    return (

        <div className="flex-1 pt-24 lg:pt-8 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-10">

                    <div
                        className="mx-auto mb-6 relative flex items-center justify-center w-24 h-24 rounded-[28px] bg-gradient-to-br
                        from-indigo-600 via-violet-600 to-fuchsia-500 shadow-2xl animate-[float_3s_ease-in-out_infinite]">
                        
                        <div
                            className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-violet-500 to-pink-500 blur-xl opacity-40"
                        />

                        <Bell className="relative z-10 w-10 h-10 text-white" />
                    </div>

                    <h1 className="text-5xl font-black bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                        Notifications
                    </h1>

                    <p className="mt-4 theme-text-light">
                        Stay updated with your latest activities.
                    </p>

                    <div className="mt-6 inline-block px-5 py-3 rounded-2xl bg-purple-100 theme-card">
                        Total Notifications : {notifications.length}
                    </div>
                    <div className="mt-6 flex justify-center gap-4">

                        <button
                            onClick={handleMarkAllRead}
                            className="px-5 py-3 rounded-2xl bg-green-500 text-white font-bold"
                        >
                            Mark All Read
                        </button>

                        <button
                            onClick={handleClearAll}
                            className="px-5 py-3 rounded-2xl bg-red-500 text-white font-bold"
                        >
                            Clear All
                        </button>


                    </div>

                </div>
    
                {notifications.length === 0
                    ?
                    (

                        <div className="rounded-[35px] p-16 text-center theme-card shadow-xl">

                            <h1 className="text-7xl">
                                🔔
                            </h1>

                            <h2 className="mt-5 text-3xl font-black theme-text">
                                No Notifications Found
                            </h2>

                            <p className="mt-3 theme-text-light">
                                New notifications will appear here.
                            </p>
                        </div>

                    ):(

                        notifications.map(

                            (item) => (

                                <div
                                    key={item.id}
                                    className="p-6 rounded-[30px] shadow-lg mb-5 theme-card border border-purple-100 
                                    hover:shadow-2xl duration-300">

                                    <div className="flex items-center gap-3">

                                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>

                                        <h1 className="text-2xl font-black theme-text">
                                            {item.title}
                                        </h1>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className=" px-4 py-2 rounded-xl bg-red-100 text-red-500"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                    <p className="mt-3 theme-text-light">
                                        {item.message}
                                    </p>

                                    <h3 className="mt-4 text-sm text-gray-400">
                                        {item.time}
                                    </h3>
                                    
                                </div>

                            )

                        )

                    )

                    
                }
                
            </div>
        </div>

    );

};


export default Notification;