$(document).ready(function(){
	createSocket();
}); 

/////////////////////////////////////
if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

var sock;
function createSocket(){
	// создать подключение
	sock = new WebSocket("ws://192.168.1.3:8080");

	sock.onopen=function () {
		sock.send('чего-то отправляем');
	}


	sock.onmessage = function(event) {									// обработчик входящих сообщений
	  	let obj = JSON.parse(event.data);
	};
	
	sock.onerror=function(e){ //не срабатывает
		//console.log("Сервак сцуко сдох");
	}
	sock.onclose=function(e){										//Можно реализовать автопереподключение
		//console.log(e);
		//againOpen();
	}
}
