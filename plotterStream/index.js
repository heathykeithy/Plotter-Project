
const page = "PAGEID=0"

const command = "G1"
let speed = "F7200"
const brake = "%20"
//let position = 'G0%20F7200%20X0%20Y100&'
//let position = command + brake + speed + brake + 'X' + posX + brake + 'Y' + posY + '&'

let posX
let posY

function position() {

    pos = command + brake + speed + brake + 'X' + posX + brake + 'Y' + posY + '&'
    console.log(pos)
    console.log(posX)
    console.log(posY)
    return pos
}
//G1 X18.202 Y13.354  F2500
function getUrl() {
    let url = "http://192.168.1.5/command?commandText=" + position() + page
    return url
}

const square = document.getElementById('squ')

   const xprint = document.getElementById('xprint')
   const yprint = document.getElementById('yprint')

square.onmousemove = function (e) {
    posX  = e.clientY - this.offsetLeft
    posY = e.clientY - this.offsetTop

    console.log("mouse location:", posX, posY)
    xprint.innerHTML = posX + "X"
    yprint.innerHTML = posY + "Y"
}

square.addEventListener('click', function (e) {testData()})

const hero = document.querySelector('.hero')

function testData() {
    fetch(getUrl(), {
        mode: 'no-cors'

    })
    // appendChild(textnode);

    //  hero.appendChild("<p>test</p>")      
    // hero.insertAdjacentHTML("afterend","<p>test</p>")      
    //  .then((response) => response.json())
    //    .then((data) => console.log(data));

}