import { Component } from "react";
import { Button } from "../Button";
import './styles.css'
class Toggle extends Component {
    state = {
        isToggleOn: true
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isToggleOn: true
    //     };
    //     this.handleClick = this.handleClick.bind(this);

    // }


    handleClick = () =>{
        this.setState(prevSate => ({
            isToggleOn: !prevSate.isToggleOn
        }));
    }

    render(){
        const {isToggleOn} = this.state;
        return(
            <div>
                <Button  
                    handleOnClick={this.handleClick}
                    btnText={isToggleOn ? 'ON': 'OFF'}  />
            </div>

        );
    }
}
export default Toggle;
