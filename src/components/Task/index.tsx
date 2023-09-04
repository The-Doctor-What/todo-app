import {Icon} from "@/components";
import {useState} from "react";
import {sendNotification} from "@/utils/notifications";

export type TaskTypes = {
    task: any,
    preview?: any
}

export default function TaskComponent({task, preview}: TaskTypes) {
    const classes = {
        complete: "bg-zinc-800 hover:bg-zinc-700",
        noComplete: "bg-zinc-700 hover:bg-zinc-600"
    }

    const [_task, setTask] = useState(task)
    const [modeClass, setModeClass] = useState(_task.mode ? classes.complete : classes.noComplete)
    const [modeButton, setModeButton] = useState(_task.mode ? "square-check" : "square")

    async function taskComplete() {
        _task.mode = !_task.mode
        setTask(_task)
        setModeButton(_task.mode ? "square-check" : "square")
        setModeClass(_task.mode ? classes.complete : classes.noComplete)
        if (preview) return
        const response = localStorage.getItem("tasks")
        if (!response) localStorage.setItem("tasks", JSON.stringify([]));
        const tasks = response ? JSON.parse(response) : [];
        for (const task of tasks) {
            if (task.title == _task.title) {
                task.mode = _task.mode
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function deleteTask() {
        const response = localStorage.getItem("tasks")
        if (!response) return localStorage.setItem("tasks", JSON.stringify([]))
        const tasks = JSON.parse(response);

        const updatedTasks = tasks.filter((task: { title: any; }) => task.title !== _task.title);
        sendNotification("success", "Task deleted")
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    return (
        <div className="flex flex-row w-96 gap-3 items-center justify-center">
            <button type="button" onClick={taskComplete}
                    className={`${modeClass} flex flex-row w-80 p-3 justify-between rounded `}>
                <div className="flex flex-row gap-2 items-center min-h-min">
                    <Icon name={_task.customIcon?.name || "list-check"} group={_task.customIcon?.group || "solid"}/>
                    <p>{_task.title}</p>
                </div>
                <p><Icon name={modeButton} group="regular"/></p>
            </button>
            {!preview && (<button type="button" onClick={deleteTask} className={`${modeClass} p-3 rounded`}><Icon name="trash"/></button>)}
        </div>
    )
}