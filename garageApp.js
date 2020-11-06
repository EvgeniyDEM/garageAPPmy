if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

btn.onclick=function(){
	createSocket();
}; 


function createSocket(){
	var sock;
	sock = new WebSocket("ws://192.168.1.1:8081");

	sock.onopen=function () {
		sock.send('чего-то отправляем');
	}


	sock.onmessage = function(event) {									// обработчик входящих сообщений
	  	let obj = JSON.parse(event.data);
	};
	
	sock.onerror=function(e){ //не срабатывает
		alert("WS not response");
	}
	sock.onclose=function(e){										//Можно реализовать автопереподключение
		console.log(e.code);
		//againOpen();
	}
}
