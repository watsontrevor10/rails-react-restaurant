import React from 'react';
import axios from 'axios';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm';
import { Container, } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    menus: [],
    items: [],
  }

  componentDidMount() {
    axios.get('/api/menus')
     .then( res => {
       this.setState({ menus: res.data, })
     })
     .catch( err => {
       console.log(err)
     })
  }

  addMenu = (name) => {
    axios.post('/api/menus', { name })
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: [...menus, res.data], })
      })
      .catch( err => {
        console.log(err)
      })
  } 

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( m => {
          if (m.id === id)
            return res.data
          return m
        })
        this.setState({ menus, })
      })
  }

  deleteMenu = (id) => {
  
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state 
        this.setState({ menus: menus.filter(t => t.id !== id), })
      })
  }

  render() {
    return (
      <Container>
        <h1>Test</h1> 
        <MenuForm addMenu={this.addMenu} updateMenu={this.updateMenu} /> 
        <MenuList menus={this.state.menus} deleteMenu={this.deleteMenu} items={this.state.items} />    
      </Container>
    )
  }
}

export default App;