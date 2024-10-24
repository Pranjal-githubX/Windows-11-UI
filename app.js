console.log('Hello World');


// Allows the ability of image to not be draggable for real expirience
document.querySelectorAll('img').forEach((e) => {
    e.setAttribute('draggable', false)
})



function setTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds()
    // Ensure minutes are always two digits
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // Update the content of the clock div
    document.getElementsByClassName('currTime')[0].innerText = hours + ":" + minutes + ":" + seconds;

}
setInterval(setTime, 500);



function setDate() {
    var dateObj = new Date();
    var date = dateObj.getDate()
    if (date < 10) {
        date = '0' + date
    }
    var month = dateObj.getMonth()
    month++
    if (month < 10) {
        month = '0' + month
    }
    var year = dateObj.getFullYear()
    document.getElementsByClassName('date')[0].innerText = date + "-" + month + "-" + year;
}

setInterval(setDate, 500);



// document.querySelector(".container .desktop").style.backgroundImage = 'url(assets/desktop.jpg)'
function changeBG(img) {
    document.querySelector('.container .desktop').style.backgroundImage = `url(${img})`
}
changeBG('assets/desktop.jpg')


var tray = document.getElementsByClassName('tray')[0];
function addIcon(url, name) {
    let div = document.createElement('div')
    div.classList.add('tray-icon')
    let img = document.createElement('img')
    img.setAttribute('src', url)
    img.classList.add('icon-img')
    div.append(img)

    let heading = document.createElement('h4')
    heading.innerText = name;
    div.append(heading)


    tray.append(div)
}


// addIcon('assets/VSC.webp', 'VS Code')
addIcon('assets/amazon.webp', 'Amazon')
// addIcon('assets/file.png', "Explorer")
addIcon('assets/YT.png', 'YouTube')
addIcon('assets/ig.jpg', "Instagram")
// addIcon('assets/chrome.png', "Chrome")
addIcon('assets/Office.png', 'Office 365')
addIcon('assets/download.png', 'WhatsApp')
addIcon('assets/Weather-icon.png', 'Weather')
addIcon('assets/VSC.webp', 'VS Code')
addIcon('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4d04d46d-481e-452a-9bfd-75a8c1cc65a3/dfftnhw-434cac4b-0d0f-4b0a-ad84-d02feb4bd730.png', 'Project IGI')

var mainIcon = document.querySelectorAll('.desktop .tray .tray-icon')
let desktop = document.querySelectorAll('.container .desktop')[0]


mainIcon.forEach((val) => {
    val.addEventListener('click', () => {
        if (val.classList.contains('selected')) {
            val.style.backgroundColor = 'transparent'
            val.classList.remove('selected')
        }
        else {
            val.style.backgroundColor = 'rgba(205, 230, 226, 0.348)';
            val.classList.add('selected')
        }
    })
})
let rightTemp = document.querySelector('.line .rightTemp');
var rightPop = document.getElementsByClassName('rightPop')[0];

var i = 0;
/*
0 => bottom: -400px;
1 => bottom: 65px;
*/
rightTemp.addEventListener('click', () => {

    console.log('clicked');
    if (i == 0) {
        rightPop.style.bottom = '65px'
        i++
    }
    else {
        rightPop.style.bottom = '-400px'
        i--
    }
})


let powerBtn = document.getElementById('power')
var menu = document.getElementsByClassName('menu')[0]
var menuBoxes = document.querySelectorAll('.box')
var idx = 0;
/*
0 none
1 block
*/
powerBtn.addEventListener('click', () => {
    if (idx == 0) {
        menu.style.height = 120 + 'px'
        setTimeout(() => {
            menuBoxes.forEach((e) => {
                e.style.display = 'block'
            })
        }, 50);
        idx++
    }
    else if (idx == 1) {
        menu.style.height = 0 + 'px'
        // menu.style.display = 'none';
        // menuBoxes.forEach((e) => {
        //     e.style.display = 'none'
        // })
        setTimeout(() => {
            menuBoxes.forEach((e) => {
                e.style.display = 'none'
            })
        }, 100);
        idx--

    }
    else {
        console.log('error');
    }
})

var winIcon = document.getElementsByClassName('winIcon')[0];
var openTask = document.getElementsByClassName('openTask')[0];
var isOpen = false; // Use a boolean flag for state tracking

winIcon.addEventListener('click', function() {
  isOpen = !isOpen; // Toggle the open state

  if (isOpen) {
    openTask.style.bottom = '65px';
  } else {
    openTask.style.bottom = '-700px';
  }

  console.log('Clicked!'); // Log a clear message for debugging
});
