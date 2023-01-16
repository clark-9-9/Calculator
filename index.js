const btn = document.querySelectorAll('button')
const output = document.querySelector('.output')
const previous = document.querySelector('.previous-output')
const current = document.querySelector('.current-output')


btn.forEach( (key) => {
    // console.log(key)

    key.addEventListener('click', function(e) {
         
        // let button = this.innerText
        // current.innerHTML += button
        
        let button = key.innerText
        
        if(button === "AC") { 
            current.innerText = '';
            previous.innerText = '';
            return;
    
        }
    
        if(button === "DEL") {
            current.innerText = current.innerText.substr(0, current.innerText.length - 1);
            return;
    
        }

        if(button === "=") {
            previous.innerText = eval(current.innerText);
            current.innerHTML = '';
        }
    
        else {
            current.textContent += button;
            return previous.innerText = '';
        }
    
        // console.log(button) 
        // console.log(key)



    });
})