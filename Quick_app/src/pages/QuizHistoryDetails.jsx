import React from "react";

import {

useLocation

}

from "react-router-dom";


const QuizHistoryDetails=()=>{


const location=

useLocation();


const quiz=

location.state;


return(


<div
className="

min-h-screen

p-5">


<h1
className="

text-4xl

font-bold

mb-10">


Quiz Details


</h1>



<h2>

Attempt ID :

{quiz.attemptID}

</h2>


<h2>

Score :

{quiz.score}

</h2>



<h2>

Correct :

{quiz.correct}

</h2>



<h2>

Wrong :

{quiz.wrong}

</h2>



<h2>

Answered :

{quiz.answered}

</h2>



<h2>

Review :

{quiz.review}

</h2>



<h2>

Time Taken :

{quiz.timeTaken}

</h2>



<h2>

Rank :

{quiz.rank}

</h2>



<h2>

Reward :

{quiz.reward}

</h2>



<h2>

Result Status :

{quiz.resultStatus}

</h2>
<h2>

Reward Claimed :

{quiz.rewardClaimed}

</h2>



</div>


);


};

export default QuizHistoryDetails;