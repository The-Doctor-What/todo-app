import {Icon} from "@/components";

export type ButtonsTypes = {
    icon?: string,
    iconGroup?: string,
    execute: any,
    children: any,
    className?: any
    type?: any
}

export default function Button({icon, iconGroup, execute, children, className, type}: ButtonsTypes) {
    return (
        <button onClick={execute} type={type || "button"}
                className={`bg-zinc-800 p-2 rounded hover:bg-zinc-700 ${className || ""}`}>
            {icon && (<Icon name={icon} group={iconGroup || "solid"}/>)} {children}
        </button>
    )
}