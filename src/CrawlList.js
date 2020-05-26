import React, {Component} from 'react';
import CrawlItem from "./CrawlItem";
// import PropTypes from 'prop-types';

class CrawlList extends Component {
 
    render(){
        return this.props.toCrawl.map((item)=>(
            <h3 key={item._id}>
                <CrawlItem item={item} toggleActive={this.props.toggleActive} delUrl={this.props.delUrl}/>
            </h3>
        ));
    }  
}

// // PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired
// }

export default CrawlList;
