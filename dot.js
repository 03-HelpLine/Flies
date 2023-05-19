var Silk = document.getElementById("Goof")
var Rock = Silk.getContext("2d")
var Mouse = ""
var Yey = 0
var Xan = 0
var Pos = 0
var Ant = 0
var Lug = 0
var Act = 0
Silk.addEventListener("mousedown" , Pen)
function Pen(N){ 
    Mouse = "click"
console.log(Mouse)
}

Silk.addEventListener("mouseup" , Gum)
function Gum(N){ 
    Mouse = "No click"
console.log(Mouse)
}
Silk.addEventListener("mousemove" , Moved)
function Moved(N){ 
Lug = N.clientX - Silk.offsetLeft
Act = N.clientY - Silk.offsetTop
    if (Mouse == "click") {
Rock.beginPath()
Rock.moveTo(Pos, Ant)
Rock.lineTo(Lug, Act)
Rock.stroke()
    }
Pos = Lug
Ant = Act
}
var CellHeihght = screen.height - 50
var CellWidth = screen.width - 25
if(screen.width < 992){
Silk.width = CellWidth
Silk.height = CellHeihght
document.body.style.overflow = "hidden"
}
Silk.addEventListener("touchstart", OOT)
function OOT(N){
console.log("touchstart")
Pos = N.touches[0] .clientX
Ant = N.touches[0] .clientY
}
Silk.addEventListener("touchmove", bread)
function bread(N){
    Lug = N.touches[0].clientX
    Act = N.touches[0].clientY
    Rock.beginPath()
    Rock.moveTo(Pos, Ant)
    Rock.lineTo(Lug, Act)
    Rock.stroke()
    Pos = Lug
    Ant = Act
}

 