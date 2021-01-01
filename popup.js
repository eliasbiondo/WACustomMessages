const addBtn = document.querySelector('#addBtn');
const targetsList = document.querySelector('#targetsList')

let names = [];
let message = '';

addBtn.onclick = function (element) {
    const name = document.querySelector('#name');
    const nameValue = name.value;

    if (!nameValue || nameValue.replace(/\s/g, '').length < 1 ) {
      window.alert('Please enter a valid contact or group name!')
    } else if (names.length < 5) {
      
      names.push(`${nameValue}`);

      const p = document.createElement('p');
      p.innerHTML = `${nameValue}`
      targetsList.appendChild(p)

      name.value = ''

      message = document.querySelector('#message').value

    } else {
      window.alert('You can only add 5 contact or group names!')
    }
}


const sendMessagesBtn = document.querySelector('#send-messages')

sendMessagesBtn.onclick = function(element) {


    let interval = 5000;
    let increment = 1;

    names.forEach(name => {

        let runner = setTimeout(() => {
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: `
                    contactElement = document.querySelector("[title='${name}']")
                    mouseEvent = document.createEvent('MouseEvent');
                    mouseEvent.initEvent('mousedown', true, true);
                    contactElement.dispatchEvent(mouseEvent)

                ` });
          });
        }, interval * increment);

        increment = increment + 1;



    })

    
};


