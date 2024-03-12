import { Counter } from "./Counter";
import { Suspense } from "react";
import { TodoItem } from "./TodoItem";

export const dynamic = "force-static";


export default function Page({ searchParams }: { searchParams: { id: string } }) {
    const { id } = searchParams
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <TodoItem id={id}/>
            </Suspense>
            <Counter/>
        </div>
    )
}
