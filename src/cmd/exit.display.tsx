import memz from "../MEMZ.webp"

const exitDisplay = () => (
    <div style={{
        width: "100vw",
        height: "100vh",
        background: "#0000A3aa",
        zIndex: 999,
        position: "absolute",
        top: 0,
        left: 0


    }}>
        <img src={memz} alt="none" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: " translate(-50%, -50%)"
        }} onClick={() => {
            window.history.back()
        }} />
    </div>
)

export default exitDisplay;