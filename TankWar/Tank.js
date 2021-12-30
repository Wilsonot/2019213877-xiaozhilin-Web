const canvas = document.getElementById("GameWindows");
const ctx = canvas.getContext("2d");
blast = new Array(
    "img/blast1.gif", "img/blast2.gif","img/blast3.gif","img/blast4.gif","img/blast5.gif","img/blast6.gif","img/blast7.gif","img/destory.gif",
)

//子弹类
class ball {
    constructor() {
        this.ball = new Image();
        this.ball.src = "img/tankmissile.gif"    //子弹的显示
        this.WX = 400;
        this.WY = 500;                             //子弹的坐标
        this.speed = 10;                         //子弹的速度
        this.style = false                       //子弹的状态
    }

}
//己方坦克
class Tank {
    constructor() {
        this.myTank = new Image();
        this.myTank.src = "img/p2tankD.jpg"   //坦克的显示
        this.positionX = 500;
        this.positionY = 500;                //坦克的初始坐标
        this.style = 2                       //坦克目前的朝向
        this.speed = 5;                      //坦克的速度
        this.hit = false;                    //坦克是否被击中
        this.exit = true                     //坦克是否存在
        this.p = 0                           //正在运动的子弹数
        this.ball = new ball()
        this.mitU = false                     //判断坦克是否碰见不能被摧毁的东西
        this.mitD = false
        this.mitL = false
        this.mitR = false
        this.U = false                    //判断坦克是否碰见不能被摧毁的东西
        this.D = false
        this.L = false
        this.R = false
    }
    //画出一个坦克先
    show_Tank(){
        ctx.drawImage(this.myTank,this.positionX, this.positionY);
   }
    //子弹坐标初始化
    ball_F_P(){
    this.ball.src = "img/tankmissile.gif"
        switch(this.style){
            case 0:   //坦克朝上
                this.ball.WX = this.positionX + 23;
                this.ball.WY = this.positionY - 20;
                break;
            case 1:   //坦克朝左
                this.ball.WX = this.positionX - 20;
                this.ball.WY = this.positionY + 20;
                break;
            case 2:   //坦克朝下
                this.ball.WX = this.positionX + 20;
                this.ball.WY = this.positionY + 60;
                break;
            case 3:   //坦克朝右
                this.ball.WX = this.positionX + 60;
                this.ball.WY = this.positionY + 20;
                break;
        }

    }
}

//敌方坦克
class enemyTank {
    constructor() {
        this.myTank = new Image();
        this.myTank.src = "img/enemy3D.gif"   //坦克的显示
        this.positionX = 0;
        this.positionY = 0;                //坦克的初始坐标
        this.style = 2                       //坦克目前的朝向
        this.speed = 5;                      //坦克的速度
        this.hit = false;                    //坦克是否被击中
        this.exit = true                     //坦克是否存在
        //给坦克配置一发子弹
        this.p = 0
        this.eball = new ball();
        this.mitU = false                     //判断坦克是否碰见不能被摧毁的东西
        this.mitD = false
        this.mitL = false
        this.mitR = false
    }
    //显示敌方坦克
    show_Tank(){
        ctx.drawImage(this.myTank,this.positionX, this.positionY);
    }
    //敌方坦克定位
    ball_F_P(){
        this.eball.src = "img/enemymissile.gif"
        switch(this.style){
            case 0:   //坦克朝上
                this.eball.WX = this.positionX + 23;
                this.eball.WY = this.positionY - 20;
                break;
            case 1:   //坦克朝左
                this.eball.WX = this.positionX - 20;
                this.eball.WY = this.positionY + 20;
                break;
            case 2:   //坦克朝下
                this.eball.WX = this.positionX + 20;
                this.eball.WY = this.positionY + 60;
                break;
            case 3:   //坦克朝右
                this.eball.WX = this.positionX + 60;
                this.eball.WY = this.positionY + 20;
                break;
        }

    }


}


