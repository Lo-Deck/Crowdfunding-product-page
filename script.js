const buttonMenu = document.getElementById('display-menu');
const menuMobile = document.getElementById('menu-mobile');
const bookmark = document.getElementById('bookmark');
const bar = document.getElementById('bar');
const rewardBamboo = document.getElementById('reward-bamboo');
const rewardBlackEdition = document.getElementById('reward-blackEdition');
const buttonMenuProject = document.getElementById('button-menu-project');
const displayOverlay = document.getElementById('display-overlay');
const menuProject = document.getElementById('menu-project');
const buttonCloseProject = document.getElementById('close-project');
const arraySelect = document.getElementsByClassName('select');
const myForm1 = document.getElementById('myForm1');
const myForm2 = document.getElementById('myForm2');
const confirm = document.getElementById('confirm');
const buttonConfirm = document.getElementById('button-confirm');
const spanAmount = document.getElementById('amount');
const spanBackers = document.getElementById('backers');
const bambooEdition = document.getElementById('bamboo-stand-left');
const blackEdition = document.getElementById('black-edition-left');




let amount = 89914;

let backers = 5007;


let widthBar = Math.floor(amount/1000);

console.log(widthBar);

bar.style.width = `${widthBar}%`;



function displayNumber(number){

    let firstNumber= Math.floor(number / 1000);

    let secondNumber = number - (firstNumber * 1000);

    secondNumber = String(secondNumber);

    secondNumber = secondNumber.padStart(3, '0');

    //console.log(`${firstNumber},${secondNumber}`);

    return `$${firstNumber},${secondNumber}`;

};



spanAmount.innerText = displayNumber(amount);

spanBackers.innerText = displayNumber(backers);




let bambooLeft = 101;

let blackEditionLeft = 64;



bambooEdition.innerText = bambooLeft;

blackEdition.innerText = blackEditionLeft;




/*DISPLAY MENU MOBILE*/

buttonMenu.addEventListener('click', () => 
    {

        menuMobile.classList.toggle('hidden');

        buttonMenu.innerHTML = '<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#fff" fill-rule="evenodd" opacity="1"/></svg>' 

        if(menuMobile.classList[2] === 'hidden')
        {

            buttonMenu.innerHTML = '<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>'; 
            
        }
        else
        {

            buttonMenu.innerHTML = '<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#fff" fill-rule="evenodd" opacity="1"/></svg>'; 

        }

    }
);




rewardBamboo.addEventListener('click', () =>
    {

        displayOverlay.classList.remove('hidden');

        menuProject.classList.remove('hidden');


        arraySelect[1].firstElementChild.firstElementChild.classList.add('button-project-click');

        arraySelect[1].firstElementChild.childNodes[3].style.color = '#3CB3AB';

        arraySelect[1].parentElement.style.border = '0.15rem #3CB3AB solid';

    }
); 




rewardBlackEdition.addEventListener('click', () =>
    {

        displayOverlay.classList.remove('hidden');

        menuProject.classList.remove('hidden');

        arraySelect[2].firstElementChild.firstElementChild.classList.add('button-project-click');

        arraySelect[2].firstElementChild.childNodes[3].style.color = '#3CB3AB';

        arraySelect[2].parentElement.style.border = '0.15rem #3CB3AB solid';

    }
); 

 



/*DISPLAY MENU PROJECT*/

buttonMenuProject.addEventListener('click', () =>
    {

        displayOverlay.classList.remove('hidden');

        menuProject.classList.remove('hidden');


        menuMobile.classList.add('hidden');
        
        if(menuMobile.classList[2] === 'hidden')
        {

            buttonMenu.innerHTML = '<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>'; 
            
        }
        else
        {

            buttonMenu.innerHTML = '<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#fff" fill-rule="evenodd" opacity="1"/></svg>'; 

        }

    }
);


buttonCloseProject.addEventListener('click', () =>
    {

        displayOverlay.classList.add('hidden');

        menuProject.classList.add('hidden');

    }
);


