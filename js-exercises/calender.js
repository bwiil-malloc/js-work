const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE
if(choice==='January'){
	h1.textContent='January';
}else if(choice==='February'){
	h1.textContent='February';
}else if(choice==='March'){
	h1.textContent='March';
}else if(choice==='April'){
	h1.textContent='April';
}else if(choice==='May'){
	h1.textContent='May';
}else if(choice==='June'){
	h1.textContent='June';
}else if(choice==='July'){
	h1.textContent='July';
}else if(choice==='August'){
	h1.textContent='August';
}else if(choice==='September'){
	h1.textContent='September';
}else if(choice==='October'){
	h1.textContent='October';
}else if(choice==='November'){
	h1.textContent='November';
}else if(choice==='December'){
	h1.textContent='December';
}else{
	h1.textContent='January';
};

let days=31
if(choice==='April'||
	choice==='June'||
	choice==='September'||
	choice==='November'){
	days=30;
}else if(choice==='February'){
	days=28;
}else{
	days=31;
};

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, 'January');
