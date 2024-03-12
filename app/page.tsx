
import { TodoList } from "./TodoList";
import { Suspense } from "react";

const Home = async () => {
    return (
        <div>
            <h1>Home UP</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <TodoList/>
            </Suspense>
        </div>
    );
};

export default Home;
