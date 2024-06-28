


// const URL = "https://cat-fact.herokuapp.com/facts";
// let para = document.querySelector('#fact');
// let factButton = document.querySelector("#getfact");

// //fetch(URL) to fetch data from API


// const getFacts = async () => {
//     console.log("fetching data...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     para.innerText=data[0].text;
    
// };

// factButton.addEventListener('click', getFacts);









//Currency Converter

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector('form button');
let fromCurr = document.querySelector('.from select');
let toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");





for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}



const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}




const getExchangeRate = async () => {
    let amount = document.querySelector('.amount input');
    let amtVal = amount.value;
    if (amtVal==="" || amtVal<1) {
        amtVal = 1;
        amount.value = "1";
    }

    let fromCurrVal = fromCurr.value.toLowerCase();
    let toCurrVal = toCurr.value.toLowerCase();
    const URL = `${BASE_URL}/${fromCurrVal}.json`
    let response = await fetch(URL)
    let data = await response.json()
    let rate = data[fromCurrVal][toCurrVal];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

}


btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    getExchangeRate();
});





window.addEventListener("load", getExchangeRate());












