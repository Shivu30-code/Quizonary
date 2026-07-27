export const saveQuizSession = () => {

    localStorage.setItem(

        "quizSession",

        Date.now()

    );

}


export const getQuizSession = () => {

    return Number(

        localStorage.getItem(

            "quizSession"

        )

    );

}



export const clearQuizSession = () => {

    localStorage.removeItem(

        "quizSession"

    );

}