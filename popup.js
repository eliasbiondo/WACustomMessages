const addBtn = document.querySelector('#addBtn');
const targetsList = document.querySelector('#targetsList')

let names = [];
/* let counter = 1; */

addBtn.onclick = function (element) {
    const name = document.querySelector('#name');
    const nameValue = name.value;

    if (!nameValue || nameValue.replace(/\s/g, '').length < 1 ) {
      window.alert('Please enter a valid contact or group name!')
    } else if (names.length < 5) {
      
      names.push(`'${nameValue}'`);

      const p = document.createElement('p');
      p.innerHTML = `${nameValue}`
      targetsList.appendChild(p)

      name.value = ''

    } else {
      window.alert('You can only add 5 contact or group names!')
    }
}



const removeRepeat = document.querySelector('#removeOneTime')
const addRepeat = document.querySelector('#addOneTime')
const repeatTimes = document.querySelector('#repeat-n-times')

let counter = 1;

removeRepeat.onclick = function(element) {
  if (counter <= 1) {
    window.alert("You can't set repeat times to 0!")
  } else {
    counter -= 1;
    repeatTimes.innerHTML = `${counter}`
  }
}

addRepeat.onclick = function(element) {
  if (counter >= 5) {
    window.alert("You can't set repeat times more than 5!")
  } else { 
    counter += 1;
    repeatTimes.innerHTML = `${counter}`
  }
}

const sendMessagesBtn = document.querySelector('#send-messages')
sendMessagesBtn.onclick = function(element) {

        let message = document.querySelector('#message').value

        if (names.length < 1) {
          window.alert('Please add at least one contact or group name!')
        } else if (!message || message.replace(/\s/g, '').length < 1 ) {
          window.alert('Please enter a valid message!')
        } else {

          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            
            chrome.tabs.executeScript(
              tabs[0].id,
              { 
                code: `

                names = []
                message = "${message}"
                counter = ${counter};

                `,

              },
              );

            names.forEach(name => {
              chrome.tabs.executeScript(
                tabs[0].id,
                { 
                  code: `

                  names.push(${name});

                  `,

                },
                );
            })

                chrome.tabs.executeScript(
                  tabs[0].id,
                  { 
                    code: `
  
                    console.log(names)
  
                    `,
  
                  },
                  );

              chrome.tabs.executeScript(
                tabs[0].id,
                { 
                  file: './script.js',

                },
                );

            })
        }
          
};
