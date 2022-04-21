/**
 * Define Global Variables
 * 
*/
let sectionsList = document.querySelectorAll('section');
const ulList = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
const mainEl = document.querySelector('main');

//End Global Variables
const createSection = function () {
   const secEl = document.createElement('section');
   const divEL = document.createElement('div');
   const h2El = document.createElement('h2');
   const pEl = document.createElement('p');
   const p2El = document.createElement('p');
   
   // section attr
   secEl.setAttribute('id', `section${sectionsList.length + 1}`);
   secEl.setAttribute('data-nav', `section ${sectionsList.length + 1}`);
   
   // div atrr
   divEL.setAttribute('class', 'landing__container');
   
   //h2 text 
   h2El.textContent = `section ${sectionsList.length + 1}`;
   
   // p text
   pEl.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`;
   p2El.textContent = `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`;

   // render section
   divEL.appendChild(h2El);
   divEL.appendChild(pEl);
   divEL.appendChild(p2El);
   secEl.appendChild(divEL);
   mainEl.appendChild(secEl);
   
   sectionsList = document.querySelectorAll('section');
}

// build the nav
const createLinks = function () {
   sectionsList.forEach((section) => {
      const sectionAttr = section.getAttribute('data-nav');
      const sectionId = section.getAttribute('id');
      const liEl = document.createElement('li');
      const anchorEl = document.createElement('a');
      
      //Setting up the menu__link
      anchorEl.setAttribute('href', `#${sectionId}`);
      anchorEl.textContent = sectionAttr;
      anchorEl.setAttribute('class', 'menu__link');
      
      // rendering the links 
      liEl.appendChild(anchorEl);
      fragment.appendChild(liEl);
   })

   return fragment
}


// Render sections 
const renderSections = function () {
   createSection();
   ulList.appendChild(createLinks());
}


// Add class 'active' to section when near top of viewport
const addActiveClass = function () {
   const anchorsList = document.querySelectorAll('a.menu__link')
   
   sectionsList.forEach(section => {
      const sectionPosition = section.getBoundingClientRect().top
      const dataNavValue = section.getAttribute('data-nav')
      
      if (sectionPosition >= 0 && sectionPosition <= 100) {
         section.classList.add('active')
         
         anchorsList.forEach((link) => {
            link.textContent === dataNavValue ? link.classList.add('active') : link.classList.remove('active')
         })
         
      } else {
         section.classList.remove('active')
      }
   })
}

renderSections();
window.addEventListener('scroll', addActiveClass)
document.querySelector('#add-section').addEventListener('click', (e) => {
   e.preventDefault();
   
   ulList.textContent = ''
   
   renderSections();
})
