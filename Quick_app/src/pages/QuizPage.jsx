import React, { useEffect, useState } from "react";

import QuizHeader from "../component/quiz/QuizHeader";
import QuizStats from "../component/quiz/QuizStats";
import QuizTimer from "../component/quiz/QuizTimer";
import QuestionCard from "../component/quiz/QuestionCard";
import QuestionPalette from "../component/quiz/QuestionPalette";
import QuizLegend from "../component/quiz/QuizLegend";
import QuestionNavigation from "../component/quiz/QuestionNavigation";
import ResumeQuizPopup from "../component/quiz/ResumeQuizPopup";
import TimeUpPopup from "../component/quiz/TimeUpPopup";
import WarningPopup from "../component/quiz/WarningPopup";
import SubmitPopup from "../component/quiz/SubmitPopup";
import { calculateResult } from "../utils/calculateResult";
import SessionExpired from"../component/quiz/SessionExpired";
import {useNavigate}from "react-router-dom";
import questionData from "../data/questionData"
import{saveQuizData,getQuizData,clearQuizData,
saveAttemptID,getAttemptID,clearAttemptID,}from "../utils/quizStorage";

import{generateAttemptID}from "../utils/generateAttemptID";
import{lockQuiz,isQuizLocked,clearQuizLock}from "../utils/quizLock";
import { saveQuizStartTime,getStartTime,clearQuizStartTime } from "../utils/startTime";
import { saveQuizSession,getQuizSession,clearQuizSession}from "../utils/quizSession";
import {saveQuizHistory}from "../utils/quizHistory";
import {updateLeaderboard,getLeaderboard}from "../utils/leaderboard";
import {addNotification}from "../utils/NotificationStorage";
import { useLocation } from "react-router-dom";
// import API from "../api/axios";
import { submitQuiz } from "../api/axios";

