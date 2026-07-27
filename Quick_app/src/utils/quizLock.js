//Lock Quiz


export const lockQuiz = () => {


    localStorage.setItem(

        "quizLocked",

        "true"

    );


};



//Check Lock


export const isQuizLocked = () => {


    return (

        localStorage.getItem(

            "quizLocked"

        ) === "true"

    );


};


//Remove Lock


export const clearQuizLock = () => {


    localStorage.removeItem(

        "quizLocked"

    );


};