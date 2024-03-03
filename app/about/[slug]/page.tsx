export async function generateStaticParams() {
    const posts = [{ slug: "test" }, { slug: "test2"}]

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: any) {
    const { slug } = params
    return <h1>{slug}</h1>;
}
