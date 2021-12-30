//己方第i颗子弹的碰撞检测
//检查第i颗子弹的坐标和每个敌方坦克的距离，要是够近就将对应敌方坦克和对应子弹的状态变换
function add_score() {
    i = i + 10;
  score.innerText = i

}
 function my_ballJudge(){
    for(let j = 0;j < enemas.length;j++){
        if(Math.abs(enemas[j].positionX-tank.ball.WX+37)<55 && Math.abs(enemas[j].positionY-tank.ball.WY+37)<55 && enemas[j].hit == false){
            enemas[j].hit = true;
            tank.ball.style = true
            break;
        }
    }

}
 function Destroy_enemy(i) {
    add_score()
   let  op = 0;
     enemas[i].exit = false
     let T = setInterval(function () {
         enemas[i].myTank.src = blast[op]
         op++;
         if (op >= 8) {
             ctx.clearRect(enemas[i].positionX - 20, enemas[i].positionY - 20, 150, 125);
             clearInterval(T)
         }
     }, 50)
 }
///控制坦克移动
let draw = function (){
    ctx.clearRect(tank.positionX-tank.speed, tank.positionY-tank.speed, 70, 70);
    ctx.drawImage(tank.myTank,tank.positionX, tank.positionY);
}
setInterval(function () {
if(tank.exit == true) {
    //边界检测
    tank_size_meet()
    if (tank.R && tank.mitR == false) {
        tank.mitL = false
        tank.mitU = false
        tank.mitD = false
        tank.style = 3
        tank.myTank.src = "img/p2tankR.jpg"
        tank.positionX += tank.speed;
        draw()
    } else if (tank.L && tank.mitL == false) {
        tank.mitR = false
        tank.mitU = false
        tank.mitD = false
        tank.myTank.src = "img/p2tankL.jpg"
        tank.style = 1
        tank.positionX -= tank.speed;
        draw()
    } else if (tank.D && tank.mitD == false) {
        tank.mitR = false
        tank.mitU = false
        tank.mitL = false
        tank.myTank.src = "img/p2tankD.jpg"
        tank.style = 2
        tank.positionY += tank.speed;
        draw()
    } else if (tank.U && tank.mitU == false) {
        tank.mitR = false
        tank.mitU = false
        tank.mitD = false
        tank.myTank.src = "img/p2tankU.jpg"
        tank.style = 0
        tank.positionY -= tank.speed;
        draw()
    }
}
}, 20);
let move = function (e) {
    //移动
    if (e.code == "ArrowRight" ) {
        tank.R = true
    } else if (e.code == "ArrowLeft" ) {
        tank.L = true
    } else if (e.code == "ArrowDown") {
        tank.D = true
    } else if (e.code == "ArrowUp") {
        tank.U = true
    }
}
document.onkeyup = function () {
    tank.R = false
    tank.L = false
    tank.U = false
    tank.D = false
}
//控制坦克开火
//单个子弹飞行控制
let fire = function (e) {
    if (e.keyCode == 32 && tank.p == 0) {
        switch (tank.style) {
            case 0:
                tank.ball_F_P()
                tank.p++
                let timer =  setInterval(function () {
                    my_ballJudge()
                    ctx.clearRect(tank.ball.WX, tank.ball.WY, 20, 22);
                    ctx.drawImage(tank.ball.ball, tank.ball.WX, tank.ball.WY - 10);
                    tank.ball.WY -= 10;
                    if(tank.ball.WY < -20 || tank.ball.style == true){
                        ctx.clearRect(tank.ball.WX + 3, tank.ball.WY, 20, 22);
                        tank.ball.style = false
                        for(let j = 0;j < enemas.length;j++)
                            if(enemas[j].hit == true && enemas[j].exit == true ) Destroy_enemy(j)
                        tank.p--
                        clearInterval(timer);
                    } //子弹撞到东西之后的处理
                }, 20)
                break;
            case 1:
                tank.ball_F_P()
                tank.p++
                let timer1 =  setInterval(function () {
                    my_ballJudge()
                    ctx.clearRect(tank.ball.WX , tank.ball.WY, 20, 22);
                    ctx.drawImage(tank.ball.ball, tank.ball.WX -10,tank.ball.WY);
                    tank.ball.WX -= 10;
                    if(tank.ball.WX< -20 || tank.ball.style == true){
                        ctx.clearRect(tank.ball.WX , tank.ball.WY, 20, 22);
                        tank.ball.style = false
                        for(let j = 0;j < enemas.length;j++)
                            if(enemas[j].hit == true && enemas[j].exit == true ) Destroy_enemy(j)
                        tank.p--
                        clearInterval(timer1);
                    }
                }, 20)
                break;
            case 2:
                tank.ball_F_P()
                tank.p++
                let timer2 =  setInterval(function () {
                    my_ballJudge()
                    ctx.clearRect(tank.ball.WX , tank.ball.WY, 20, 22);
                    ctx.drawImage(tank.ball.ball, tank.ball.WX, tank.ball.WY + 10);
                    tank.ball.WY += 10;
                    if(tank.ball.WY > 720 || tank.ball.style == true){
                        ctx.clearRect(tank.ball.WX , tank.ball.WY, 20, 22);
                        tank.ball.style = false
                        for(let j = 0;j < enemas.length;j++)
                            if(enemas[j].hit == true && enemas[j].exit == true ) Destroy_enemy(j)
                        tank.p--
                        clearInterval(timer2);
                    }

                }, 20)
                break;
            case 3:
                tank.ball_F_P()
                tank.p++
                let timer3 =  setInterval(function () {
                    my_ballJudge()
                    ctx.clearRect(tank.ball.WX, tank.ball.WY, 20, 22);
                    ctx.drawImage(tank.ball.ball, tank.ball.WX + 10, tank.ball.WY);
                    tank.ball.WX += 10;
                    if(tank.ball.WX > 1020 || tank.ball.style == true){
                        ctx.clearRect(tank.ball.WX, tank.ball.WY, 20, 22);
                        tank.p--
                        tank.ball.style = false
                        for(let j = 0;j < enemas.length;j++)
                            if(enemas[j].hit == true && enemas[j].exit == true ) Destroy_enemy(j)
                         clearInterval(timer3);
                    }
                }, 20)
                break;

        }

    }
}
//注册keydown键盘事件
let control = function (e) {
   if (tank.exit == true){
        //控制移动
        move(e);
        //控制开火
        fire(e)
    }
}



