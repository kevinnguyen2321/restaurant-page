import { pageLoad } from "./page-load"
import Sush from './sushi.jpg'
import Veggie from './veggie.jpg'
import Tuna from './tuna.jpg'


export function loadMenu () {
    //Add menu container//
    const content = document.getElementById('content')
    content.innerHTML = ''
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer)

    const menuHeaderContainer = document.createElement('div')
    menuHeaderContainer.classList.add('menu-header-container')
    menuHeaderContainer.textContent = 'Menu'
    menuContainer.appendChild(menuHeaderContainer)
    
    



    //Add images//
    const firstItem = new Image();
  firstItem.src = Sush;
  firstItem.style.width = '250px'
  firstItem.style.height = '250px'
  firstItem.style.paddingTop = '15px'
  

  const secondItem = new Image (); 
  secondItem.src = Veggie;
  secondItem.style.width = '250px'
  secondItem.style.height = '250px'
  

  const thirdItem = new Image ();
  thirdItem.src = Tuna;
  thirdItem.style.width = '250px'
  thirdItem.style.height = '250px'
  


  //Add name of food item//
  const firstDescription = document.createElement('p')
  firstDescription.textContent = 'Nigiri Rolls $12'
  

  const secondDescription = document.createElement('p')
  secondDescription.textContent = 'Veggie rolls $10'

  const thirdDescription = document.createElement('p')
  thirdDescription.textContent = 'Maki rolls $12'

  //Append items to container//
  menuContainer.appendChild(firstItem);
  menuContainer.appendChild(firstDescription)
  menuContainer.appendChild(secondItem)
  menuContainer.appendChild(secondDescription)
  menuContainer.appendChild(thirdItem)
  menuContainer.appendChild(thirdDescription)


}