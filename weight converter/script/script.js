const input = document.querySelector('#input');
const kiloGram = document.querySelector('#kilo-gram');
const lbs = document.querySelector('#lbs');

kiloGram.addEventListener('click', Kilograms)
lbs.addEventListener('click', pounds)

// console.log(input)
function Kilograms(e){
    
    if (input.value == NaN || input.value == ''){
        document.querySelector('.label').classList.toggle('active')

    }
    else{
        const output = document.createElement('h3');
        output.classList = 'result';
        const text = document.createTextNode(`Your weight in Kilogram (KG) is ${(input.value) *2.205}`);
        output.appendChild(text)

        const form = document.querySelector('form');
        const buttons = document.querySelector('.buttons');
        
        form.insertBefore(output, buttons)
        
        kiloGram.style.display = 'none';
        lbs.style.display = 'none';
        input.style.display = 'none'
        input.value = '';
        
        setTimeout(() => {
            output.style.display = 'none'
               
          kiloGram.style.display = 'block'
          lbs.style.display = 'block'
          input.style.display = 'block'

        
        }, 7000)
    }

   
};



function pounds(e){
    
    if (input.value == NaN || input.value == ''){
        document.querySelector('.label').classList.toggle('active')
    }
    else{
        const output = document.createElement('h3');
        output.classList = 'result';
        const text = document.createTextNode(`Your weight in Pounds (lbs) is ${(input.value) / 2.205}`);
        output.appendChild(text)

        const form = document.querySelector('form');
        const buttons = document.querySelector('.buttons');
        
        form.insertBefore(output, buttons)
        
        kiloGram.style.display = 'none'
        lbs.style.display = 'none'
        input.style.display = 'none'
        input.value = '';
        
        setTimeout(() => {
            output.style.display = 'none'
               
          kiloGram.style.display = 'block';
          lbs.style.display = 'block';
          input.style.display = 'block';
        
        }, 7000)
    }

   
};
