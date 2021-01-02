const addBtn = document.querySelector('#addBtn');
const targetsList = document.querySelector('#targetsList')

let names = [];

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


const sendMessagesBtn = document.querySelector('#send-messages')




sendMessagesBtn.onclick = function(element) {

          console.log(names)
          let message = document.querySelector('#message').value
          console.log(message)

          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            
            chrome.tabs.executeScript(
              tabs[0].id,
              { 
                code: `

                names = []
                message = "${message}"

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
};
