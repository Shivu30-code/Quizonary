import React, { useEffect, useState } from 'react'
import { Crown,ArrowDown } from "lucide-react"; 
import { getLeaderboard, clearLeaderboard } from "../utils/leaderboard";
import axios from "axios";

const LeaderBoard = () => {
    const [visiblePlayers,setVisiblePlayers]= useState(10);
    const [players, setPlayers] = useState([]);
    //     const data =
    // JSON.parse(
    //     localStorage.getItem("leaderboard")
    // ) || [];
 useEffect(() => {

    const fetchLeaderboard =
    async () => {

        try {

            const response =
            await axios.get(
                "http://localhost:5000/api/quiz/leaderboard"
            );

            setPlayers(
                response.data.data
            );

        } catch (error) {

            console.log(error);

        }
    };

    fetchLeaderboard();

}, []);
//     useEffect(() => {
//    setPlayers(getLeaderboard());
// }, []);
  return (
    <>
        <div className="text-center mb-10 theme-card">
            <div
                className="mx-auto mb-5 w-20 h-20 rounded-3xl
                bg-gradient-to-r from-yellow-400 to-orange-500
                flex items-center justify-center shadow-xl
                shadow-yellow-200"
            >

                <Crown size={40} className="text-white"/>
            </div>

            <h1
                className="text-4xl sm:text-5xl lg:text-6xl
                font-black bg-gradient-to-r
                from-purple-700 via-violet-600 to-pink-500
                bg-clip-text text-transparent"
            >

                LEADERBOARD
            </h1>

            <p className="mt-4 text-gray-500 text-base sm:text-lg theme-text-light">
                Compete • Learn • Rise
            </p>

            <div
                className="mt-7 inline-flex items-center gap-3
                rounded-full border border-purple-200
                bg-purple-50 px-6 py-3 theme-card"
            >

                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>

                <p className="font-semibold text-purple-700 theme-text">
                    Top Players Around The World
                </p>

            </div>

           <div className="mt-10 w-full max-w-4xl mx-auto theme-card">

                <div
                    className="
                    relative overflow-hidden rounded-[35px]
                    bg-gradient-to-r
                    from-[#6D28D9]
                    via-[#9333EA]
                    to-[#EC4899]
                    p-[2px]
                    shadow-[0_20px_60px_rgba(147,51,234,.35)]">

                    <div className=" relative rounded-[33px] bg-white overflow-hidden theme-card">


                        <div className="absolute inset-0">

                            <div
                                className="
                                absolute -top-24 -left-24
                                w-72 h-72 rounded-full
                                bg-purple-300/30 blur-[120px]"
                            />
                            <div
                                className="
                                absolute -bottom-24 -right-24
                                w-80 h-80 rounded-full
                                bg-pink-300/30 blur-[140px]"
                            />

                        </div>




                        <div className="relative py-6 px-5 sm:py-8 sm:px-6 lg:py-10 lg:px-8">

                            <p className="text-xs sm:text lg:text-base font-semibold tracking-[3px]
                                lg:tracking-[4px] text-purple-600 text-center theme-text-light">
                                Your Current Rank
                            </p>

                            <div className=" mt-10 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">

                                <div >

                                    <img
                                        //   src={avatar}
                                        alt="avatar"
                                       className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full
                                       object-cover border-4 lg:border-[6px] border-purple-500 shadow-2xl "
                                    />

                                </div>


                                <div className="flex-1 text-center lg:text-left">

                                    <h1
                                        className="text4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r
                                        from-purple-700 via-violet-600to-pink-500 bg-clip-text text-transparent theme-text"
                                    >
                                        #152
                                    </h1>

                                    <h2 className=" mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-gray-800 theme-text" >
                                        Shivam Pal
                                    </h2>

                                    <div
                                        className=" mt-6 inline-flex items-center gap-3 rounded-full
                                        bg-purple-50 border border-purple-200 px-4 py-2 sm:px-5 sm:py-3 theme-card">

                                        <span
                                            className="w-3 h-3 rounded-fullbg-green-500 animate-pulse"
                                        />

                                        <p className="text-sm sm:text-base font-bold text-purple-700 theme-text-light">
                                            Correct :28/30
                                        </p>

                                    </div>


                                    <p className="mt-6 text-gray-500 text-sm sm:text-base theme-text">
                                        Congratulations! You are among the
                                        Top 10,000 Quiznary Players.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="mt-12">

                <div className="text-center mb-10">

                    <h2
                        className="text-4xl font-black
                        bg-gradient-to-r from-purple-700
                        via-violet-600 to-pink-500
                        bg-clip-text text-transparent"
                    >
                        TOP 3 PLAYERS
                    </h2>

                    <p className="mt-3 text-gray-500">
                        Meet our Quiznary Champions
                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 items-end">

                    <div
                        className="order-2 lg:order-1 rounded-[30px] bg-white shadow-xl border border-gray-200
                        p-5 sm:p-6 lg:p-8 text-center hover:-translate-y-2 duration-300 theme-card">

                        <h1 className="text-5xl sm:text-6xl mb-4 theme-text">🥈</h1>

                        <h2 className="text-3xl sm:text-4xl font-black text-gray-700">#2</h2>

                        <p className="mt-2 text-2xl font-bold theme-text-light">Mohit</p>

                        <p className="mt-2 text-xl sm:text-2xl font-bold theme-text-light">Correct :27/30</p>

                        <p className="mt-2 text-purple-600 font-bold theme-text-light">Time: 05:15</p>

                        <div
                            className="mt-5 inline-block rounded-full bg-gray-100
                            px-4 py-3 sm:px-5 sm:py-2 font-bold theme-card">
                            ₹3000
                        </div>

                    </div>

                    <div
                        className="order-1 lg:order-2 rounded-[35px] bg-gradient-to-r from-purple-300 via-violet-400 to-pink-300 p-[2px]
                        shadow-[0_20px_60px_rgba(147,51,234,.35)] hover:-translate-y-3 duration-300 theme-card">

                        <div className="rounded-[33px] bg-white text-center p-6 sm:p-8 lg:p-10">

                            <div className="text-6xl sm:text-7xl">👑</div>

                            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-purple-700">#1</h2>

                            <p className="mt-4 text-2xl sm:text-3xl font-black">Shivam</p>

                            <p className="mt-3 text-xl font-bold text-purple-700">Correct :28/30</p>
                            <p className="mt-3 text-xl font-bold text-purple-700">Time: 05:10</p>

                            <div
                                className="mt-6 inline-block rounded-full bg-gradient-to-r
                                from-yellow-400 to-orange-500 text-white px-5 py-2 sm:px-7 sm:py-3 font-black shadow-xl">
                                ₹5000
                            </div>

                        </div>

                    </div>

                    <div
                        className="order-3 lg:order-3 rounded-[30px] bg-white shadow-xl border border-gray-200
                        p-8 text-center hover:-translate-y-2
                        duration-300 theme-card">
                        <h1 className="text-6xl mb-4">🥉</h1>

                        <h2 className="text-4xl font-black text-gray-700 theme-text">#3</h2>

                        <p className="mt-4 text-2xl font-bold theme-text-light">Satyam</p>

                        <p className="mt-2 text-purple-600 font-bold theme-text-light">Correct :25/30</p>
                        <p className="mt-2 text-purple-600 font-bold theme-text-light">Time: 05:20</p>

                        <div
                            className="mt-5 inline-block
                            rounded-full bg-gray-100
                            px-5 py-2 font-bold theme-card">
                            ₹2000
                        </div>

                    </div>


                </div>

            </div>

            <div className="mt-14">

                <div className="text-center mb-10">

                    <h2
                        className="text-4xl sm:text-5xl
                        font-black
                        bg-gradient-to-r
                        from-purple-700
                        via-violet-600
                        to-pink-500
                        bg-clip-text text-transparent theme-text"
                    >
                        GLOBAL RANKING
                    </h2>

                    <p className="mt-3 text-gray-500 text-lg theme-text-lg">
                        Top Quiznary Players Around The World
                    </p>

                </div>

                <div
                    className="rounded-[35px]
                    border border-purple-100
                    bg-white shadow-2xl overflow-hidden theme-card">

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[950px] theme-text">

                            <thead>

                                <tr
                                    className="bg-gradient-to-r
                                    from-purple-700
                                    via-violet-600
                                    to-pink-500 text-white"
                                >

                                    <th className="px-8 py-6 text-left">
                                        Rank
                                    </th>

                                    <th className="px-8 py-6 text-left">
                                        Player Name
                                    </th>

                                    <th className="px-8 py-6 text-left">
                                        Correct
                                    </th>

                                    <th className="px-8 py-6 text-left">
                                        Prize
                                    </th>

                                    <th className="px-8 py-6 text-left">
                                        Time
                                    </th>

                                </tr>

                            </thead>

                            <tbody>


                                {players.slice(0, visiblePlayers).map((item,index)=>(

                                    <tr
                                        key={index}
                                        className="border-b hover:bg-purple-50 hover:shadow-lg duration-300">

                                        <td className="px-8 py-6 font-black text-lg text-purple-700">
                                            #{index+1}
                                        </td>

                                        <td className="px-8 py-6">

                                            Player   {item.userId?.fullName}

                                        </td>

                                        <td className="px-8 py-6 font-semibold">
                                            Correct : {item.correct}/30
                                        </td>


                                        <td className="px-8 py-6 font-bold text-green-600">
                                            ₹5000
                                        </td>


                                        <td className="px-8 py-6">
                                            {item.timeTaken} sec
                                        </td>

                                    </tr>

                                ))}
                               
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            <div className="flex justify-center mt-10">

                <button
                    className="
                    group
                    inline-flex items-center gap-3
                    px-8 py-3 rounded-full
                    bg-gradient-to-r
                    from-purple-700
                    via-violet-600
                    to-pink-500
                    text-white font-bold
                    shadow-xl
                    hover:scale-105
                    duration-300"
                >

                    View More

                    <ArrowDown
                        size={18}
                        className="
                        group-hover:translate-y-1
                        duration-300"
                    />

                </button>
                <button
onClick={()=>{
   localStorage.removeItem("leaderboard");
   window.location.reload();
}}
>
Reset Leaderboard
</button>

            </div>
        </div>
    </>
  )
}

export default LeaderBoard