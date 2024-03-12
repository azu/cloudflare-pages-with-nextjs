"use client"
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
export const TodoItemWithQuery = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    if (!id) {
        return <div>Invalid ID</div>
    }
    return <TodoItem id={id}/>
}
export const TodoItem = (props: { id: string; }) => {
    const { data } = useSuspenseQuery({
        queryKey: ["todo", props.id],
        queryFn: () => fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}`).then((res) => res.json())
    });
    return <div>todo: {data.title}</div>
}
