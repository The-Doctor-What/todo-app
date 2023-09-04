import React from "react";
import {Head} from "@/components";

export type LayoutTypes = {
    title?: string,
    children: React.ReactNode;
    className?: string
}

export default function Layout({title, children, className}: LayoutTypes) {
    return (
        <>
            <Head title={title}/>
            <main className={className || ""}>
                {children}
            </main>
        </>
    )
}