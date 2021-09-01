import logo from "../logo.svg";
import folder from "./window/folder.png";
import IconComponent from "./window/Icon.component";
import GridComponent from "./window/Grid.component";
import "./window/Window.css"

const DesktopWindow = () => {


    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: "url('img.jpg') center center",
            backgroundSize: "contain"
        }}>
            DESKTOP WINDOW
            <GridComponent>
                <IconComponent icon={folder}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={folder}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={folder}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
                <IconComponent icon={logo}>
                    Test Label 1
                </IconComponent>
            </GridComponent>
        </div>
    )
}

export default DesktopWindow;