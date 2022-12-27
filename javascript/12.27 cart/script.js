let fruits = [
    {name: 'apple', memo: '빨개요'},
    {name: 'mango', memo: '달달함'},
    {name: 'melon', memo: '맛있음'},
  ];
  
  /*
  for(let i=0; i<fruits.length; i++) {
    let second = `<div class="col">
                  <div class="card" style="width: 18rem;">
                    <img src="img/${fruits[i].name}.jpg" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${fruits[i].name}</h5>
                      <p class="card-text">${fruits[i].memo}</p>
                      <button class="btn btn-primary">담기</button>
                    </div>
                  </div>
                  </div>`;
    // js
    // document.querySelectorAll('.row').insertAdjacentHTML('beforeend', second);
    // jQuery
    $('.row').append(second);
  }*/
  
  fruits.forEach((data) => {
    let second = `<div class="col">
                  <div class="card" style="width: 18rem;">
                    <img src="img/${data.name}.jpg" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${data.name}</h5>
                      <p class="card-text">${data.memo}</p>
                      <button class="btn btn-primary cart">담기</button>
                    </div>
                  </div>
                  </div>`;
  
    $('.row').eq(0).append(second);
  })
  
  $('.cart').on('click', function(e) {
  
    let name = $(e.target).siblings('h5').html();
  
    if(localStorage.getItem('items') != null) {
      
      let isHave; // 과일이 로컬스토리지에 있나 없나를 알려주는 변수 
      let index; // 과일이 로컬스토리지에 있으면 해당 위치를 저장하는 변수 
  
      let temp = localStorage.getItem('items');
      temp = JSON.parse(temp);
  
      //로컬스토리지에 담기를 누른 과일(name)이 있나 없나를 찾아주는 반복
      temp.forEach((data,i) => {
        if(data.name==name){    //해당스토리지에 같은 과일이 있냐없냐
          isHave=true;
          index=i;  //해당 과일이 있는 배열방 위치를 기억
        }
      });
      if(isHave) {
        temp[index].cnt++;  //과일이 존재하면 그 배열방위치에 cnt++
      } else{
        temp.push({'name':name, 'cnt':1}); //
      }
  
    //   temp.push(name);
      
      temp = JSON.stringify(temp);
  
      localStorage.setItem('items', temp);
  
  
    } else {
      localStorage.setItem('items', JSON.stringify([{'name':name, 'cnt':1 }])); /**배열안에 오브젝트 넣음 */
    }
  });
  
  
  
  
  
  // $('.cart').on('click', function(e) {
  //   let name = $(e.target).siblings('h5').html();
  
  //   if(localStorage.getItem('name') != null) {
  //     let temp = JSON.parse(localStorage.name);
  //     temp.push(name);
  //     localStorage.setItem('name', JSON.stringify(temp));
  //   } else {
  //     localStorage.setItem('name', JSON.stringify([name]));
  //   }
  // });
  
  
  let list = localStorage.getItem('items');
  
  list = JSON.parse(list);
  
  list.forEach((data) => {
  
    $('.list').append(`<div>${data.name} : ${data.cnt}</div>`);
  
  });