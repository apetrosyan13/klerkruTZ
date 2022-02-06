let allSelectorsSwitch = document.getElementById('allSelectorsSwitch');
let shareBtn = document.getElementById('shareBtn');
let fSelector = document.getElementById('fSelector');
let sSelector = document.getElementById('sSelector');
let tSelector = document.getElementById('tSelector');
let selectorsArr = [fSelector, sSelector, tSelector];

(
    function() {
        for (i = 0; i < 3; i++) {
            selectorsArr[i].addEventListener('click', contentSelectorOnClick)
        }
    }
)()

function allSelectorsOnclick(e) {
    switch (e.target.id) {
        case 'allSelectorsSwitch':
            let status = allSelectorsSwitch.getAttribute('chacked') === 'true'? false: true;
            allSelectorsSwitch.setAttribute('chacked', `${status}`);
            allSelectorsSwitch.style.backgroundColor = status?'#6ff16f': '#DCDCDC';
            let firstCardStatus = document.getElementById('firstCardSwitch');
            let secondCardStatus = document.getElementById('secondCardSwitch');
            let thirdCardStatus = document.getElementById('thirdCardSwitch');
            let fourthCardStatus = document.getElementById('fourthCardSwitch');
            let allCards = [firstCardStatus,secondCardStatus,thirdCardStatus,fourthCardStatus];
            for(let i = 0; i < 4; i++) {
                allCards[i].setAttribute('chacked', `${status}`)
                allCards[i].style.backgroundColor = status?'#316FEE': '#DCDCDC';
                }
            break;
            default:
                let cardStatus = document.getElementById(e.target.id);
                let currentStatus = cardStatus.getAttribute('chacked') === 'true'? false: true;
                cardStatus.setAttribute('chacked', `${currentStatus}`);
                cardStatus.style.backgroundColor = currentStatus?'#316FEE': '#DCDCDC';
    }
}

function contentSelectorOnClick(e) {

    for (i = 0; i < 3; i++) {

        selectorsArr[i].setAttribute('checked', selectorsArr[i].id == e.target.id? 'true': 'false');
    }
}



function shareBtnOnClck() {
    let mailInput = document.getElementById('mailInput');
    let screenWidth = window.screen.width;
    let checkImg = document.createElement('img');
    checkImg.setAttribute('src', 'utils/optionImg.png');
    if (screenWidth > 700) {
        shareBtn.style.width = '100px';
        shareBtn.style.height = '56px';
        mailInput.style.width =  parseFloat(getComputedStyle(mailInput).width) + 53 + 'px';
    }
    shareBtn.style.backgroundColor = '#6ff16f';
    shareBtn.innerHTML = '';
    shareBtn.appendChild(checkImg);

    }


const screenWidth = window.screen.width;

if (+screenWidth < 701) {
    const img = document.createElement("img");
    img.src = "utils/Vector.png";
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.innerText = '';
    shareBtn.appendChild(img);
}

const allSelectors = document.getElementById('allSelectors');
allSelectors.addEventListener('click', allSelectorsOnclick);
const firstCard= document.getElementById('firstCardSwitch');
firstCard.addEventListener('click', allSelectorsOnclick);
const secondCard = document.getElementById('secondCardSwitch');
secondCard.addEventListener('click', allSelectorsOnclick);
const thirdCard = document.getElementById('thirdCardSwitch');
thirdCard.addEventListener('click', allSelectorsOnclick);
const fourthCard = document.getElementById('fourthCardSwitch');
fourthCard.addEventListener('click', allSelectorsOnclick);