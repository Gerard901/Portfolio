window.onload = load

function load() {
  profilcontent.style.maxHeight = profilcontent.scrollHeight + 'px'
}

const profilbtn = document.querySelector('#profil')
const resumebtn = document.querySelector('#resume')
const projectsbtn = document.querySelector('#projects')
const contactbtn = document.querySelector('#contact')

const profilcontent = document.getElementById('panel-profil')
const resumecontent = document.getElementById('panel-resume')
const projectscontent = document.getElementById('panel-projects')
const contactcontent = document.getElementById('panel-contact')

window.addEventListener('resize', () => {
  if (profilbtn.classList.contains('active')) {
    profilcontent.style.maxHeight = profilcontent.scrollHeight + 'px'
  } else if (resumebtn.classList.contains('active')) {
    resumecontent.style.maxHeight = resumecontent.scrollHeight + 'px'
  } else if (projectsbtn.classList.contains('active')) {
    projectscontent.style.maxHeight = projectscontent.scrollHeight + 'px'
  } else if (contactbtn.classList.contains('active')) {
    contactcontent.style.maxHeight = contactcontent.scrollHeight + 'px'
  }
})

profilbtn.addEventListener('click', () => {
  resumecontent.style.maxHeight = null
  projectscontent.style.maxHeight = null
  contactcontent.style.maxHeight = null

  profilbtn.classList.add('active')
  projectsbtn.classList.remove('active')
  resumebtn.classList.remove('active')
  contactbtn.classList.remove('active')

  setTimeout(() => {
    profilcontent.style.maxHeight = profilcontent.scrollHeight + 'px'
  }, 500)
})

resumebtn.addEventListener('click', () => {
  profilcontent.style.maxHeight = null
  projectscontent.style.maxHeight = null
  contactcontent.style.maxHeight = null

  resumebtn.classList.add('active')
  projectsbtn.classList.remove('active')
  profilbtn.classList.remove('active')
  contactbtn.classList.remove('active')

  setTimeout(() => {
    resumecontent.style.maxHeight = resumecontent.scrollHeight + 'px'
  }, 500)
})

projectsbtn.addEventListener('click', () => {
  profilcontent.style.maxHeight = null
  resumecontent.style.maxHeight = null
  contactcontent.style.maxHeight = null

  projectsbtn.classList.add('active')
  profilbtn.classList.remove('active')
  resumebtn.classList.remove('active')
  contactbtn.classList.remove('active')

  setTimeout(() => {
    projectscontent.style.maxHeight = projectscontent.scrollHeight + 'px'
  }, 500)
})

contactbtn.addEventListener('click', () => {
  profilcontent.style.maxHeight = null
  resumecontent.style.maxHeight = null
  projectscontent.style.maxHeight = null

  contactbtn.classList.add('active')
  projectsbtn.classList.remove('active')
  resumebtn.classList.remove('active')
  profilbtn.classList.remove('active')

  setTimeout(() => {
    contactcontent.style.maxHeight = contactcontent.scrollHeight + 'px'
  }, 500)
})
