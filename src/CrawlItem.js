import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export class CrawlItem extends Component {
    getStyle=()=>{
        return {
            textDecoration:this.props.item.active ? 'none' : 'line-through',
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px'
        }
    }

    render() {
        const {_id, url, active} = this.props.item;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={active==="true" ? true : false} onChange={this.props.toggleActive.bind(this, _id)}
                    />{' '}
                    {url}
                    <button onClick={this.props.delUrl.bind(this, _id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default CrawlItem
