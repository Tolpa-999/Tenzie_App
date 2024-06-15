import React from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        function watchWidth() {
            console.log("Updated sucessfully")
            setWindowWidth(() => this.window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function () {
            console.log("removed sucessfully")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    return (
        <h1>Window Width: {windowWidth}</h1>
    )
}