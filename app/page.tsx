'use client'
import Link from "next/link";
import { Suspense, use } from "react";

const loader = async () => {
    return fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo').then(res => res.json());
}
const Time = (props: { datetime: Promise<{ utc_datetime: string }> }) => {
    const time = use(props.datetime);
    return <div>{time.utc_datetime}</div>
}
const Home = async () => {
    const time = loader();
    return (
        <div>
            <h1>Home UP</h1>
            <p>Hello World! This is the Home page</p>
            <p>
                Visit the <Link href="/about/test1">test1</Link> page.
                Visit the <Link href="/about/test2">test2</Link> page.
                <Suspense fallback={<>Loading...</>}>
                    <Time datetime={time}/>
                </Suspense>
            </p>
        </div>
    );
};

export default Home;
