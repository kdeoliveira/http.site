const helpDisplay = () => (
    <div>
        kevindeoliveira.com, version 1.0.1(debug) ({navigator.userAgent})<br/>
These shell commands are defined internally.

        <ul style={{
            listStyle: "none",
            margin: "0 0",
            padding: "0"
        }}>
            <li>cd:&#9;change directory</li>
            <li>ls:&#9;display files/directories</li>
            <li>mkdir:&#9;create directory</li>
            <li>cat:&#9;read file</li>
            <li>clear:&#9;clear screen</li>
        </ul>
    </div>
)

export default helpDisplay;