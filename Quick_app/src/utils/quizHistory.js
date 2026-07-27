//Save Quiz History

export const saveQuizHistory = (quizData) => {

    const oldHistory = JSON.parse(

        localStorage.getItem("quizHistory")

    ) || [];


    oldHistory.push(quizData);


    localStorage.setItem(

        "quizHistory",

        JSON.stringify(oldHistory)

    );

};


//Get Quiz History

export const getQuizHistory = () => {

    const data = JSON.parse(

        localStorage.getItem("quizHistory")

    );


    return data || [];


};


//Clear Quiz History

export const clearQuizHistory = () => {

    localStorage.removeItem(

        "quizHistory"

    );


};