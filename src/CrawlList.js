import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

class CrawlItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.item.active ? "none" : "line-through",
      display: "inline-block",
      cursor: "pointer",
      float: "left",
    };
  };

  handleToggle(_id) {
    this.props.toggleUrl(_id);
  }

  handleDel(_id) {
    this.props.delUrl(_id);
  }

  render() {
    // const { _id, url, active } = this.props.item;
    const { _id, url } = this.props.item;
    return (
      <div style={divStyle}>
        <p style={this.getStyle()} onClick={this.handleToggle.bind(this, _id)}>
          {url}
        </p>
        <Button
          variant="dark"
          onClick={this.handleDel.bind(this, _id)}
          style={btnStyle}
        >
          Delete
        </Button>
      </div>
    );
  }
}

const btnStyle = {
  display: "inline-block",
  cursor: "pointer",
  float: "right",
};

const divStyle = {
  height: "60px",
  padding: "10px",
};

class CrawlList extends Component {
    render(){
        return this.props.toCrawl.map((item)=>(
            <h4 key={item._id}>
                <ListGroup.Item as="li" variant="secondary" style={{backgroundColor: "#b2b2b2"}}>
                <CrawlItem item={item} toggleUrl={this.props.toggleUrl} delUrl={this.props.delUrl}/>
                </ListGroup.Item>
            </h4>
        ));
    }  
}

export default CrawlList;
