import {Icon} from "@/components";

export type NotificationTypes = {
    notification: any
}

export default function Notification({notification}: NotificationTypes) {
    function removeNotification(id: any) {
        const response = localStorage.getItem("notifications")
        if (!response) localStorage.setItem("notifications", JSON.stringify([]));
        const notifications = response ? JSON.parse(response) : [];
        const updatedNotifications = notifications.filter((notification: { id: any; }) => notification.id !== id);
        localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    }

    return (
        <div className="w-80 bg-zinc-800 rounded flex flex-row items-center justify-between p-3 text-center">
            <div>
                {notification.type == "error" && (<Icon name="triangle-exclamation" className="text-red-400"/>)}
                {notification.type == "success" && (<Icon name="thumbs-up" className="text-green-400"/>)}
                {notification.type == "info" && (<Icon name="info"/>)}
            </div>
            <p>
                {notification.text}
            </p>
            <button type="button" onClick={() => removeNotification(notification.id)}><Icon name="xmark"/></button>
        </div>
    )
}