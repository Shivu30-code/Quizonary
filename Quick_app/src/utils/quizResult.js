export const saveResult = (data) => {


    localStorage.setItem(

        "quizResult",

        JSON.stringify(data)

    );


};



export const getResult = () => {


    const data =

        localStorage.getItem(

            "quizResult"

        );


    return data ?

        JSON.parse(data)

        : null;


};



export const clearResult = () => {


    localStorage.removeItem(

        "quizResult"

    );


};