for(let i = 0; i < arraySelect.length; i++)
{

    arraySelect[i].addEventListener('click', () => 
        {

            arraySelect[i].firstElementChild.firstElementChild.classList.add('button-project-click');

            arraySelect[i].firstElementChild.childNodes[3].style.color = '#3CB3AB';

            arraySelect[i].parentElement.style.border = '0.15rem #3CB3AB solid';

            if(i === 0)
            {

                arraySelect[1].firstElementChild.firstElementChild.classList.remove('button-project-click');
                arraySelect[2].firstElementChild.firstElementChild.classList.remove('button-project-click');
      
                arraySelect[1].firstElementChild.childNodes[3].style.color = '#000';
                arraySelect[2].firstElementChild.childNodes[3].style.color = '#000';

                arraySelect[1].parentElement.style.border = '0.0625rem solid hsla(0, 0%, 59%, 0.5)';
                arraySelect[2].parentElement.style.border = '0.0625rem solid hsla(0, 0%, 59%, 0.5)';
                
            }


            if(i === 1)
            {

                arraySelect[0].firstElementChild.firstElementChild.classList.remove('button-project-click');
                arraySelect[2].firstElementChild.firstElementChild.classList.remove('button-project-click');

                arraySelect[0].firstElementChild.childNodes[3].style.color = '#000';
                arraySelect[2].firstElementChild.childNodes[3].style.color = '#000';

                arraySelect[0].parentElement.style.border = '0.0625rem solid hsla(0, 0%, 59%, 0.5)';
                arraySelect[2].parentElement.style.border = '0.0625rem solid hsla(0, 0%, 59%, 0.5)';
                
            }

            if(i === 2)
            {

                arraySelect[0].firstElementChild.firstElementChild.classList.remove('button-project-click');
                arraySelect[1].firstElementChild.firstElementChild.classList.remove('button-project-click');

                arraySelect[0].firstElementChild.childNodes[3].style.color = '#000';
                arraySelect[1].firstElementChild.childNodes[3].style.color = '#000';

                arraySelect[0].parentElement.style.border = '0.0625rem solid hsla(0, 0%, 59%, 0.5)';
                arraySelect[1].parentElement.style.border = '0.0625rem solid hsla(0, 0%, 59%, 0.5)';
                
            }

        }
    ); 

    arraySelect[i].addEventListener('mouseover', () => 
        {

            arraySelect[i].firstElementChild.childNodes[3].style.color = '#3CB3AB';

            arraySelect[i].firstElementChild.childNodes[1].style.border = '0.15rem #3CB3AB solid';

        }
    );

    arraySelect[i].addEventListener('mouseout', () => 
        {

            arraySelect[i].firstElementChild.childNodes[3].style.color = '#000';

            arraySelect[i].firstElementChild.childNodes[1].style.border = '0.0625rem hsla(0, 0%, 48%, 0.5) solid';

        }
    );

}




myForm1.addEventListener('submit', (e) =>
    {

        menuProject.classList.add('hidden');

        confirm.classList.remove('hidden');

        bambooLeft--;

        bambooEdition.innerText = bambooLeft;

        backers++;

        spanBackers.innerText = backers;

        amount += Number(myForm1[1].value);

        spanAmount.innerText = amount;

        widthBar = Math.floor(amount/1000);

        bar.style.width = `${widthBar}%`;

        bookmark.firstElementChild.firstElementChild.firstElementChild.style.fill = '#3CB3AB';
        bookmark.firstElementChild.firstElementChild.childNodes[1].style.fill = '#fff';
        bookmark.childNodes[1].style.color = '#3CB3AB'; 

        spanAmount.innerText = displayNumber(amount);

        spanBackers.innerText = displayNumber(backers);
     
        e.preventDefault();

    }
);



myForm2.addEventListener('submit', (e) =>
    {

        menuProject.classList.add('hidden');

        confirm.classList.remove('hidden');

        blackEditionLeft--;

        blackEdition.innerText = blackEditionLeft;

        backers++;

        spanBackers.innerText = backers;
     
        amount += Number(myForm2[1].value);

        spanAmount.innerText = amount;

        widthBar = Math.floor(amount/1000);

        bar.style.width = `${widthBar}%`;

        bookmark.firstElementChild.firstElementChild.firstElementChild.style.fill = '#3CB3AB';
        bookmark.firstElementChild.firstElementChild.childNodes[1].style.fill = '#fff';
        bookmark.childNodes[1].style.color = '#3CB3AB'; 

        spanAmount.innerText = displayNumber(amount);

        spanBackers.innerText = displayNumber(backers);

        e.preventDefault();

    }
);



/*CLOSE CONFIRM*/

buttonConfirm.addEventListener('click', () =>
    {

        displayOverlay.classList.add('hidden');

        menuProject.classList.add('hidden');

        confirm.classList.add('hidden');

    }
);


