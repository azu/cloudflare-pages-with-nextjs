"use client"
import { useSuspenseQuery } from "@tanstack/react-query";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const TodoItem = (props: { id: string; }) => {
    const { data } = useSuspenseQuery({
        queryKey: ["todo", props.id],
        queryFn: () => fetcher(`https://jsonplaceholder.typicode.com/todo/${props.id}`),
    });
    return <div>todo: {data.title}</div>
}
