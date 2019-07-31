function button() {
	var namesub = document.getElementById('SubmitName').value;
	var url = "https://www.pinterest.com/" + namesub + "/feed.rss/" ;
	
	alert(url);
	if (!namesub) {
		alert('not value');
	}else {
		alert(namesub);
		var xhrName = new XMLHttpRequest(); // инициализируем только что созданный запрос
		xhrName.open("GET", url , true); // определяем параметры для запроса 
		xhrName.onload = function() {
    	console.log(xhrName.readyState + ': ' + xhrName.statusText); // выводим в консоль содержимое свойства
    	alert(xhrName.responseText);
    	}

		xhrName.send();
	}
}


var xhr = new XMLHttpRequest(); // инициализируем только что созданный запрос
xhr.open("GET", "block.json", true); // определяем параметры для запроса 

xhr.onload = function() {
    console.log(xhr.readyState + ': ' + xhr.statusText); // выводим в консоль содержимое свойства
    
//var ContainerJson = '{ "posts": [ { "name": "SEO Review and Reccomendations", "options": { "fixed": "Regular", "budget": 300, "delivery": "Urgent", "posted": "12 minutes ago", "ends": "14d, 23h", "proposals": 0 }, "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no", "category": "Search Engine", "skills": [ { "id":1, "name": ".net-framework" }, { "id":2, "name": "рhp" } ], "client": { "country": "United states", "rating": 4.8 } }, { "name": "SEO Review and Reccomendations", "options": { "fixed": "Regular", "budget": 300, "delivery": "Urgent", "posted": "12 minutes ago", "ends": "14d, 23h", "proposals": 0 }, "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no", "category": "Search Engine", "skills": [ { "id":1, "name": ".net-framework" }, { "id":2, "name": "рhp" } ], "client": { "country": "United states", "rating": 4.8 } } ] }';



//

var allPosts = JSON.parse(xhr.responseText);

for (let k = 0; k < allPosts.posts.length; k++) {
	var argument = allPosts.posts[k];
	

let ContainerPost = document.createElement('div');
ContainerPost.className = 'ContainerPost';
ContainerPost.id = 'ContainerPost';
element2.appendChild(ContainerPost); 

let divtitlePost = document.createElement('div');
divtitlePost.className = 'titlePost';
divtitlePost.id = 'divtitlePost';
ContainerPost.appendChild(divtitlePost);  //Gotovo

let divTopPostFlex = document.createElement('div');
divTopPostFlex.className = 'TopPostFlex';
divTopPostFlex.id = 'divTopPostFlex';
ContainerPost.appendChild(divTopPostFlex);  //Gotovo

let divPostText = document.createElement('div');
divPostText.className = 'PostText';
divPostText.id = 'divPostText';
ContainerPost.appendChild(divPostText);   //Gotovo

let divBottomPostFlex = document.createElement('div');
divBottomPostFlex.className = 'BottomPostFlex';
divBottomPostFlex.id = 'BottomPostFlex';
ContainerPost.appendChild(divBottomPostFlex);  //Gotovo


let divClient = document.createElement('div');
divClient.className = 'Client';
divClient.id = 'Client';
ContainerPost.appendChild(divClient);


let h3Post = document.createElement('h3');
h3Post.innerHTML = argument.name;
divtitlePost.appendChild(h3Post);

let name;
let value;
for (let i = 0; i < 5; i++) {

	let divnameTop = document.createElement('div');
	divnameTop.className = 'options nameTop';
	let divvalueTop = document.createElement('div');
	divvalueTop.className = 'options valueTop';
	

		switch(i) {
	  case 0: {
	  	let divPostElem0 = document.createElement('div');
		divPostElem0.className = 'PostElem';
		divPostElem0.id = 'divPostElem0';
		divTopPostFlex.appendChild(divPostElem0);

		name = Object.keys(argument.options)[0] + ':';
		value = "  " + argument.options.fixed;
		divnameTop.innerHTML = name;
		divvalueTop.innerHTML = value;
		divPostElem0.appendChild(divnameTop);
		divPostElem0.appendChild(divvalueTop);
	  }
	    break;

	  case 1:  {
	  	let divPostElem1 = document.createElement('div');
		divPostElem1.className = 'PostElem';
		divPostElem1.id = 'divPostElem1';
		divTopPostFlex.appendChild(divPostElem1);

	  	name = Object.keys(argument.options)[1] + ':';
		value = argument.options.budget;
		divnameTop.innerHTML = name;
		divvalueTop.innerHTML = value;
		divPostElem1.appendChild(divnameTop);
		divPostElem1.appendChild(divvalueTop);
	  }
	    break;

	  case 2: {
	  	let divPostElem2 = document.createElement('div');
		divPostElem2.className = 'PostElem';
		divPostElem2.id = 'divPostElem2';
		divTopPostFlex.appendChild(divPostElem2);

	  	name = Object.keys(argument.options)[2] + ':';
		value = argument.options.delivery;
		divnameTop.innerHTML = name;
		divvalueTop.innerHTML = value;
		divPostElem2.appendChild(divnameTop);
		divPostElem2.appendChild(divvalueTop);
	  }
	    break;

	  case 3:  {
	  	let divPostElem3 = document.createElement('div');
		divPostElem3.className = 'PostElem';
		divPostElem3.id = 'divPostElem3';
		divTopPostFlex.appendChild(divPostElem3);

	  	name = Object.keys(argument.options)[3] + ':';
		value = argument.options.posted;
		divnameTop.innerHTML = name;
		divvalueTop.innerHTML = value;
		divPostElem3.appendChild(divnameTop);
		divPostElem3.appendChild(divvalueTop);
	  }
	    break;

	  case 4:  {
	  	let divPostElem4 = document.createElement('div');
		divPostElem4.className = 'PostElem';
		divPostElem4.id = 'divPostElem4';
		divTopPostFlex.appendChild(divPostElem4);

	  	name = Object.keys(argument.options)[4] + ':';
		value = argument.options.ends;
		divnameTop.innerHTML = name;
		divvalueTop.innerHTML = value;
		divPostElem4.appendChild(divnameTop);
		divPostElem4.appendChild(divvalueTop);
	  }
	    break;
	} 
}

let divPostElement2 = document.createElement("div");
divPostElement2.className = 'PostElem2';
divPostElement2.id = 'divPostElement2';
divTopPostFlex.appendChild(divPostElement2);

let divOptions = document.createElement('div');
divOptions.className = 'options';
divOptions.innerHTML = argument.options.proposals;
divPostElement2.appendChild(divOptions);

let divOptions2 = document.createElement('div');
divOptions2.className = 'options';
divOptions2.style = 'text-transform: capitalize;padding-left: 1vmin;';
divOptions2.innerHTML = Object.keys(argument.options)[5];
divPostElement2.appendChild(divOptions2);

divPostText.innerHTML = argument.description;

let divCategoryNameBottom = document.createElement('div');
divCategoryNameBottom.className = 'nameBottom';
divCategoryNameBottom.innerHTML = Object.keys(argument)[3] + ':';
divBottomPostFlex.appendChild(divCategoryNameBottom);

let divValueBottom = document.createElement('div');
divValueBottom.className = 'valueBottom';
divValueBottom.innerHTML = argument.category;
divBottomPostFlex.appendChild(divValueBottom);

let divSkillsNameBottom = document.createElement('div');
divSkillsNameBottom.className = 'nameBottom';
divSkillsNameBottom.innerHTML = Object.keys(argument)[4] + ':';
divBottomPostFlex.appendChild(divSkillsNameBottom);

for (let i = 0; i < argument.skills.length; i++) {
	let divValueSkills = document.createElement('div');
	divValueSkills.className = 'valueSkills';
	divValueSkills.innerHTML = argument.skills[i].name;
	divBottomPostFlex.appendChild(divValueSkills);
}

let divNameBottom = document.createElement('div');
divNameBottom.className = 'nameBottom';
divNameBottom.innerHTML = Object.keys(argument)[5] + ':';
divClient.appendChild(divNameBottom);

let divUnited = document.createElement('div');
divUnited.style = 'padding-left: 1vmin;';
divUnited.innerHTML = argument.client.country;
divClient.appendChild(divUnited);

let divvalueRating = document.createElement('div');
divvalueRating.className = 'valueRating';
divvalueRating.innerHTML = argument.client.rating;
divClient.appendChild(divvalueRating);

let img = document.createElement('img');
img.src = 'rating.png';
divClient.appendChild(img);

}

}; 
xhr.send();
