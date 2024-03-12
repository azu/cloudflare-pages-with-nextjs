import { Counter } from "./Counter";
import { Suspense } from "react";
import { TodoItemWithQuery } from "./TodoItem";

export const dynamic = "force-static";
export default function Page() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <TodoItemWithQuery />
            </Suspense>
            <Counter/>
        </div>
    )
}
