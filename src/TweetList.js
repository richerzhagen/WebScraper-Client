import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";

class TweetItem extends Component {

  getLeftStyle = () => {
    return {
    //   textDecoration: this.props.item.active ? "none" : "line-through",
      display: "inline-block",
    //   cursor: "pointer",
      float: "left",
    };
  };
  getRightStyle = () => {
    return {
    //   textDecoration: this.props.item.active ? "none" : "line-through",
      display: "inline-block",
    //   cursor: "pointer",
      float: "right",
    };
  };

//   handleToggle(_id) {
//     this.props.toggleUrl(_id);
//   }

//   handleDel(_id) {
//     this.props.delUrl(_id);
//   }

  render() {
    // const { _id, url, active } = this.props.item;
    // const { _id, author, content, likes, favourites, retweets } = this.props.item;
    const { author, content, likes, favourites, retweets } = this.props.item;
    return (
      <div style={divStyle}>
        {/* <p style={this.getStyle()} onClick={this.handleToggle.bind(this, _id)}> */}
        <p style={this.getLeftStyle()}>
          {author} : {content}
        </p>
        <p style={this.getRightStyle()}>
          | likes: {likes} | favourites: {favourites} | retweets: {retweets}
        </p>
        {/* <Button
          variant="dark"
          onClick={this.handleDel.bind(this, _id)}
          style={btnStyle}
        >
          Delete
        </Button> */}
      </div>
    );
  }
}

// const btnStyle = {
//   display: "inline-block",
//   cursor: "pointer",
//   float: "right",
// };

const divStyle = {
  height: "60px",
  padding: "10px",
};

class TweetList extends Component {
    render(){
        return this.props.tweets.map((item)=>(
            <h4 key={item._id}>
                <ListGroup.Item as="li" variant="secondary" style={{backgroundColor: "#b2b2b2"}}>
                {/* <TweetItem item={item} toggleUrl={this.props.toggleUrl} delUrl={this.props.delUrl}/> */}
                <TweetItem item={item} />
                </ListGroup.Item>
            </h4>
        ));
    }  
}

export default TweetList;
