import * as React from "react";

export default function AboutPage() {

    const click = (event) => {
        window.location.href = "/";
    }

    return (
        <div>
            <h1>О нас</h1>
            <p onClick={click}>Перейти на главную страницу</p>
        </div>
    );
}