import React from 'react';
import { Button, } from 'semantic-ui-react';

const MenuList = ({menus, deleteMenu}) => (
  <div>
    <br />
    { menus.map( menu => 
    <div>
      <h2>{menu.name}</h2>
      <Button>View Menu</Button>
      <Button>Edit</Button>
      <Button onClick={() => deleteMenu(menu.id)}>Delete</Button>
    </div>
      )
    }
  </div>
)

export default MenuList;