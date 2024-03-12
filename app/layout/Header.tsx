import { HTMLAttributes } from "react";

export const Header = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props}>
            <h1>Header</h1>
        </div>
    )
}
