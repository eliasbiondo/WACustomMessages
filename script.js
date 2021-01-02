console.log(testando)

var interval = 1000;
var promise = Promise.resolve();
names.forEach(function (name) {
    promise = promise.then(function () {
        function openChat() {

            contactElement = document.querySelector(`[title='${name}']`)
            mouseEvent = document.createEvent('MouseEvent');
            mouseEvent.initEvent('mousedown', true, true);
            contactElement.dispatchEvent(mouseEvent)
            
          }
        
        openChat()

        return new Promise(function (resolve) {
            setTimeout(resolve, interval);
    });
  });
});

promise.then(function () {
  console.log('Loop finished.');
});

names.forEach(function (name) {
    promise = promise.then(function () {
        function openChat() {

            contactElement = document.querySelector(`[title='${name}']`)
            mouseEvent = document.createEvent('MouseEvent');
            mouseEvent.initEvent('mousedown', true, true);
            contactElement.dispatchEvent(mouseEvent)
            
          }
        
        openChat()

        function sendMessage() {
            counter = 2

            for (i = 0; i < counter; i++) { 
                messageBox = document.querySelector('[contenteditable="true"][data-tab="6"]');
                event = document.createEvent("UIEvents");
                messageBox.innerHTML = `${message}`;
                event.initUIEvent("input", true, true, window, 1);
                messageBox.dispatchEvent(event);

                var eventFire = (MyElement, ElementType) => { 
                    var MyEvent = document.createEvent("MouseEvents"); 
                    MyEvent.initMouseEvent 
                     (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
                    MyElement.dispatchEvent(MyEvent); 
                }; 

                eventFire(document.querySelector('span[data-icon="send"]'), 'click');
            } 
        }

        sendMessage();

        return new Promise(function (resolve) {
            setTimeout(resolve, interval);
    });
  });
});

promise.then(function () {
  console.log('Loop finished.');
});