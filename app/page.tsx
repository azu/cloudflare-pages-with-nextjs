import Link from "next/link";

const Home = async () => {
    return (
        <div>
            <h1>Home UP</h1>
            <p>Hello World! This is the Home page</p>
            <p>
                Visit the <Link href="/about/?slug=test1">test1</Link> page.
                Visit the <Link href="/about/?slug=test2">test2</Link> page.
                Visit the <Link href="/about/?slug=dynamic_ok">Dynamic ok</Link> page.
            </p>
        </div>
    );
};

export default Home;
