import { pageLoad } from "./page-load";
import './style.css';
import { loadMenu } from "./menu";
import Sushi from './home.jpg';
import { loadContact } from "./contact";

const {content,menuTab, homeTab, contactTab } = pageLoad();




(function handleTabClick () {
    menuTab.addEventListener('click', loadMenu )
    homeTab.addEventListener('click', (e) => {
        content.innerHTML = '';
        
        const headerOne = document.createElement('h1');
        headerOne.textContent = 'Sushi Island Restaurant';
        headerOne.classList.add('rest-title')
        content.appendChild(headerOne);

        const para = document.createElement('p');
        para.textContent = 'Welcome to the best sushi restaurant in the world!';
        content.appendChild(para);
        para.classList.add('hello');

        const myImage = new Image();
        myImage.src = Sushi;
        myImage.style.width = '450px';
        myImage.style.height = '450px';
        
        content.appendChild(myImage);

    const aboutUsContainer = document.createElement('div')
    aboutUsContainer.classList.add('about-us-container')
    content.appendChild(aboutUsContainer)

    const aboutUsHeader = document.createElement('h2')
    aboutUsHeader.textContent = 'About Us'
    aboutUsContainer.appendChild(aboutUsHeader)
    const aboutUsPara = document.createElement('p')
    aboutUsPara.textContent = 'We strive to provide the best sushi experience possible. We emphasize customer service and ensure a authenic Japanese experience that focuses on serving the needs of the customer. '
     aboutUsContainer.appendChild(aboutUsPara)
    })

    contactTab.addEventListener('click', loadContact)


    
})()


