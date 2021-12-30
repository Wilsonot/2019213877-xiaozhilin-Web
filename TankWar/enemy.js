//开场动画
function Get_out(i){
    let move_down = setInterval(function () {
        ctx.clearRect( enemas[i].positionX-enemas[i].speed, enemas[i].positionY-enemas[i].speed, 70, 70);
        ctx.drawImage( enemas[i].myTank, enemas[i].positionX,  enemas[i].positionY);
        enemas[i].positionY += enemas[i].speed;
        if(enemas[i].positionY >= 5 || enemas[i].exit == false) {
            clearInterval(move_down)
        }
    },30)
}
//单次坦克移动
function enemy_moveOnce(i){
    let path = 0
    let choice = Math.floor((Math.random() * 10) + 1);
    if(choice>=1&&choice<=2){
        enemy_size_meet(i)
        if(enemas[i].exit == true) enemas[i].myTank.src = "img/enemy3U.gif"
        enemas[i].style = 0
        if(enemas[i].mitU != true){
            let move_up = setInterval(function () {
                enemy_size_meet(i)
                if(path >= 250  || enemas[i].exit == false||enemas[i].mitU == true) {
                    enemas[i].mitR = false
                    enemas[i].mitL = false
                    enemas[i].mitD = false
                    clearInterval(move_up)
                }
                ctx.clearRect( enemas[i].positionX-enemas[i].speed, enemas[i].positionY-5, 70, 70);
                ctx.drawImage( enemas[i].myTank, enemas[i].positionX,  enemas[i].positionY);
                enemas[i].positionY -= enemas[i].speed;
                path += enemas[i].speed
            },20)
        }
    }
    else if(choice>=3&&choice<=5){
        enemy_size_meet(i)
       if(enemas[i].exit == true) enemas[i].myTank.src = "img/enemy3L.gif"
        enemas[i].style = 1
        if(enemas[i].mitL != true){
            let move_left = setInterval(function () {
                enemy_size_meet(i)
                if(path >= 250 || enemas[i].exit == false ||enemas[i].mitL == true) {
                    enemas[i].mitR = false
                    enemas[i].mitU = false
                    enemas[i].mitD = false
                    clearInterval(move_left)
                }
                ctx.clearRect( enemas[i].positionX-enemas[i].speed, enemas[i].positionY-enemas[i].speed, 70, 70);
                ctx.drawImage( enemas[i].myTank, enemas[i].positionX,  enemas[i].positionY);
                enemas[i].positionX -= enemas[i].speed;
                path += enemas[i].speed
            },20)
        }
    }
    else if(choice>=6&&choice<=8){
        enemy_size_meet(i)
        if(enemas[i].exit == true) enemas[i].myTank.src = "img/enemy3D.gif"
        enemas[i].style = 2
        if(enemas[i].mitD != true){
            let move_down = setInterval(function () {
                enemy_size_meet(i)
                if(path >= 250 || enemas[i].exit == false || enemas[i].mitD == true) {
                    enemas[i].mitR = false
                    enemas[i].mitU = false
                    enemas[i].mitL = false
                    clearInterval(move_down)
                }
                ctx.clearRect( enemas[i].positionX-enemas[i].speed, enemas[i].positionY-enemas[i].speed, 70, 70);
                ctx.drawImage( enemas[i].myTank, enemas[i].positionX,  enemas[i].positionY);
                enemas[i].positionY += enemas[i].speed;
                path += enemas[i].speed
            },20)
        }
    }
    else if(choice>=9&&choice<=10){
        enemy_size_meet(i)
        if(enemas[i].exit == true) enemas[i].myTank.src = "img/enemy3R.gif"
        enemas[i].style = 3
        if(enemas[i].mitR !== true){
            let move_right = setInterval(function () {
                enemy_size_meet(i)
                if(path >= 250  || enemas[i].exit == false ||enemas[i].mitR == true){
                    enemas[i].mitL = false
                    enemas[i].mitU = false
                    enemas[i].mitD = false
                    clearInterval(move_right)
                }
                ctx.clearRect( enemas[i].positionX-enemas[i].speed, enemas[i].positionY-enemas[i].speed, 70, 70);
                ctx.drawImage( enemas[i].myTank, enemas[i].positionX,  enemas[i].positionY);
                enemas[i].positionX += enemas[i].speed;
                path += enemas[i].speed
            },20)
        }
    }

}
//子弹是否撞到敌军
function e_ballJudge(i) {
    if(u_stop){
        if (Math.abs(tank.positionX - enemas[i].eball.WX + 21) < 55 && Math.abs(tank.positionY - enemas[i].eball.WY + 21) < 55 && tank.hit == false) {
            tank.hit = true;
            enemas[i].eball.style = true
        }

        for (let j = 0; j < enemas.length; j++) {
            if (Math.abs(enemas[j].positionX - enemas[i].eball.WX + 21) < 55 && Math.abs(enemas[j].positionY - enemas[i].eball.WY + 21) < 55 && enemas[j].hit == false && i != j)
                enemas[i].eball.style = true
        }
    }
}
function Destroy_tank() {
    let  op = 0;
    tank.exit = false
    u_stop = false
    over = true
    start.addEventListener('click',Start)
    clicked = false
    let e = new Image();
    e.src = "img/over.gif"
    e.onload = function () {
        ctx.drawImage(e,500, 300);
    }
    let T = setInterval(function () {
        tank.myTank.src = blast[op]
        op++;
        if (op >= 8) {
            ctx.clearRect(tank.positionX - 20, tank.positionY - 20, 150, 125);
            clearInterval(T)
        }
    }, 100)
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
//单个子弹相关控制
let enemy_fire = function (i) {
   if(enemas[i].exit == true) {
       switch (enemas[i].style) {
           case 0:
               enemas[i].ball_F_P()
               enemas[i].p++
               e_ballJudge(i)
               if(enemas[i].eball.style == false){
                   let e_timer = setInterval(function () {
                       e_ballJudge(i)
                       console.log(enemas[i].eball.WX)
                       ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                       ctx.drawImage(enemas[i].eball.ball, enemas[i].eball.WX, enemas[i].eball.WY - enemas[i].eball.speed);
                       enemas[i].eball.WY -= enemas[i].eball.speed;
                       if (enemas[i].eball.WY < -20 || enemas[i].eball.style == true) {
                           enemas[i].eball.style = false
                           ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                           if(tank.hit == true && tank.exit == true ) Destroy_tank()
                           enemas[i].p--
                           clearInterval(e_timer);
                       } //子弹撞到东西之后的处理
                   }, 10)
               }
               enemas[i].eball.style = false
               break;
           case 1:
               enemas[i].ball_F_P()
               enemas[i].p++
               e_ballJudge(i)
               if(enemas[i].eball.style == false){
                   let e_timer1 = setInterval(function () {
                       e_ballJudge(i)
                       ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                       ctx.drawImage(enemas[i].eball.ball, enemas[i].eball.WX - enemas[i].eball.speed, enemas[i].eball.WY);
                       enemas[i].eball.WX -= enemas[i].eball.speed;
                       if (enemas[i].eball.WX < -20 || enemas[i].eball.style == true) {
                           enemas[i].eball.style = false
                           ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                           if(tank.hit == true && tank.exit == true ) Destroy_tank()
                           enemas[i].p--
                           clearInterval(e_timer1);
                       } //子弹撞到东西之后的处理
                   }, 10)
               }
               enemas[i].eball.style = false
               break;
           case 2:
               enemas[i].ball_F_P()
               enemas[i].p++
               e_ballJudge(i)
               if(enemas[i].eball.style == false){
                   let e_timer2 = setInterval(function () {
                       e_ballJudge(i)
                       ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                       ctx.drawImage(enemas[i].eball.ball, enemas[i].eball.WX, enemas[i].eball.WY + enemas[i].eball.speed);
                       enemas[i].eball.WY += enemas[i].eball.speed;
                       if (enemas[i].eball.WY > 700 || enemas[i].eball.style == true) {
                           enemas[i].eball.style = false
                           ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                           if(tank.hit == true && tank.exit == true ) Destroy_tank()
                           enemas[i].p--
                           clearInterval(e_timer2);
                       } //子弹撞到东西之后的处理
                   }, 10)
               }
               enemas[i].eball.style = false
               break;
           case 3:
               enemas[i].ball_F_P()
               enemas[i].p++
               e_ballJudge(i)
               if(enemas[i].eball.style == false){
                   let e_timer3 = setInterval(function () {
                       e_ballJudge(i)
                       ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                       ctx.drawImage(enemas[i].eball.ball, enemas[i].eball.WX + enemas[i].eball.speed, enemas[i].eball.WY);
                       enemas[i].eball.WX += enemas[i].eball.speed;
                       if (enemas[i].eball.WX > 1000 || enemas[i].eball.style == true) {
                           enemas[i].eball.style = false
                           ctx.clearRect(enemas[i].eball.WX, enemas[i].eball.WY, 20, 22);
                           if(tank.hit == true && tank.exit == true )  Destroy_tank()
                           enemas[i].p--
                           clearInterval(e_timer3);
                       } //子弹撞到东西之后的处理
                   }, 10)
               }
               enemas[i].eball.style = false
               break;

       }
   }
}



