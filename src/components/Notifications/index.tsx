import {Notification} from "@/components";
import {useEffect, useState} from "react";

export default function NotificationsBar() {
    const [notifications, setNotifications] = useState<any>([])

    useEffect(() => {
        const response = localStorage.getItem("notifications")
        if (!response) localStorage.setItem("notifications", JSON.stringify([]));
        const notifications = response ? JSON.parse(response) : [];
        return setNotifications(notifications)
    });

    return (
        <section className="flex flex-col gap-3 absolute right-5 top-5 z-20">
            {notifications ? notifications.map((notification: any) => <Notification notification={notification}/>) : ""}
        </section>
    )
}