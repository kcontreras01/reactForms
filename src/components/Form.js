import React, {Component} from 'react'

class Form extends Component {
  constructor() {
      super()
      this.state = {
          firstName: '',
          lastName: '',  
          friendly: true,
          gender: ''          
      }

      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    	type === 'checkbox' ?
    		this.setState({[name]: checked}) : this.setState({ [name]: value});
  }
  
  render() {
      return (
          <form>
              <input type="text" value={this.state.firstName} placeholder="FirstName" name="firstName" onChange={this.handleChange}/>  
              <input type="text" value={this.state.lastName} placeholder="LastName" name="lastName" onChange={this.handleChange}/>  
              <h1>{this.state.firstName}</h1>
              <h1>{this.state.lastName}</h1> 

              <textarea value={"here"} onChange={this.handleChange}/>
              <input 
              	type="checkbox"
              	checked={this.state.friendly}
              	name="friendly" 
              	onChange={this.handleChange}/>
              	Is Friendly?

              <input 
              	type="radio"
              	name="gender"
              	value="male" 
              	checked={this.state.gender === 'male'}
              	onChange={this.handleChange}/>
              	Male

              <input 
              	type="radio"
              	name="gender"
              	value="female" 
              	checked={this.state.gender === 'female'}
              	onChange={this.handleChange}/>
              	Female

          </form>
      )
  }
}

export default Form