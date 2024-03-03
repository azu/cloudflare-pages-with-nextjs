import Link from "next/link";

const Home = async () => {
    const time = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo').then(res => res.json());
    return (
        <div>
            <h1>Home UP</h1>
            <p>Hello World! This is the Home page</p>
            <p>
                Visit the <Link href="/about/test">test</Link> page.
                Visit the <Link href="/about/test2">test2</Link> page.
                {time.utc_datetime}
            </p>
        </div>
    );
};

export default Home;
