function calculateSum() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = Number(a) + Number(b);
    let element = document.createElement('div');
    element.innerText = c;
    document.body.appendChild(element);
    console.log(c);
}