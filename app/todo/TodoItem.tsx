"use client"
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

/*
    <Suspense fallback={<div>Require Params</div>}>
        <TodoItemWithLoadingSearchParams>
          <TodoItem id={id} />
        </TodoItemWithLoadingSearchParams>
    </Suspense>

 */
const TodoPlaceholder = () => {
    return <div>Loading...</div>

}
export const TodoItemWithLoadingSearchParams = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    if (!id) return <TodoPlaceholder/>;
    return <Suspense fallback={<TodoPlaceholder/>}>
        <TodoItem id={id}/>
    </Suspense>
}
export const TodoItem = (props: { id: string; }) => {
    const { data } = useSuspenseQuery({
        queryKey: ["todo", props.id],
        queryFn: () => fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}`).then((res) => res.json())
    });
    return <div>todo: {data.title}</div>
}
