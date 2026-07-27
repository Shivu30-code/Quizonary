//SAVE


export const saveQuizData = (data) => {


    localStorage.setItem(

        "quizAttempt",

        JSON.stringify(data)

    );


};




//GET


export const getQuizData = () => {


    const data =

        localStorage.getItem(

            "quizAttempt"

        );


    return data ?

        JSON.parse(data)

        : null;


};




//DELETE


export const clearQuizData = () => {


    localStorage.removeItem(

        "quizAttempt"

    );


};




//--------------------------------


//SAVE START TIME


// export const saveStartTime = () => {


//     localStorage.setItem(

//         "quizStartTime",

//         Date.now()

//     );


// };




//GET START TIME


// export const getStartTime = () => {


//     return Number(

//         localStorage.getItem(

//             "quizStartTime"

//         )

//     );


// };




//REMOVE START TIME


// export const clearStartTime = () => {


//     localStorage.removeItem(

//         "quizStartTime"

//     );


// };




//--------------------------------


//SAVE ATTEMPT ID


export const saveAttemptID = (id) => {


    localStorage.setItem(

        "attemptID",

        id

    );


};




//GET ATTEMPT ID


export const getAttemptID = () => {


    return localStorage.getItem(

        "attemptID"

    );


};




//REMOVE ATTEMPT ID


export const clearAttemptID = () => {


    localStorage.removeItem(

        "attemptID"

    );


};