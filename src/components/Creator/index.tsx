import {Button, Icon, Task} from "@/components";
import {useState} from "react";

export type CreatorTypes = {
    close: any
}

export default function Creator({close}: CreatorTypes) {
    const inputClass = "bg-zinc-800 w-96 p-2 rounded hover:bg-zinc-700"

    const [taskName, setTaskName] = useState("Default Text")
    const [iconGroup, setIconGroup] = useState("solid")
    const [iconName, setIconName] = useState("list-check")

    function changeIconGroup(group: any) {
        setIconGroup(group)
    }

    function create(e: any) {
        e.preventDefault()
        const task = {
            title: taskName,
            mode: false,
            customIcon: {
                name: iconName,
                group: iconGroup
            }
        }
        const response = localStorage.getItem("tasks")
        if (!response) localStorage.setItem("tasks", JSON.stringify([]));
        const tasks = response ? JSON.parse(response) : [];
        for (const _task of tasks) {
            if (task.title == _task.title) {
                return alert("Error")
            }
        }
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks));
        alert("Success")
        close()
    }

    return (
        <section className="absolute w-full h-full flex flex-col items-center justify-center z-10 bg-black/25 cursor-pointer" onClick={close}>
            <form className="bg-zinc-900 p-5 rounded flex flex-col gap-5 items-center cursor-auto" onClick={(e) => e.stopPropagation()}>
                <div className="absolute w-96 flex justify-end ">
                    <button className="text-xl" onClick={close}>
                        <Icon name="xmark"/>
                    </button>
                </div>
                <div className="text-xl text-center">
                    <h2>Create new task</h2>
                </div>
                <div>
                    <p>Task</p>
                    <input type="text" className={inputClass} onChange={(e: any) => setTaskName(e.target.value)} required placeholder="Add Task from JustAll ToDo"/>
                </div>
                <div>
                    <p>Custom Icon</p>
                    <input type="text" className={inputClass} onChange={(e: any) => setIconName(e.target.value)} required placeholder="list-check"/>
                </div>
                <div className="w-full">
                    <p>Custom Icon Group</p>
                    <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                        <Button execute={() => changeIconGroup("solid")}>Solid</Button>
                        <Button execute={() => changeIconGroup("regular")}>Regular</Button>
                        <Button execute={() => changeIconGroup("brands")}>Brands</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Preview</p>
                    <Task preview={true} task={{title: taskName, mode: false, customIcon: {name: iconName, group: iconGroup}}}/>
                </div>
                <Button execute={(e: any) => create(e)} icon="plus" type="submit">Create</Button>
            </form>
        </section>
    )
}