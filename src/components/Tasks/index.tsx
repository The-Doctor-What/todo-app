import {NewTask, Task} from "@/components";
import {useEffect, useState} from "react";

export type TasksTypes = {
    creator: any
}

export default function Tasks({creator}: TasksTypes) {
    const [tasks, setTasks] = useState<any>([])

    useEffect(() => {
        const response = localStorage.getItem("tasks")
        if (!response) localStorage.setItem("tasks", JSON.stringify([]));
        const tasks = response ? JSON.parse(response) : [];
        return setTasks(tasks)
    });

    return (
        <section className="bg-zinc-900 p-5 rounded-lg flex flex-col gap-3">
            {tasks ? tasks.map((task: any) => <Task task={task}/>) : ""}
            <NewTask creator={creator}/>
        </section>
    )
}