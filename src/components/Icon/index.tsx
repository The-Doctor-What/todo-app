export type IconTypes = {
    name: any,
    group?: any,
    className?: any
}

export default function Icon({name, group, className}: IconTypes) {
    return <i className={`fa-${group || "solid"} fa-${name} ${className || ""}`}></i>
}