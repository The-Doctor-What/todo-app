import {Icon} from "@/components";

export type NewTaskTypes = {
    creator: any
}

export default function NewTaskComponent({creator}: NewTaskTypes) {
    return (
        <>
            <button onClick={creator}
                className="bg-zinc-800 flex flex-row w-96 p-3 justify-center rounded border-dashed border-2 hover:bg-zinc-700">
                <Icon name="plus"/>
            </button>
        </>
    )
}