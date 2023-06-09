import React,{Component} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Booklist extends Component {
    static contextType = ThemeContext

    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme? light : dark;
        return (
            <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
            <ul>
                <li style={{background:theme.ui}}>Way of Kings</li>
                <li style={{background:theme.ui}}>Fellowship of the ring</li>
                <li style={{background:theme.ui}}>City of bones</li>
                <li style={{background:theme.ui}}>The Final empire</li>
            </ul>
            </div>
        );
    }
}
 
export default Booklist;