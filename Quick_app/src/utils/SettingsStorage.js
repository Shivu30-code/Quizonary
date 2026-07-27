//===========================
// LANGUAGE
//===========================

export const saveLanguage = (language) => {

    localStorage.setItem(

        "language",

        JSON.stringify(language)

    );

};


export const getLanguage = () => {

    return (

        JSON.parse(

            localStorage.getItem(

                "language"

            )

        ) || "English"

    );

};


//===========================
// NOTIFICATION
//===========================

export const saveNotificationStatus = (

    status

) => {

    localStorage.setItem(

        "notificationStatus",

        JSON.stringify(status)

    );

};


export const getNotificationStatus = () => {

    return (

        JSON.parse(

            localStorage.getItem(

                "notificationStatus"

            )

        ) ?? true

    );

};


//===========================
// DARK MODE
//===========================

export const saveDarkMode = (status) => {

    localStorage.setItem(
        "darkMode",
        JSON.stringify(status)
    );

    if (status) {

        document.documentElement.classList.add(
            "dark"
        );

    }
    else {

        document.documentElement.classList.remove(
            "dark"
        );

    }

}


export const getDarkMode = () => {

    return (

        JSON.parse(

            localStorage.getItem(

                "darkMode"

            )

        ) ?? false

    );

};


//===========================
// DEACTIVATE ACCOUNT
//===========================

// export const deactivateAccount = () => {

//     localStorage.setItem(

//         "accountStatus",

//         JSON.stringify(

//             "DEACTIVATED"

//         )

//     );

// };


// export const getAccountStatus = () => {

//     return (

//         JSON.parse(

//             localStorage.getItem(

//                 "accountStatus"

//             )

//         ) || "ACTIVE"

//     );

// };