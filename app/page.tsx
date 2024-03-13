"use client";
import React, { Suspense } from "react";
import Loading from "./loading";
import { TodoListClient } from "./TodoList";

const Home = () => {
    return (
        <div>
            <h1>Home UP</h1>
            <Suspense fallback={<Loading/>}>
                <TodoListClient/>
            </Suspense>
        </div>
    );
};

export default Home;
