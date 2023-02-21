export const items = [
  {
    id: 1,
    name: 'Que aprenderas',
    link: 'learn'
  },
  {
    id: 2,
    name: 'Preguntas',
    link: 'question'
  },
  {
    id: 3,
    name: 'Intructores',
    link: 'instructors'
  },
]

export const generateListItems = (arg) => {
  let listItems ='';
  for(let i = 0; i < arg.length; i++) {
    listItems += `<li class="nav-item">
                    <a href=#${arg[i].link} class="nav-link">
                      ${arg[i].name}
                    </a>
                  </li>`
  }
  return listItems;
}
