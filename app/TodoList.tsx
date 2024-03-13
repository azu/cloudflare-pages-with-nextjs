"use client";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import Loading from "./loading";

export const TodoListClient = () => {
    if (typeof window === "undefined") return <Loading/>;
    return <TodoList/>
}
export const TodoList = () => {
    const todos = useSuspenseQuery({
        queryKey: ["todos"],
        queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()),
    });
    return (
        <div>
            <ul>
                {todos.data.slice(0, 20).map((todo: any) => (
                    <li key={todo.id}><Link href={`/todo?id=${todo.id}`}>{todo.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}
