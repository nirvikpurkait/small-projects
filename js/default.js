const projectHeading = [
  'age-calculator',
  'credit-card-validation-form',
  'expenses-chart-component',
  'intro-section-with-dropdown-navigation',
  'QR-code-challenge'
]

const projectImageSrc = [
  './image/age-calculator.png',
  './image/credit-card-validation-form.jpg',
  './image/expenses-chart-component.jpg',
  './image/intro-section-with-dropdown-navigation.jpg',
  './image/QR-code-challenge.jpg'
]

const projectDetails = {
  projectHeading, projectImageSrc
}

// function for adding div tag with class
const addDiv = (parent, theClass) => {
  let div = document.createElement('div');
  parent.append(div);
  if (theClass == '' || theClass == undefined || theClass == null) {
    return
  }
  else {
    div.classList.add(theClass)
  }
}
// function for adding image tag with class
const addImage = (parent, theClass) => {
  let img = document.createElement('img');
  img.src = ''
  img.alt = ''
  parent.append(img);
  if (theClass == '' || theClass == undefined || theClass == null) {
    return
  }
  else {
    img.classList.add(theClass)
  }
}

// this section adds div inside main
const main = document.querySelector('main');

let noOfDivField = projectHeading.length
for (let i = 1; i <= noOfDivField; i++){
  addDiv(main, 'project')
}

// this section adds image inside project
let project = [...document.querySelectorAll('.project')];
project.forEach(item => {
  addImage(item, 'project-image')
  addDiv(item, 'project-heading')
  item.querySelector('.project-heading').textContent = projectHeading[project.indexOf(item)].split('-').join(' ')
})

// 
let projectImage = [...document.querySelectorAll('.project-image')];

projectImageSrc.forEach(item => {
  projectImage[projectImageSrc.indexOf(item)].src = item
})