const QuizPage = () => {
  const navigate=useNavigate();
  const {state}=useLocation();
  console.log(state);
  const[currentQuestion,setCurrentQuestion]=useState(0);

  const[selectedAnswers,setSelectedAnswers]=useState({});

  const[reviewQuestions,setReviewQuestions]=useState([]);

  const[visitedQuestions,setVisitedQuestions]=useState([]);

  const[timeLeft,setTimeLeft]=useState(900);

  const[warningCount,setWarningCount]=useState(0);

  const[attemptID,setAttemptID]=useState("");

  const[quizStarted,setQuizStarted]=useState(false);

  const[quizSubmitted,setQuizSubmitted]=useState(false);

  const[quizLocked,setQuizLocked]=useState(false);

  const[showLockScreen,setShowLockScreen]=useState(false);

  const[paymentVerified,setPaymentVerified]=useState(false);

  const[openSubmit,setOpenSubmit]=useState(false);

  const[openResume,setOpenResume]=useState(false);

  const[timeUp,setTimeUp]=useState(false);

  const[openWarning,setOpenWarning]=useState(false);

  const[warningMessage,setWarningMessage]=useState("");

  const[score,setScore]=useState(0);

  const[correctAnswers,setCorrectAnswers]=useState(0);

  const[wrongAnswers,setWrongAnswers]=useState(0);

  const[resultStatus,setResultStatus]=useState("PENDING");

  const[rank,setRank]=useState("N/A");

  const[MAX_WARNING]=useState(3);

  const[sessionExpired,setSessionExpired]=useState(false);

  const[fullscreen,setFullscreen]=useState(false);

  const[internetStatus,setInternetStatus]=useState(true);

  const[copyDetected,setCopyDetected]=useState(false);

  const [pageHidden,setPageHidden]=useState(false);

  const [multipleTabs,setMultipleTabs]=useState(false);

  const [windowMinimized,setWindowMinimized]=useState(false);

  const [developerToolDetected,setDeveloperToolDetected]=useState(false);

  const [pasteDetected,setPasteDetected]=useState(false);

  const [printDetected,setPrintDetected]=useState(false);

  const [saveDetected,setSaveDetected]=useState(false);

  // future

  const [resultGenerated,setResultGenerated]=useState(false);


  const [leaderboardGenerated,setLeaderboardGenerated]=useState(false);

  const [quizResultStatus,setQuizResultStatus]=useState("PENDING");

  const [rewardStatus,setRewardStatus]=useState("PENDING");

  const[transactionID,setTransactionID]=useState("");

  const[reward,setReward]=useState("N/A");

  const question =questionData[currentQuestion];

  const handleNext = ()=>{

    if(
      currentQuestion <
      questionData.length-1
    ){
      setCurrentQuestion(
        currentQuestion+1
      );
    }
  };

  const handlePrevious = ()=>{

    if(currentQuestion>0){

      setCurrentQuestion(

        currentQuestion-1
      );
    }
  };

  const handleAnswerSelect=(option)=>{

    setSelectedAnswers((prev)=>({
      ...prev,
      [question.id]:option,
    }));


  };

  const handleReviewQuestion=()=>{

    if(

      !reviewQuestions.includes(

        question.id
      )

    ){
      setReviewQuestions(

        [
        ...reviewQuestions,
          question.id,
        ]

      );
    }

  };

  useEffect(()=>{

    if(

      !visitedQuestions.includes(

        question.id
      )
    ){

      setVisitedQuestions((prev)=>([
        ...prev,
        question.id,

      ]));

    }


  },[currentQuestion]);

  const getQuestionStatus=(id)=>{

    if(

      question.id===id

    ){
      return "current";

    }

    if(
      reviewQuestions.includes(id)
    ){
      return "review";

    }

    if(
      selectedAnswers[id]
    ){
      return "answered";
    }

    if(

      visitedQuestions.includes(id)

    ){

      return "notAnswered";

    }

    return "notVisited";


  };
  const minutes=Math.floor(timeLeft/60);

  const seconds=String(timeLeft%60).padStart(2,"0");

  useEffect(()=>{

    if(timeLeft===0){

      return;
    }

    const timer=setInterval(()=>{

      setTimeLeft((prev)=>prev-1);

    },1000);

    return()=>clearInterval(timer);

  },[timeLeft]);


  useEffect(()=>{

    if(timeLeft===0){
      setTimeUp(true);
      // Future me
      handleSubmit();
    }
    console.log(timeLeft);

  },[timeLeft]);

  useEffect(()=>{

  saveQuizData({

    attemptID,
    score,

    rank,

    correctAnswers,

    wrongAnswers,

    resultStatus,
    submittedAt:

    Date.now(),

    quizStarted,

    paymentVerified,

    quizLocked,

    quizSubmitted,

    leaderboardGenerated,

    resultGenerated,

    currentQuestion,

    selectedAnswers,

    reviewQuestions,

    visitedQuestions,

    timeLeft,

    warningCount,
    createdAt:Date.now(),


  });


  },[
    currentQuestion,
    selectedAnswers,
    reviewQuestions,
    visitedQuestions,
    timeLeft,
    warningCount,
    attemptID,
    quizStarted,
    quizSubmitted,
    quizLocked,
    paymentVerified,
  ]);

  useEffect(()=>{

  const savedData=getQuizData();

    if(savedData){

      setAttemptID(
        savedData.attemptID
      );

      setQuizStarted(

        savedData.quizStarted

      );

      setPaymentVerified(
        savedData.paymentVerified
      );

      setQuizLocked(
        savedData.quizLocked
      );

      setQuizSubmitted(
        savedData.quizSubmitted
      );

      setCurrentQuestion(
        savedData.currentQuestion
      );

      setSelectedAnswers(
        savedData.selectedAnswers
      );

      setReviewQuestions(
        savedData.reviewQuestions
      );

      setVisitedQuestions(
        savedData.visitedQuestions
      );

      setTimeLeft(
        savedData.timeLeft
      );

      setWarningCount(
        savedData.warningCount
      );


    }

  },[]);

  // 1 baar ka hai

  // const calculateScore=()=>{
  //   let score=0;
  //   questionData.forEach((question)=>{

  //     if(
  //       selectedAnswers[question.id]===question.correctAnswer
  //     ){
  //       score++;
  //     }

  //   });
  //   return score;

  // }
  //2 baar ka hai

  // const calculateScore=()=>{

  //   let score=0;
  //   let correct=0;
  //   let wrong=0;
  //   let notAnswered=0;
  //   questionData.forEach((question)=>{
  //     const answer=selectedAnswers[question.id];
  //     if(!answer){
  //       notAnswered++;
  //       return;
  //     }
  //     if(answer===question.answer){
  //       score+=4;
  //       correct++;
  //     }
  //     else{
  //       wrong++;
  //       score-=1;
  //     }
  //   });
  //   return{
  //     score,
  //     correct,
  //     wrong,
  //     notAnswered,
  //   };

  // }

  // 3 baar ka hai
  // const calculateScore = () => {

  //   const answered = Object.keys(selectedAnswers).length;

  //   const notAnswered =questionData.length -answered;

  //   const correct = 0;

  //   const wrong = 0;

  //   // const score = 0;

  //   const totalTime = 900;

  //   const timeTaken =Math.floor(

  //     (totalTime - timeLeft) / 60

  //   );

  //   return {

  //     answered,

  //     notAnswered,

  //     correct,

  //     wrong,

  //     score,

  //     timeTaken,

  //   };

  // };

  const calculateScore = () => {

    let correct=0;
    let wrong=0;

    questionData.forEach((question)=>{

        const answer=
        selectedAnswers[question.id];

        if(!answer){
            return;
        }

        if(
            answer===question.answer
        ){
            correct++;
        }

        else{
            wrong++;
        }

    });

    const answered=
    correct+wrong;

    const notAnswered=
    questionData.length-answered;

    const score=
    correct*10;

    const totalTime=900;

    const timeTaken=
    totalTime-timeLeft;

    return{

        answered,
        notAnswered,
        correct,
        wrong,
        score,
        timeTaken
    };

};

  // const handleSubmit=()=>{

  //   const result=calculateScore(questionData,selectedAnswers);
  //   setScore(result.score);
  //   setCorrectAnswers(
  //     result.correct
  //   );
  //   setWrongAnswers(
  //     result.wrong
  //   );

  //   setQuizSubmitted(true);

  //   setQuizLocked(true);

  //   lockQuiz();

  //   navigate("/quizSubmitted",{

  //     state:{

  //       score:result.score,

  //       correct:result.correct,

  //       wrong:result.wrong,

  //       attemptID,

  //     }
  //   });  


  // };

  const handleSubmit = async () => {

const result = calculateScore();

const user = JSON.parse(
        localStorage.getItem("user")
    );

    try {

        const response = await submitQuiz({

            userId: user._id,
            attemptID,
            score: result.score,
            correct: result.correct,
            wrong: result.wrong,
            timeTaken: result.timeTaken,

        });

        console.log(response.data);

    } catch (error) {

        console.log(error);

    }

const quizResult = {

attemptID,

answered: result.answered,

notAnswered: result.notAnswered,

review: reviewQuestions.length,

totalQuestions:
questionData.length,

score: result.score,

correct: result.correct,

wrong: result.wrong,

timeTaken:
Math.floor(
result.timeTaken,
),
submittedAt:
new Date().toLocaleString(),

resultStatus:
"PENDING",

rank: currentUser?.rank,

reward:
  currentUser?.rank === 1
    ? "₹5000"
    : currentUser?.rank === 2
    ? "₹3000"
    : currentUser?.rank === 3
    ? "₹2000"
    : "N/A",

};
//LEADERBOARD

updateLeaderboard({

name:

JSON.parse(

localStorage.getItem("user")

)?.fullName ||

"Guest User",


attemptID:

attemptID,


correct:

result.correct,


timeTaken:

result.timeTaken,


reward:

"PENDING",


resultStatus:

"PENDING",


});

// let leaderboard = getLeaderboard();

// leaderboard.push({
//   name:
//     JSON.parse(localStorage.getItem("user"))
//       ?.fullName || "Guest User",

//   attemptID,
//   correct: result.correct,
//   timeTaken: result.timeTaken,
//   reward: "PENDING",
//   resultStatus: "PENDING",
// });

// // Sorting
// leaderboard.sort((a, b) => {
//   if (b.correct !== a.correct) {
//     return b.correct - a.correct;
//   }

//   return a.timeTaken - b.timeTaken;
// });

// // Rank assign
// leaderboard = leaderboard.map((player, index) => ({
//   ...player,
//   rank: index + 1,
// }));

// localStorage.setItem(
//   "leaderboard",
//   JSON.stringify(leaderboard)
// );

// // Current User
// const currentUser = leaderboard.find(
//   (item) => item.attemptID === attemptID
// );
//SAVE HISTORY

saveQuizHistory({

...quizResult,

title:
"Today's Mega Quiz",

});


//Quiz Result Save

localStorage.setItem(

"quizResult",

JSON.stringify(

quizResult

)

);


//Quiz Submitted

setQuizSubmitted(true);


//Quiz Locked

setQuizLocked(true);


//Storage Clear

clearQuizData();

clearQuizStartTime();

clearQuizSession();


//Redirect

navigate(

"/quizSubmitted"

);

};

  useEffect(()=>{
    if(isQuizLocked()){

      setShowLockScreen(true);

    }
  },[]);

  useEffect(()=>{
    setPaymentVerified(true);
  },[]);

  useEffect(()=>{
    if(paymentVerified){
      setQuizStarted(true);
    }

  },[paymentVerified]);

  const handleOpenSubmit=()=>{
    setOpenSubmit(true);
  }

  const handleCloseSubmit=()=>{
    setOpenSubmit(false);
  }

  const handleContinueQuiz=()=>{
    setOpenResume(false);
  };

  const handleRestartQuiz=()=>{

    clearQuizData();
    clearStartTime();
    clearAttemptID();
    clearQuizLock();

    window.location.reload();
  };
  
  const handleClearResponse=()=>{

    const updatedAnswers={
      ...selectedAnswers
    };
    delete updatedAnswers[question.id];
    setSelectedAnswers(updatedAnswers);
  };
  useEffect(()=>{


const savedQuiz=

getQuizData();


if(savedQuiz?.attemptID){


setAttemptID(

savedQuiz.attemptID

);


}

else{


const id=

generateAttemptID();


setAttemptID(id);


}


},[]);

const leaderboard=

getLeaderboard();


const currentUser=

leaderboard.find(

(user)=>

user.attemptID===

attemptID

);


// if(currentUser){

// quizResult.rank=

// currentUser.rank;

// }
//NOTIFICATION

addNotification({

id:Date.now(),

title:

"Quiz Submitted",


message:

"Your Quiz Has Been Submitted Successfully.",


time:

new Date()

.toLocaleTimeString(),


status:

"success",


});
  const handleWarning = (message) => {

    const totalWarning = warningCount + 1;

    setWarningCount(totalWarning);

    setWarningMessage(message);

    setOpenWarning(true);

  // 3 warnings complete

    if(totalWarning >=3){
      setSessionExpired(true);
      handleSubmit();

    }

  };
  useEffect(()=>{

    const handleTabChange=()=>{
      if(document.hidden){
        handleWarning("Please Don't Change Tabs.");
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleTabChange
    );

    return()=>{

      document.removeEventListener(
        "visibilitychange",
        handleTabChange
      );
    };


  },[warningCount]);

  useEffect(()=>{

    const handleOffline=()=>{
      setInternetStatus(false);
      handleWarning("Internet Connection Lost.");
    };

    const handleOnline=()=>{
      setInternetStatus(true);
    };

    window.addEventListener("offline",handleOffline);
    window.addEventListener("online",handleOnline);

    return()=>{

      window.removeEventListener("offline",handleOffline);
      window.removeEventListener("online",handleOnline);
    };


  },[warningCount]);


  useEffect(()=>{
    document.documentElement
    .requestFullscreen()
    .catch(()=>{});
  },[]);

  useEffect(()=>{

    const handleFullscreen=()=>{
      if(!document.fullscreenElement){
        handleWarning("Fullscreen Disabled." );
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreen);

    return()=>{

      document.removeEventListener("fullscreenchange",handleFullscreen);
    };

  },[warningCount]);

  useEffect(()=>{

    const handleRightClick=(e)=>{
      e.preventDefault();
      handleWarning( "Right Click Is Disabled.");
    };
    window.addEventListener("contextmenu",handleRightClick);

    return()=>{
      window.removeEventListener("contextmenu",handleRightClick);
    };

  },[]);

  useEffect(()=>{

    const handleCopy=(e)=>{
      e.preventDefault();
      setCopyDetected(true);
      handleWarning("Copy Is Not Allowed.");
    };
    window.addEventListener("copy",handleCopy);

    return()=>{
      window.removeEventListener("copy",handleCopy);
    };

  },[]);

  useEffect(()=>{


    const handleRefresh=(e)=>{
      e.preventDefault();
      e.returnValue="";
    };
    window.addEventListener("beforeunload",handleRefresh);

    return()=>{
      window.removeEventListener("beforeunload",handleRefresh);
    };

  },[]);

  useEffect(()=>{

    const handlePaste=(e)=>{
      e.preventDefault();
      setPasteDetected(true);
      handleWarning("Paste Is Not Allowed.");
    };
    window.addEventListener("paste",handlePaste);

    return()=>{
      window.removeEventListener("paste",handlePaste);
    };


  },[]);

  useEffect(()=>{

    const handleKeyboard=(e)=>{

      //CTRL + C

      if(e.ctrlKey && e.key==="c")
      {e.preventDefault();
        handleWarning("Copy Disabled");
      }

      //CTRL + V

      if(e.ctrlKey && e.key==="v")
      {e.preventDefault();
        handleWarning("Paste Disabled");
      }

      //CTRL + P

      if(e.ctrlKey && e.key==="p")
      {e.preventDefault();
        handleWarning("Printing Disabled");
      }

      //CTRL + S

      if(e.ctrlKey && e.key==="s")
      {e.preventDefault();
        handleWarning("Save Disabled");
      }

      //CTRL + U

      if(e.ctrlKey && e.key==="u")
      {e.preventDefault();
        handleWarning("View Source Disabled");
      }

      //F12

      if(e.ctrlKey && e.key==="F12")
      {e.preventDefault();
        handleWarning("Developer Tool Disabled");
      }

      //ESC

      if(e.ctrlKey && e.key==="Escape")
      {e.preventDefault();
        handleWarning("Please stay in quiz");
      }

      //CTRL SHIFT I

      if(e.ctrlKey && e.key==="I")
      {e.preventDefault();
        handleWarning("Developer Tool Disabled");
      }

      //CTRL SHIFT J

      if(e.ctrlKey && e.key==="J")
      {e.preventDefault();
        handleWarning("Developer Tool Disabled");
      }

    };
    window.addEventListener("keydown",handleKeyboard);

    return()=>{
      window.removeEventListener("keydown",handleKeyboard);
    };

  },[]);

  useEffect(()=>{


    const handleVisibility=()=>{

      if(document.hidden){
        setWindowMinimized(true);
        handleWarning("Quiz Window Minimized.");
      }
    };

    document.addEventListener("visibilitychange",handleVisibility);

    return()=>{
      document.removeEventListener("visibilitychange",handleVisibility);
    };

  },[]);

  useEffect(()=>{

    const tabID=Date.now();

    localStorage.setItem("activeQuiz",tabID);

    const interval=setInterval(()=>{

      const activeTab=localStorage.getItem("activeQuiz");

      if(String(tabID)!==activeTab)
      {setMultipleTabs(true);
        handleWarning("Multiple Tabs Detected.");
      }
    },1000);
    return()=>{
      clearInterval(
      interval);
    };

  },[]);

  useEffect(()=>{

    const handleHidden=()=>{
      if(document.hidden){
        setPageHidden(true);
        handleWarning("Please Stay In Quiz.");
      }
    };
    document.addEventListener("visibilitychange",handleHidden);

    return()=>{
      document.removeEventListener("visibilitychange",handleHidden);

    };

  },[]);

  useEffect(()=>{

    const threshold =160;
      const detectDeveloperTool=()=>{
      if(
        window.outerWidth -
        window.innerWidth >
        threshold
        ||
        window.outerHeight -
        window.innerHeight >
        threshold

      ){
        setDeveloperToolDetected(true);
        handleWarning("Developer Tool Opened.");
      }
    };


    const interval=setInterval(detectDeveloperTool,2000);

    return()=>{
      clearInterval(interval);
    };

  },[warningCount]);

  useEffect(()=>{

    const data=getQuizData();
    if(data){
      // setOpenResume(true);
    }

  },[]);

  const calculateTime=()=>{

    const startTime=getStartTime();
    if(!startTime){return 900;}

    const currentTime=Date.now();

    const difference=Math.floor(
      (currentTime-startTime)/1000
    );

    const remainingTime=900-difference;
    return remainingTime>0 ?
    remainingTime : 0;

  };

  useEffect(()=>{

    const savedData=getQuizData();

    if(savedData){
      setOpenResume(true);
    }

    else{

      const id=
      generateAttemptID();

      setAttemptID(id);

      saveAttemptID(id);

      saveQuizStartTime();

      setQuizStarted(true);

    }

  },[]);

  useEffect(()=>{

    if(isQuizLocked()){
      setQuizLocked(true);
      return;
    }

  },[]);

  useEffect(()=>{

    if(quizStarted){

      const id=
      generateAttemptID();

      setAttemptID(id);

      saveQuizSession();

      saveQuizStartTime();


    }

  },[quizStarted]);

  // if(quizLocked){

  //   return(

  //     <div
  //       className=" min-h-screen flex items-center justify-center
  //       bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600">

  //       <div
  //         className=" bg-white rounded-3xl p-10 shadow-2xltext-center">


  //         <h1 className=" text-4xl font-bold text-red-600">
  //           QUIZ CLOSED
  //         </h1>

  //         <p className="mt-5 text-gray-600">
  //           You Have Already Attempted
  //           This Quiz.
  //         </p>
          
  //       </div>

  //     </div>


  //   );
  //   if(sessionExpired){

  //     return(<SessionExpired/>);

  //   }

  // }
  if(showLockScreen){

    return(
      <SessionExpired/>
    );
  }

  return (

    <div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700
      to-pink-600 px-5 py-10">

      <div className="max-w-7xl mx-auto">

        <QuizHeader />

        <QuizStats
          currentQuestion={currentQuestion}
          totalQuestions={questionData.length}

          answered={
            Object.keys(selectedAnswers).length
          }
          review={
            reviewQuestions.length
          }
          notAnswered={
            visitedQuestions.length-
            Object.keys(selectedAnswers).length
          }
        />

        <QuizTimer
          minutes={minutes}
          seconds={seconds}
        />

        <QuestionCard

          question={question}
          selectedAnswers={selectedAnswers}
          handleAnswerSelect={
            handleAnswerSelect
          }

        />

        <QuestionNavigation

          handleNext={handleNext}
          handlePrevious={
            handlePrevious
          }
          handleReviewQuestion={
            handleReviewQuestion
          }
          handleClearResponse={
            handleClearResponse
          }
        />

        <QuestionPalette
          questionData={questionData}
          getQuestionStatus={
            getQuestionStatus
          }
          setCurrentQuestion={
            setCurrentQuestion
          }
          handleOpenSubmit={
            handleOpenSubmit
          }
        />
        <QuizLegend />

        <SubmitPopup
          isOpen={openSubmit}
          onClose={handleCloseSubmit}
          onSubmit={handleSubmit}

          answered={
            Object.keys(selectedAnswers).length
          }
          review={
            reviewQuestions.length
          }

          notAnswered={questionData.length-
            Object.keys(selectedAnswers).length
          }
        />
        {/* <ResumeQuizPopup

          isOpen={openResume}
          onContinue={handleContinueQuiz}
          onRestart={handleRestartQuiz}

        /> */}

        <TimeUpPopup
          isOpen={timeUp}  
        />

        <WarningPopup
          isOpen={openWarning}
          warningCount={warningCount}
          message={warningMessage}
          onClose={()=>
            setOpenWarning(false)
          }
        />

      </div>

    </div>

  );
};

export default QuizPage;