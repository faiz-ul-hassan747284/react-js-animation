import React from "react";
class Bubble extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            height:1,
            width:1,
            rateOfGrowth:Math.floor(10*Math.random()),
            left:Math.floor(100*Math.random()),
            bottom:Math.floor(100*Math.random()),
        }
    }
    render() {
        return        <div style={{height:this.state.height+'px', right:this.state.left+'%', bottom:this.state.bottom+'%',width:this.state.width+'px',background:'red',borderRadius:'100px',borderColor:"blue",borderStyle:'solid',borderWidth:'2px',position:'absolute'}}>
        </div>
    }
    componentDidMount() {
        setInterval(this.grow.bind(this),500)
    }
    grow(){
        if (this.state.height<100){
            this.setState({
                height:this.state.height+this.state.rateOfGrowth,
                width:this.state.width+this.state.rateOfGrowth
            }
            )
        }else{
            this.setState({
                height:0,
                width:0,
                opacity:0,
                rateOfGrowth:0,
            });
            this.props.props()
        }
    }

}
export default Bubble