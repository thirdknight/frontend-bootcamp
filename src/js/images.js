export const images = [
  {
    id:1,
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo voluptatibus quia ad? Tempora, commodi!',
    url: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    id:2,
    name: 'Jane Doe',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo voluptatibus quia ad? Tempora, commodi!',
    url: 'https://randomuser.me/api/portraits/women/11.jpg'
  },
  {
    id:3,
    name: 'Steve Smith',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo voluptatibus quia ad? Tempora, commodi!',
    url: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
  {
    id:4,
    name: 'Sara Smith',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo voluptatibus quia ad? Tempora, commodi!',
    url: 'https://randomuser.me/api/portraits/women/12.jpg'
  }
]

export const generateListInstructors = (arg) => {
  let listInstructors ='';
  for(let i = 0; i < arg.length; i++) {
    listInstructors += `
    <div class="col-md-6 col-lg-3">
      <div class="card bg-light">
        <div class="card-body text-center">
          <img src=${arg[i].url} class="rounded-circle mb-3" alt=${arg[i].name}/>
          <h3 class="card-title"> ${arg[i].name}</h3>
          <p class="card-text">${arg[i].description}</p>
          <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
          <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
          <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
          <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
        </div>
      </div>  
    </div>
    `
            
  }
  return listInstructors
}