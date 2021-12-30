//必要的数据
let enemas;   //敌人数组
let num;      //敌人数量
let u_stop = false   //检查要生成敌人
let over = false     //检测游戏是否开始
let  i = 0           //计分板
let tank = new Tank()
enemas = new Array(6)

tank.myTank.onload = function () {
    tank.show_Tank()
}
for(let i = 0;i<enemas.length;i++){
    enemas[i] = new enemyTank()
    enemas[i].positionX = 200 + i*90
    enemas[i].positionY = -60
    enemas[i].exit = false
    enemas[i].myTank.src = "img/enemy3D.gif"
    enemas[i].style = 2
    enemas[i].myTank.onload = function () {
        enemas[i].show_Tank()
    }
}

//难易度选择
function Easy() {
    num = 3
    easy.removeEventListener('click',Easy)
    mid.removeEventListener('click',Mid)
    easy.removeEventListener('click',Hard)
    unstop.addEventListener('click',Unstop)
}
function Mid() {
    num = 5
    easy.removeEventListener('click',Easy)
    mid.removeEventListener('click',Mid)
    easy.removeEventListener('click',Hard)
    unstop.addEventListener('click',Unstop)
}
function Hard() {
    num = 6
    easy.removeEventListener('click',Easy)
    mid.removeEventListener('click',Mid)
    easy.removeEventListener('click',Hard)
    unstop.addEventListener('click',Unstop)
}
//事件：点击开始游戏将会出现己方坦克并提示选择难度,点击之后移除事件
function Start() {
    ctx.clearRect(0,0,1000,700)
    over = false
    i = 0;
    tank.myTank.src = "img/p2tankD.jpg"
    tank.positionX = 500;
    tank.positionY = 500;
    tank.exit = true
    tank.hit = false
    setTimeout(function () {
        tank.show_Tank()
    },20)
    score.innerText = i
    document.addEventListener("keydown",control)
    easy.addEventListener('click',Easy)
    mid.addEventListener('click',Mid)
    hard.addEventListener('click',Hard)
    start.removeEventListener('click',Start)
}
//结束
function End(){
    start.addEventListener('click',Start)
    if(u_stop){
        //设置一个变量停止敌人动作
        u_stop = false
        over = true
        let e = new Image();
        e.src = "img/over.gif"
        e.onload = function () {
            ctx.drawImage(e,500, 300);
        }
        let show_end = setInterval(function () {
            ctx.drawImage(e,500, 300);
            if(over == false){
                clearInterval(show_end)
                ctx.clearRect(0,0,1000,700)
            }
        },20)
        for(let i = 0;i < num;i++){
            enemas[i].exit = false
            enemas[i].hit = true
        }
    }
}
//敌人生成
function Unstop() {
    u_stop = true
    unstop.removeEventListener('click',Unstop)
    end.addEventListener('click',End)
    for(let i = 0;i < num;i++){
        enemas[i].positionX = 200 + i*90
        enemas[i].positionY = -60
        enemas[i].exit = true
        enemas[i].hit = false
        enemas[i].myTank.src = "img/enemy3D.gif"
        enemas[i].style = 2
    }
    for(let i = 0;i < num;i++){
        let enemy_move = setInterval(function () {
            if(over){
                clearInterval(enemy_move)
            }
            if(enemas[i].positionY<0){
                Get_out(i)
            }
            if(enemas[i].positionY>=0 && over == false){
                enemy_fire(i)
                enemy_moveOnce(i)
                if(enemas[i].exit == false && over == false) {
                  setTimeout(function () {
                      enemas[i].exit = true
                      enemas[i].hit = false
                      enemas[i].myTank.src = "img/enemy3D.gif"
                      enemas[i].style = 2
                      enemas[i].positionY = -60
                      enemas[i].positionX = 200 +  Math.floor((Math.random() * 10) + 1)*50;
                  },400)
                }
            }
        },1000)
    }

}


const start = document.getElementById('game_start')
const easy = document.getElementById('easy')
const mid = document.getElementById('mid')
const hard = document.getElementById('hard')
const unstop =  document.getElementById('unstop')
const end =  document.getElementById('game_end')
const score =  document.getElementById('score')
start.addEventListener('click',Start)

