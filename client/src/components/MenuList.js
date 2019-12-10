import React from 'react';
import MenuItems from './MenuItems';
import { Button, Icon } from 'semantic-ui-react';

const MenuList = ({menus, deleteMenu, items}) => (
  <div>
    <br />
    { menus.map( menu => 
    <div>
      <h1>{menu.name}</h1>
      <MenuItems  key={menu.id} deleteMenu={deleteMenu} {...items}/>
      <br />
      <Button 
      icon
      color="red"
      size="tiny"
      style={{ marginLeft: "15px" }}
      // onClick={() => deleteMenu(props.id)}
    ><Icon name="trash" /></Button> 
    </div>
      )
    }
  </div>
)

export default MenuList;