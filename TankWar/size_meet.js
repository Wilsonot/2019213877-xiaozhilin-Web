//负责管理体积碰撞
/*初版
坦克：坦克之间在相互遇见的时候不可以移动*/
//己方坦克碰撞检测
function tank_size_meet() {
        //边界检测
        if (tank.positionX <= 0) tank.mitL = true;
        else if (tank.positionX >= 940) tank.mitR = true;
        if (tank.positionY <= 0) tank.mitU = true;
        else if (tank.positionY >= 640) tank.mitD = true;
        //敌方坦克碰撞
        for (let i = 0; i < enemas.length; i++) {
            if (enemas[i].exit == true&&tank.positionX - enemas[i].positionX <= 70 && tank.positionX - enemas[i].positionX >= 0 && tank.positionY - enemas[i].positionY <= 60 && tank.positionY - enemas[i].positionY >= -60) tank.mitL = true;
            if (enemas[i].exit == true&&tank.positionX - enemas[i].positionX >= -70 && tank.positionX - enemas[i].positionX <= 0 && tank.positionY - enemas[i].positionY <= 60 && tank.positionY - enemas[i].positionY >= -60) tank.mitR = true;
            if (enemas[i].exit == true&&tank.positionY - enemas[i].positionY <= 70 && tank.positionY - enemas[i].positionY >= 70 && tank.positionX - enemas[i].positionX <= 60 && tank.positionX - enemas[i].positionX >= -60) tank.mitU = true;
            if (enemas[i].exit == true&&tank.positionY - enemas[i].positionY >= -70 && tank.positionY - enemas[i].positionY <= 0 && tank.positionX - enemas[i].positionX <= 60 && tank.positionX - enemas[i].positionX >= -60) tank.mitD = true;
        }
}
//敌方坦克碰撞检测
function enemy_size_meet(i) {

        //敌方之间的坦克碰撞
        for(let j = 0;j < enemas.length;j++){
            //边境检测
            if (enemas[j].positionX <= 0) enemas[j].mitL = true;
            else if (enemas[j].positionX >= 930) enemas[j].mitR = true;
            if (enemas[j].positionY <= 0) enemas[j].mitU = true;
            else if (enemas[j].positionY >= 630) enemas[j].mitD = true;
            //坦克碰撞
            if(j != i && enemas[j].exit == true){
                if(enemas[i].positionX - enemas[j].positionX <= 70 && enemas[i].positionX - enemas[j].positionX >= 0 &&enemas[i].positionY - enemas[j].positionY <= 60 && enemas[i].positionY - enemas[j].positionY >= -60 ) enemas[i].mitL = true;
                if(enemas[i].positionX - enemas[j].positionX >= -70 && enemas[i].positionX - enemas[j].positionX <= 0 && enemas[i].positionY - enemas[j].positionY <= 60 && enemas[i].positionY - enemas[j].positionY >= -60) enemas[i].mitR = true;
                if(enemas[i].positionY - enemas[j].positionY <= 70 && enemas[i].positionY - enemas[j].positionY >= 0 && enemas[i].positionX - enemas[j].positionX <= 60 && enemas[i].positionX - enemas[j].positionX >= -60)  enemas[i].mitU = true;
                if(enemas[i].positionY - enemas[j].positionY >= -70 && enemas[i].positionY - enemas[j].positionY <= 0 && enemas[i].positionX - enemas[j].positionX <= 60 && enemas[i].positionX - enemas[j].positionX >= -60) enemas[i].mitD = true;
            }
        }
        //敌方与己方之间的坦克碰撞
        if(tank.positionX - enemas[i].positionX <= 70 &&tank.positionX - enemas[i].positionX >= 0 && tank.positionY - enemas[i].positionY <= 60 && tank.positionY - enemas[i].positionY >= -60 ) enemas[i].mitR = true;
        if(tank.positionX - enemas[i].positionX >= -70 && tank.positionX - enemas[i].positionX <= 0 && tank.positionY - enemas[i].positionY <= 60 && tank.positionY - enemas[i].positionY >= -60) enemas[i].mitL = true;
        if(tank.positionY - enemas[i].positionY <= 70 && tank.positionY - enemas[i].positionY >= 70 && tank.positionX - enemas[i].positionX <= 60 && tank.positionX - enemas[i].positionX >= -60)  enemas[i].mitD = true;
        if(tank.positionY - enemas[i].positionY >= -70 && tank.positionY - enemas[i].positionY <= 0 && tank.positionX - enemas[i].positionX <= 60 && tank.positionX - enemas[i].positionX >= -60) enemas[i].mitU = true;


}