import React from "react"
import Extension from "~/components/Extension"
import HiHi from "~/pages/HiHi"

const DefaultLayout = () => {
    return (
        <section>
            <HiHi />
            <Extension />
            <p>[Default Layout]</p>
        </section>
    )
}

export default DefaultLayout
