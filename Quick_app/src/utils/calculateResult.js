export const calculateResult = (

    questionData,
    selectedAnswers

) => {


    let score = 0;

    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    questionData.forEach((question) => {


        if (


            selectedAnswers[question.id]

            ===

            question.correctAnswer


        ) {

            score += question.marks;

            correct++;


        }


        else if (


            selectedAnswers[question.id]


        ) {

            wrong++;

        }


        else {


            unanswered++;


        }


    });


    return {


        score,
        correct,
        wrong,
        unanswered,


    };


}