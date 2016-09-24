import React, {Component} from 'react';

var ListItem = React.createClass({
    render:function(){
        return(
            <div>
                <button onClick={this.props.delete.bind(this.props.itemText,this)}>x</button>
                <label>{this.props.itemText}</label>
            </div>
        )
    }
});

export default ListItem;