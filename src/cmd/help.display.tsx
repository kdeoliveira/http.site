const helpDisplay = () => (
    <div>
        GNU bash, version 5.0.17(1)-release (x86_64-pc-linux-gnu)
These shell commands are defined internally.  Type `help' to see this list.

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