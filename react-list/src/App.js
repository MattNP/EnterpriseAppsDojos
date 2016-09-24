import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'

var Hola = React.createClass({
  
  getInitialState: function () {
    return {
      initialItems: [
        "Elefante",
        "Jirafa",
        "Caballo",
        "Pavo real",
        "Gato",
        "Paloma",
        "Perro",
        "Ratón",
        "Zarigüeya",
        "Ornitorrinco",
        "Equidna",
        "Estrella de mar"
      ],
      items: []
    }
  },
  
  componentWillMount: function() {
    this.setState({
      items: this.state.initialItems
    });
  },
  
  filterList: function(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item) {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      items: updatedList
    })
  },
  
  stateDelete:function(element,e) {
    var list = this.state.items;
    var index = list.indexOf(element.props.itemText);
    list.splice(index,1);
    this.setState({items:list});
    
    var completeList = this.state.initialItems;
    if(completeList.length>list.length){
      var index = completeList.indexOf(element.props.itemText);
      completeList.splice(index,1);
    }
    this.setState({initialItems:completeList});
  },
  
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.filterList} />
        <List items={this.state.items} delete={this.stateDelete}/>
      </div>
    );
  }
});

var List = React.createClass({
  paint:function(item){
    return(
      <li key={item}>
        <div>
          <ListItem itemText={item} delete={this.props.delete} />
        </div>
      </li>
    );
  },
  render:function(){
    return(
      <ul>{this.props.items.map(this.paint)}</ul>
    );
  }  
});

export default Hola;