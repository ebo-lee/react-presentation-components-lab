import React from 'react';

// class SimplerComponent extends React.Component {
//     constructor(props) {
//         super(props)
//     }

    // handleClick = (e) => {
    //     console.log(e)
    // }
    
//     render() {
//         return (
//             <div onClick={this.handleClick}>I am just happy</div>
//         )
//     }
// }

// handleClick = e => {
//     console.log("I am just happy")
// }

const SimplerComponent = (props) => <div onClick={props.handleClick}>I am just happy</div>

export default SimplerComponent