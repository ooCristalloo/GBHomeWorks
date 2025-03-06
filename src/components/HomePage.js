import * as React from "react";

export default function HomePage() {

    const click = (event) => {
        window.location.href = "/about";
    }

    return (
        <div>
            <h1>Главная страница</h1>
            <p onClick={click}>О нас</p>
        </div>
    );
}