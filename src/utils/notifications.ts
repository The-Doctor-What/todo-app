export function sendNotification(type: any, text: any) {
    const notification = {
        id: new Date().getTime(),
        type,
        text
    }
    const response = localStorage.getItem("notifications")
    if (!response) localStorage.setItem("notifications", JSON.stringify([]));
    const notifications = response ? JSON.parse(response) : [];
    notifications.push(notification)
    localStorage.setItem("notifications", JSON.stringify(notifications));
}