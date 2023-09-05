export function sendNotification(type: any, text: any) {
    const notification = {
        id: new Date().getTime(),
        type,
        text
    }

    const response = localStorage.getItem("notifications");
    const notifications = response ? JSON.parse(response) : [];

    const updatedNotifications = [notification, ...notifications].slice(0, 8);

    localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
}