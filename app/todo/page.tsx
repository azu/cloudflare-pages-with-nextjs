import { Counter } from "./Counter";
import { Suspense } from "react";
import { TodoItemWithLoadingSearchParams } from "./TodoItem";

export const dynamic = "force-static";
export default function Page() {
    return (
        <div>
            <Suspense fallback={<div>Require Params</div>}>
                <TodoItemWithLoadingSearchParams />
            </Suspense>
            <Counter/>
        </div>
    )
}
