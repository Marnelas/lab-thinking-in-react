import React, { Component } from 'react';

class Search extends Component {
  constructor (){
    super()
    this.state ={
      search: "",
      inStock: false
    }
  }
   handleStateChanged = e =>{
let {name,value,checked, type} = e.target

value = type == "checkbox" ? checked : value;

// if(e.target.checked != undefined){
//   console.log("por aqui cambio")
// }else{
//   console.log("por aqui me quedo igual")
// }
console.log(value)
     this.setState({
       [name]: value
     })
   }
   
   render() {
    return (
      <div>
        <h2 className="search-title">Search</h2>
        <form>
          <input
            type="text"
            name="search"
            onChange={this.handleStateChanged}
            value={this.state.search}
          />
          <br />
          <br />
          <label> Only show products on Stock
            <input
              type="checkbox"
              name="inStock"
              onChange={this.handleStateChanged}
              checked={this.state.inStock}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;