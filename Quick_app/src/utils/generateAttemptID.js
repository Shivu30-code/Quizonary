export const generateAttemptID = () => {

    const randomNumber = Math.floor(

        100000 + Math.random() * 900000

    );


    return (

        "QUIZ-" +

        Date.now() + "-" +

        randomNumber

    );


};