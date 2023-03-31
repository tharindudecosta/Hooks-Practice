import React,{Component} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {

    static contextType = ThemeContext;
    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme? light : dark;
        console.log(this.context);
        return (
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Context app</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;