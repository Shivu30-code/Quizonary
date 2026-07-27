// Quiz Started Time

export const saveStartTime = () => {

    localStorage.setItem(

        "quizStart",

        Date.now()

    );

};


//Get Started Time

export const getStartTime = () => {


    return Number(

        localStorage.getItem(

            "quizStart"

        )

    );


};


//Remove

export const clearStartTime = () => {


    localStorage.removeItem(

        "quizStart"

    );


};