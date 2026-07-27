// Save Quiz Start Time

export const saveQuizStartTime = () => {

    localStorage.setItem(

        "quizStart",

        Date.now()

    );

}


//Get Quiz Start Time

export const getStartTime = () => {

    return Number(

        localStorage.getItem(

            "quizStart"

        )

    );

}


//Remove Quiz Time

export const clearQuizStartTime = () => {

    localStorage.removeItem(

        "quizStart"

    );

}