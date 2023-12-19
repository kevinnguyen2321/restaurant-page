import Chef from './chef.jpg'
export function loadContact () {
    const content = document.getElementById('content')
    content.innerHTML = ''
    
    const contactMainContainer = document.createElement('div')
    contactMainContainer.classList.add('contact-main')
    content.appendChild(contactMainContainer)
    
    //Create container for contact//
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')
    contactMainContainer.appendChild(contactContainer)

    //Create contact box//
    
    
    const contactParaOne = document.createElement('h2')
    contactParaOne.textContent = 'Sushi Master';
    contactContainer.appendChild(contactParaOne)

    const contactParaTwo = document.createElement('p')
    contactParaTwo.textContent = '555-695-6900'
    contactContainer.appendChild(contactParaTwo)

    const contactParaThree = document.createElement('p')
    contactParaThree.textContent = 'sushi.master@notfakeemail.com'
    contactContainer.appendChild(contactParaThree)

    const chefPhoto = new Image();
  chefPhoto.src = Chef;
  chefPhoto.style.width = '150px'
  chefPhoto.style.height = '150px'
  contactContainer.appendChild(chefPhoto)


    //Create hours info//

    const hoursContainer = document.createElement('div')
    hoursContainer.classList.add('hours-container')
    contactMainContainer.appendChild(hoursContainer)
    const hoursHeadline = document.createElement('h2')
    hoursHeadline.textContent = 'Hours'
    hoursContainer.appendChild(hoursHeadline)
    const sunday = document.createElement('p')
    sunday.textContent = 'Sunday: 8AM-5PM'
    hoursContainer.appendChild(sunday)

    const monday= document.createElement('p')
    monday.textContent = 'Monday: 9AM-9PM'
    hoursContainer.appendChild(monday)

    const tuesday = document.createElement('p')
    tuesday.textContent = 'Tuesday: 9AM-9PM'
    hoursContainer.appendChild(tuesday)

    const wednesday = document.createElement('p')
    wednesday.textContent = 'Wednesday: 9AM-9PM'
    hoursContainer.appendChild(wednesday)

    const thursday = document.createElement('p')
    thursday.textContent = 'Thursday: 9AM-9PM'
    hoursContainer.appendChild(thursday)

    const friday = document.createElement('p')
    friday.textContent = 'Friday: 9AM-10PM'
    hoursContainer.appendChild(friday)

    const saturday = document.createElement('p')
    saturday.textContent = 'Saturday: 9AM-10PM'
    hoursContainer.appendChild(saturday)
    




}