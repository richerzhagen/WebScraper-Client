import React, {Component} from 'react';
import CrawlItem from "./CrawlItem";
import ListGroup from "react-bootstrap/ListGroup";

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
