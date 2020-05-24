const btn1 = document.querySelector('.btn1');
let $number = 1;



const addElement = function () {
    const div = document.createElement('div');
    div.textContent = $number;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    if ($number % 5 === 0) {
        div.classList.add('circle');
    } else {

    }
    document.body.appendChild(div);
    $number++;
}

btn1.addEventListener('click', addElement);