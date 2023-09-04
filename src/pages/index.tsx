import {Creator, Layout, Notifications, Tasks} from "@/components";
import {Inter} from 'next/font/google'
import {useState} from "react";

const inter = Inter({subsets: ['latin']})

export default function HomePage() {
    const [showCreator, setShowCreator] = useState(false)

    return (
        <Layout
            className={`w-screen min-h-screen flex flex-col justify-center self-center items-center ${inter.className} gap-5 bg-zinc-950 text-white`}>
            <section className="w-100 flex justify-center">
                <h1 className="font-bold text-2xl">{process.env.NEXT_PUBLIC_TITLE || `Web Site`}</h1>
            </section>
            <Tasks creator={() => setShowCreator(true)}/>
            <Notifications/>
            {showCreator && (<Creator close={() => setShowCreator(false)}/>)}
        </Layout>
    )
}