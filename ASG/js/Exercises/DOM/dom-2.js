
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

const show1 = document.getElementById('show-1');

function conversation1(e) {

    const p = document.createElement('p')
    p.id = 'id1';
    p.innerHTML = `<p>${e.target.value}</p>`;
    show1.appendChild(p)

    e.target.value = ''
}

function conversation2(e) {

    const p = document.createElement('p')
    p.id = 'id2';
    p.innerHTML = `<p>${e.target.value}</p>`;
    show1.appendChild(p)

    e.target.value = ''

}


input1.addEventListener('blur', conversation1);
input2.addEventListener('blur', conversation2);
