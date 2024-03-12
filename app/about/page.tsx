export const dynamic = "force-static";
import { Counter } from "./Counter";
export default function Page({ searchParams }: { searchParams: { slug: string } }) {
    const { slug } = searchParams
    return (
        <div>
            <h1>{slug}</h1>
            <Counter/>
        </div>
    )
}
