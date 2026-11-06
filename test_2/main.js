// 1

function extractNumbers(str) {
    return (str.match(/\d/g) || []).map(Number);
}

console.log(extractNumbers("a1fg5hj6"))

// 2
function fibonacci(a = 0, b = 1) {
    if (a > 144) {
        return;
    }

    console.log(a);

    setTimeout(() => {
        fibonacci(b, a + b);
    }, 1000);
}

fibonacci();

// 3
async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        const data = await response.json();

        data.forEach((item) => {
            console.log(item.title);
        });

    } catch (error) {
        console.log(error);
    }
}

getProducts();

// 4
const buttons = document.querySelector('.buttons');

buttons.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
};

// 5
const square = document.querySelector('.square');
const button = document.querySelector('#toggle');

button.onclick = () => {
    square.hidden = !square.hidden;
};

// 6
let count = 0;

const counter = document.querySelector('#counter');

const interval = setInterval(() => {
    count++;

    counter.textContent = count;

    if (count === 100) {
        clearInterval(interval);
    }
}, 1);

// 7
const getButton = document.querySelector('#get-data');

getButton.onclick = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
};
