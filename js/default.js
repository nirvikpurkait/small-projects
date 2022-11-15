const projectHeading = [
  'age-calculator',
  'credit-card-validation-form',
  'expenses-chart-component',
  'intro-section-with-dropdown-navigation',
  'QR-code-challenge'
]

const projectImageSrc = [
  'https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/14185268/pexels-photo-14185268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/13743846/pexels-photo-13743846.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/12997440/pexels-photo-12997440.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/14186492/pexels-photo-14186492.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
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
