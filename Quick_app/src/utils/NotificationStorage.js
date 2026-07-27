//Get Notifications

export const getNotifications = () => {

    const data = localStorage.getItem(
        "notifications"
    );

    return data
        ? JSON.parse(data)
        : [];

};


//Save Notifications

export const saveNotifications = (
    data
) => {

    localStorage.setItem(

        "notifications",

        JSON.stringify(data)

    );

};


//Add Notification

export const addNotification = (
    notification
) => {

    let notifications =

        getNotifications();


    notifications.unshift(

        notification

    );


    saveNotifications(

        notifications

    );

};


//Delete Notification

export const deleteNotification = (
    id
) => {

    const notifications =

        getNotifications().filter(

            (item) =>

                item.id !== id

        );


    saveNotifications(

        notifications

    );

};


//Clear Notifications

export const clearNotifications = () => {

    localStorage.removeItem(

        "notifications"

    );

};

export const markAsRead = (id) => {

    const notifications =
        getNotifications();

    const updated =
        notifications.map((item) =>
            item.id === id
                ? { ...item, read: true }
                : item
        );

    localStorage.setItem(
        "notifications",
        JSON.stringify(updated)
    );
};