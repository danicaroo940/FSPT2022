function sendText(input) {
	let inputString = '';
	switch (input) {
		case 1:
			inputString = 'text-input1';
			break;
		case 2:
			inputString = 'text-input2';
			break;
	};

	const chatContainer = document.getElementById('chat-container');
	const textInput = document.getElementById(inputString);
	const text = textInput.value;

	if (text != '') {
		const message = document.createElement('div');
		switch (input) {
			case 1:
				message.className = 'message-in';
				break;
			case 2:
				message.className = 'message-out';
				break;
		};
		message.innerHTML = text;
		chatContainer.appendChild(message);    
	};

	textInput.value = '';
	textInput.focus();
	chatContainer.scrollTo(0, chatContainer.scrollHeight);
}

function handleKeyPress(e,input){
	const key = e.keyCode || e.which;
		if (key == 13){
			sendText(input);
		}
}