var responses = {
  greeting: "Hello! How can I help you today?",
  defination: "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.",
  extension:".py",
  answer: "object-oriented programming,structured programming,functional programming",
  capital: "New Delhi",
  farewell: "Goodbye! Have a great day!",
  default: "I'm not sure how to respond to that. Can you please rephrase?",
};

function sendMessage() {

  var userInput = document.getElementById('userInput').value;

  document.getElementById('userInput').value = '';

  displayMessage('user', userInput);

  var botResponse = getBotResponse(userInput);

  setTimeout(function() {
    displayMessage('bot', botResponse);
  }, 500);
}

function displayMessage(sender, message) {
  var chatBox = document.getElementById('chatBox');
  var newMessage = document.createElement('p');
  newMessage.className = sender;
  newMessage.textContent = message;
  chatBox.appendChild(newMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
  
  userInput = userInput.toLowerCase();

  if (userInput.includes('hello') || userInput.includes('hi')) {
    return responses.greeting;
  } else if (userInput.includes('what is python language?')){
      return responses.defination;
  } else if (userInput.includes('what is the extension of python?')){
      return responses.extension;
  } else if (userInput.includes('bye') || userInput.includes('goodbye')) {
      return responses.farewell;
  }else if (userInput.includes('Which type of Programming does Python support?')){
    return responses.answer;
  }  else if (userInput.includes('Capital of India')){
    return responses.capital;
  }else {
      return responses.default;
  }
}
