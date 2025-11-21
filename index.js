
const btn = document.getElementById('btn');
const input = document.getElementById('search');
const showdata = document.getElementById('showdata');


btn.addEventListener('click', () => {
  const term = input.value.toLowerCase(); 
  showdata.innerHTML = '';                

  
  fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      
      const results = data.filter(hero => hero.name.toLowerCase().includes(term));

      if (results.length > 0) {
        
        results.forEach(hero => {
          showdata.innerHTML += `
            <div class="hero">
              <img src="${hero.img}" alt="${hero.name}" style="width:300px;">
              <h2>${hero.name}</h2>
              <p>${hero.des}</p>
              
            </div>
          `;
        });
      } else {
        
        showdata.innerHTML = '<p>No hero found!</p>';
      }
    })
    .catch(() => {
      
      showdata.innerHTML = '<p>Error loading data!</p>';
    });
});










