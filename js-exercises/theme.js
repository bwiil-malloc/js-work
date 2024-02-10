const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
switch(choice){
	case 'white':
		update('white','black');
		break;

	case 'black':
		update('black','white');
		break;

	case 'purple':
		update('purple','yellow');
		break;

	case 'yellow':
		update('yellow','psychedelic');
		break;

	case 'psychedelic':
		update('psychedelic','purple');	
		break;
	
	default:
		update('white','black');
};

});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
