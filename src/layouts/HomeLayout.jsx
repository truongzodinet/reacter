import React from "react"
import Extension from "~/components/Extension"
import HomePage from "~/pages/HomePage"

const HomeLayout = () => {
    return (
        <section>
            <HomePage />
            <Extension />
            <p>[Home Layout]</p>
        </section>
    )
}

export default HomeLayout
