//Get Leaderboard

export const getLeaderboard = () => {

    const data = localStorage.getItem(
        "leaderboard"
    );

    return data
        ? JSON.parse(data)
        : [];

};


//Save Leaderboard

export const saveLeaderboard = (
    data
) => {

    localStorage.setItem(
        "leaderboard",
        JSON.stringify(data)
    );

};


//Clear Leaderboard

export const clearLeaderboard = () => {

    localStorage.removeItem(
        "leaderboard"
    );

};


//Sort Leaderboard

export const sortLeaderboard = (
    users
) => {

    return users.sort((a, b) => {

        //Correct Answers

        if (
            b.correct !==
            a.correct
        ) {

            return (
                b.correct -
                a.correct
            );

        }

        //Time Taken

        return (
            a.timeTaken -
            b.timeTaken
        );

    });

};


//Generate Rank

export const generateRank = (users) => {

    if (users.length === 0) {

        return [];
    }

    let rank = 1;

    users[0].rank = 1;

    for (

        let i = 1;

        i < users.length;

        i++

    ) {

        const current = users[i];

        const previous = users[i - 1];


        if (

            current.correct ===

            previous.correct &&

            current.timeTaken ===

            previous.timeTaken

        ) {

            current.rank =

                previous.rank;

        }

        else {

            rank = i + 1;

            current.rank = rank;

        }

    }


    return users;

};

//Update Leaderboard

export const updateLeaderboard = (
    quizData
) => {

    let leaderboard =
        getLeaderboard();


    leaderboard.push(
        quizData
    );


    leaderboard =
        sortLeaderboard(
            leaderboard
        );


    leaderboard =
        generateRank(
            leaderboard
        );


    saveLeaderboard(
        leaderboard
    );


};