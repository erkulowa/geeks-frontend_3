// 1 task
const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));


// 2 task

let seconds = 0
const interval = setInterval(() => {
    seconds++
    console.log('Прошла секунда')
}, 1000)

// 3 task

const count = () => {
    let i = 1;

    const interval = setInterval(() => {
        console.log(i);
        i++;

        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}
count();

// 4 task
const block = document.querySelector('.block');

block.onclick = () => {
    block.classList.toggle('red');
}


// 5 task

const person = document.querySelector('.person');

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './data.json');
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.response);
            document.querySelector('.firstName').innerHTML = data.firstName;
            document.querySelector('.lastName').innerHTML = data.lastName;
            document.querySelector('.age').innerHTML = data.age;
        }
    };
};

getData();
