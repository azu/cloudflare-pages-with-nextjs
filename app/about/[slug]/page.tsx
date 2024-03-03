export async function generateStaticParams() {

    // 1000 pages
    const dummyPosts = Array.from({ length: 1000 }, (_, i) => ({ slug: `test${i}` }));
    return dummyPosts.map((post) => ({
        slug: post.slug,
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: any) {
    const { slug } = params
    return <h1>{slug}</h1>;
}
