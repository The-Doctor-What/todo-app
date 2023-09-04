import React from "react";
import Head from "next/head";

export type HeadTypes = {
    title?: string
}

export default function HeadComponent({title}: HeadTypes) {
    const _title = `${title ? `${title} | ` : ``} ${process.env.NEXT_PUBLIC_TITLE || `Web Site`}`

    return (
        <Head>
            <title>{_title}</title>

            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}