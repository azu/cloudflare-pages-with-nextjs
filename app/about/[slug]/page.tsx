import { useState } from "react";

export async function generateStaticParams() {
    // 1000 pages
    const dummyPosts = Array.from({ length: 2 }, (_, i) => ({ slug: `test${i}` }));
    return dummyPosts.map((post) => ({
        slug: post.slug,
    })).concat([{ slug: "index" }])
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: any) {
    const { slug } = params
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{slug}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
