// import React, { Component } from "react";
// import Button from "react-bootstrap/Button";

// export class CrawlItem extends Component {

//   getStyle = () => {
//     return {
//       textDecoration: this.props.item.active ? "none" : "line-through",
//       display: "inline-block",
//       cursor: "pointer",
//       float: "left",
//     };
//   };

//   handleToggle(_id) {
//     this.props.toggleUrl(_id);
//   }

//   handleDel(_id) {
//     this.props.delUrl(_id);
//   }

//   render() {
//     const { _id, url, active } = this.props.item;
//     return (
//       <div style={divStyle}>
//         <p style={this.getStyle()} onClick={this.handleToggle.bind(this, _id)}>
//           {url}
//         </p>
//         <Button
//           variant="dark"
//           onClick={this.handleDel.bind(this, _id)}
//           style={btnStyle}
//         >
//           Delete
//         </Button>
//       </div>
//     );
//   }
// }

// const btnStyle = {
//   display: "inline-block",
//   cursor: "pointer",
//   float: "right",
// };

// const divStyle = {
//   height: "60px",
//   padding: "10px",
// };

// export default CrawlItem;
