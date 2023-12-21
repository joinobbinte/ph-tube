const  fetchData = async(functionName) =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    const data = await res.json()
    const card = await data.data;
    functionName(card)
    
  }

function loadData(data){
     //const {thumbnail,title,  authors, others} = element.data;
    const container = document.getElementById('card-container');
    container.innerHTML = ''
    
 
    

    data.forEach(element => {
        const time = element.others.posted_date;
        const hour = Math.floor((time / 60) / 60);
        
        const minute = Math.floor((time / 60) % 60);
        
        const cardbody = document.createElement('div');
        cardbody.classList='max-h-80'
        cardbody.innerHTML=`
            <div class="card py-10 h-full bg-base-100 shadow-xl">
                    <div class="h-1/2">
                      <img src="${element.thumbnail}" class="h-full w-full"  alt="Shoes" />
                      ${element.others.posted_date ?` <div class=" relative bottom-14 left-20 w-36 p-3 bg-black text-white ">${hour}Hrs ${minute}min ago</div>` : ' '} 
                      
                    </div>
                    <div class="card-body">
                      <div class="flex items-center gap-4">
                        <img src="${element.authors[0].profile_picture}" class="object-cover rounded-full h-6 w-6 " alt="img">
                        <h2>${element.title}</h2>
                      </div>
                      <p>${element.authors[0]. profile_name}<span>${element.authors[0].verified?'<i class="fa-solid fa-check"></i>':''}</span></p>
                      <p>${element.others.views}</p>
                    </div>
                  </div>
        `  
        //cardbody.classList.add("max-h-80")
        container.appendChild(cardbody)
    });

    
    
}

const drawing =() =>{
  const container = document.getElementById('card-container');
    
    container.innerHTML = '';
    container.removeAttribute('class'); 
    container.innerHTML = `
    <h1 class="text-center font-bold text-lg"> Oops!! Sorry, There is no content here</h1>
    `
}


const loadMusic=(data) =>{

  const container = document.getElementById('card-container');
    
    console.log(data);
  data = data.slice(0, 6)
  console.log(data);
  container.innerHTML = ''
  
    data.forEach(element => {
      const time = element.others.posted_date;
      const hour = Math.floor((time / 60) / 60);
      
      const minute = Math.floor((time / 60) % 60);
        const cardbody = document.createElement('div');
        cardbody.classList='max-h-80'
        cardbody.innerHTML=`
            <div class="card h-full bg-base-100 shadow-xl">
            <div class="h-1/2">
            <img src="${element.thumbnail}" class="h-full w-full"  alt="Shoes" />
            ${element.others.posted_date ?` <div class=" relative bottom-14 left-20 w-36 p-3 bg-black text-white ">${hour}Hrs ${minute}min ago</div>` : ' '} 
            
          </div>
                    <div class="card-body">
                      <div class="flex items-center gap-4">
                        <img src="${element.authors[0].profile_picture}" class="object-cover rounded-full h-6 w-6 " alt="img">
                        <h2>${element.title}</h2>
                      </div>
                      <p>${element.authors[0]. profile_name} <span>${element.authors[0].verified?'<i class="fa-solid fa-check"></i>':''}</span></p>
                      <p>${element.others.views}</p>
                    </div>
                  </div>
        `  
        container.appendChild(cardbody)
    });
}


const loadComedy= (data) =>{
  const container = document.getElementById('card-container');
    
    console.log(data);
  data = data.slice(6, 12)
  console.log(data);
  container.innerHTML = ''

    data.forEach(element => {
      const time = element.others.posted_date;
      const hour = Math.floor((time / 60) / 60);
      
      const minute = Math.floor((time / 60) % 60);
        const cardbody = document.createElement('div');
        cardbody.classList='max-h-80'
        cardbody.innerHTML=`
            <div class="card h-full  bg-base-100 shadow-xl">
            <div class="h-1/2">
            <img src="${element.thumbnail}" class="h-full w-full"  alt="Shoes" />
            ${element.others.posted_date ?` <div class=" relative bottom-14 left-20 w-36 p-3 bg-black text-white ">${hour}Hrs ${minute}min ago</div>` : ' '} 
            
          </div>
                    <div class="card-body">
                      <div class="flex items-center gap-4">
                        <img src="${element.authors[0].profile_picture}" class="object-cover rounded-full h-6 w-6 " alt="img">
                        <h2>${element.title}</h2>
                      </div>
                      <p>${element.authors[0]. profile_name} <span>${element.authors[0].verified?'<i class="fa-solid fa-check"></i>':''}</span></p>
                      <p>${element.others.views}</p>
                    </div>
                  </div>
        `  
        container.appendChild(cardbody)
    });
}

const allbtn = () =>{
  fetchData(loadData)
}

const music = ()=>{
  fetchData(loadMusic)
}

const comedy =() =>{
  fetchData(loadComedy)
}
