const headers = document.querySelectorAll('h3')

for (let head of headers){
    head.nextElementSibling.style.display = 'none'
    head.addEventListener('click', (e) => {
        let img = e.target.nextElementSibling
        if (img.style.display === 'none'){
            img.style.display = 'inline'
        } else {
            img.style.display = 'none'
        }
    })
}

function updateTime(){
    let currentTime = new Date();
    document.querySelector('#clock').innerHTML = currentTime.toLocaleTimeString();
}

updateTime()
setInterval(updateTime, 1000)


console.log("Hello there!")
