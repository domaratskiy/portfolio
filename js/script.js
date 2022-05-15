let humburger = document.querySelector('.burger');
let Mymenu = document.querySelector('.menu');

Mymenu.style.display = 'none';
humburger.onclick = () =>  Mymenu.style.display == 'none' ? Mymenu.style.display = 'block' : Mymenu.style.display = 'none';


function hideMenuScript(){
   Mymenu.style.display = 'none'; 
};
 

let nameGulp = document.querySelector('.webSkills a[data-name~="name-gulp"]');
let nameJs = document.querySelector('.webSkills a[data-name~="name-js"]');
let nameHtml = document.querySelector('.webSkills a[data-name~="name-html"]');
let nameCss = document.querySelector('.webSkills a[data-name~="name-css"]');
let nameSass = document.querySelector('.webSkills a[data-name~="name-sass"]');


setTimeout( () => {
	addStyle(nameHtml, `translateY(0)`);
},500);
setTimeout( () => {
	addStyle(nameJs, `translateY(0)`);
	addStyle(nameCss, `translateY(0)`);
},1000);
setTimeout( () => {
	addStyle(nameGulp, `translateY(0)`);
	addStyle(nameSass, `translateY(0)`);
},1500);


function addStyle(name, value){
	name.style.transform = value; 
}

let section2_text = document.querySelector('.myText__text');


setTimeout( () => {
	section2_text.style.opacity = 1;	
},1500);


let myCityTime = document.querySelector('.date');


function zero_first_format(value)
{
	if (value < 10)
	{
		value='0'+value;
	}
	return value;
}


function date_time()
	{
		var current_datetime = new Date();
		var day = zero_first_format(current_datetime.getDate());
		var month = zero_first_format(current_datetime.getMonth()+1);
		var year = current_datetime.getFullYear();
		var hours = zero_first_format(current_datetime.getHours());
		var minutes = zero_first_format(current_datetime.getMinutes());
	

		return `<div>${hours}:${minutes}</div><div>${day} ${month} ${year}г</div>` ;

		
	}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
myCityTime.innerHTML = date_time();

console.log(myCityTime);