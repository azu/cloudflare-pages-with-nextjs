import { HTMLAttributes } from "react";

export const Content = (props: React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}
