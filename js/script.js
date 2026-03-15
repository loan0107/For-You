// Thay đổi nội dung búc thư ở đây
var letterContent = "Chúc bạn một ngày thật vui vẻ. Cảm ơn vì đã xuất hiện trong “timeline” của mình. Mình vẫn đang trong quá trình tìm hiểu bạn giống như debug một chương trình mới vậy — càng tìm hiểu lại càng thấy thú vị. Hy vọng sau này chúng ta sẽ còn nhiều “commit” kỷ niệm cùng nhau nữa nhé."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50

// Hiệu ứng gõ chữ

function effectWrite() {
    var boxLetter = document.querySelector(".letterContent")
    var nextBox = document.querySelector(".nextBox")

    letterContentSplited = letterContent.split("")

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val
        }, durationWrite * index)
    })
    // Sau khi viết xong mới hiện nút
    setTimeout(() => {
        nextBox.style.display = "block"
    }, durationWrite * letterContentSplited.length)
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})
var openBtn = document.querySelector(".openBtn")
var questionBox = document.querySelector(".questionBox")


openBtn.addEventListener("click", () => {
    document.querySelector(".boxTitle").style.display = "none"
    document.querySelector(".boxCloud").style.display = "none"
    questionBox.style.display = "block"

})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if (cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})

var yesBtn = document.querySelector(".yesBtn")

yesBtn.addEventListener("click", () => {

    document.querySelector(".questionBox").style.display = "none"

    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")

})

var noBtn = document.querySelector(".noBtn")
var yesBtn = document.querySelector(".yesBtn")
var questionBox = document.querySelector(".questionBox")

let scale = 1
let count = 0

noBtn.addEventListener("mouseenter", () => {

    let boxWidth = questionBox.offsetWidth
    let boxHeight = questionBox.offsetHeight

    let btnWidth = noBtn.offsetWidth
    let btnHeight = noBtn.offsetHeight

    let x = Math.random() * (boxWidth - btnWidth)
    let y = Math.random() * (boxHeight - btnHeight)

    noBtn.style.position = "absolute"
    noBtn.style.left = x + "px"
    noBtn.style.top = y + "px"

    count++

    /* YES to dần */
    scale += 0.2
    yesBtn.style.transform = "scale(" + scale + ")"

    /* đổi chữ troll */
    if (count == 3) {
        noBtn.innerText = "Để suy nghĩ đã 🤨"
    }
    if (count == 6) {
        noBtn.innerText = "Khoan đã 😭"
    }
    if (count == 9) {
        noBtn.innerText = "Đừng bắt t bấm 😭"
    }
    if (count > 12) {
        noBtn.innerText = "Thôi bấm YES đi 😭"
    }

})

var nextBtn = document.querySelector(".nextBtn")

nextBtn.addEventListener("click", () => {

    document.querySelector(".cardValentine").style.display = "none"
    document.querySelector(".finalHeart").style.display = "flex"

})

// tab cuối trái tim
function createHeart(){

    let heart=document.createElement("div");

    heart.innerHTML="❤️";
    heart.classList.add("smallHeart");

    heart.style.left=Math.random()*100+"vw";

    let duration=Math.random()*3+2;
    heart.style.animationDuration=duration+"s";

    let size=Math.random()*20+15;
    heart.style.fontSize=size+"px";

    let rotate=Math.random()*360;
    heart.style.setProperty("--rot", rotate+"deg");

    document.getElementById("fallingHearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },duration*1000);
}

setInterval(createHeart,200);

document.addEventListener("click", function () {
    document.getElementById("bgmusic").play();
});
