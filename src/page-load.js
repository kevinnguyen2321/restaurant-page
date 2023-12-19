import Sushi from './home.jpg';

export function pageLoad() {
    const content = document.getElementById('content');
    const headerOne = document.createElement('h1')
    const para = document.createElement('p')
    headerOne.textContent = 'Sushi Island Restaurant'
    headerOne.classList.add('rest-title')
    content.appendChild(headerOne)
    
    para.textContent = 'Welcome to the best sushi restaurant in the world!'
    content.appendChild(para)
    para.classList.add('hello');
  
    // Add image//
 const myImage = new Image();
  myImage.src = Sushi;
  myImage.style.width = '450px'
  myImage.style.height = '450px'
content.appendChild(myImage);

    // About us section// 

    const aboutUsContainer = document.createElement('div')
    aboutUsContainer.classList.add('about-us-container')
    content.appendChild(aboutUsContainer)

    const aboutUsHeader = document.createElement('h2')
    aboutUsHeader.textContent = 'About Us'
    aboutUsContainer.appendChild(aboutUsHeader)
    const aboutUsPara = document.createElement('p')
    aboutUsPara.textContent = 'We strive to provide the best sushi experience possible. We emphasize customer service and ensure a authenic Japanese experience that focuses on serving the needs of the customer. '
     aboutUsContainer.appendChild(aboutUsPara)



   // Add header tabs//
   const headerContainer = document.createElement('div');
   headerContainer.classList.add('header-container')

   document.querySelector('body').appendChild(headerContainer);
   
   const homeTab = document.createElement('p')
   homeTab.textContent = 'Home'
   homeTab.classList.add('header')
   
   const menuTab = document.createElement('p')
  menuTab.textContent = 'Menu'
  menuTab.classList.add('header')

  const contactTab = document.createElement('p')
  contactTab.textContent = 'Contact'
  contactTab.classList.add('header')
  
  
  headerContainer.appendChild(homeTab)
  headerContainer.appendChild(menuTab)
  headerContainer.appendChild(contactTab)
  
  
  return {content,menuTab, homeTab, contactTab}
}







