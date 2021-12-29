//十分糟糕的实现代码，不够简洁，需要改进
const Teacher2 = ["郭晶蕾","张连发","喻萤","金汉均","喻萤","吕惠东","孙正国","涂新辉","罗立群","金汉均","郭晶蕾"];
const Teacher = ["涂新辉","张连发","喻萤","金汉均","喻萤","吕惠东","孙正国","涂新辉","罗立群","金汉均","郭晶蕾"];
    const Time = ["8:00~9:40","8:00~9:40","8:00~9:40","10:10~11:50","10:10~11:50","10:10~11:50","14:00~15:40","14:00~15:40","16:10~17:50","16:10~17:50","16:10~17:50"]
const Location2 = ["n211","n112","n213","n113","n213","n223","n301","n108","8108","n113","n213"]
const Location = ["n108","n112","n213","n113","n213","n223","n301","n108","8108","n113","n213"]
    id = ["1","2","3","4","5","6","7","8","9","10","11"]
const week = document.getElementById('mp')
const te = document.getElementById('teacher');
const ti = document.getElementById('time');
const lo = document.getElementById('location');

    function clickbutton1(event){
        const course1 = document.getElementById('c1')
        const course2 = document.getElementById('c10')
        course1.innerHTML = '编译原理'
        course2.innerHTML = '微机原理'
        const botton2 = document.getElementById('mp')
        const botton1 = event.currentTarget;
        botton1.style.backgroundColor = '#FF0000';
        botton2.style.backgroundColor = '#FAF0E6';

        for(let i = 0;i < 11;i++){
            function mouseover(event) {
                const course = event.currentTarget; //必须要
                if(course.innerHTML != ''){
                    te.innerHTML = "任课教师："+Teacher2[i];
                    ti.innerHTML = "上课时间："+Time[i];
                    lo.innerHTML = "上课地点："+Location2[i];}
            }
            function mouseout(event) {
                const course = event.currentTarget; //必须要
                if(course.innerHTML != ''){
                    te.innerHTML = "任课教师："+'';
                    ti.innerHTML = "上课时间："+'';
                    lo.innerHTML = "上课地点："+'';}
            }
            const course = document.getElementById('c'+id[i]);
            course.addEventListener('mouseover',mouseover)
            course.addEventListener('mouseout',mouseout)
        }
    }

    function clickbutton2(event){
        const course1 = document.getElementById('c1')
        const course2 = document.getElementById('c10')
        course1.innerHTML = 'Web程序设计'
        course2.innerHTML = ''
        const botton1 = document.getElementById('np')
        const botton2 = event.currentTarget;
        botton2.style.backgroundColor = '#FF0000';
        botton1.style.backgroundColor = '#FAF0E6';

        for(let i = 0;i < 11;i++){
            function mouseover(event) {
                const course = event.currentTarget; //必须要
                if(course.innerHTML != ''){
                    te.innerHTML = "任课教师："+Teacher[i];
                    ti.innerHTML = "上课时间："+Time[i];
                    lo.innerHTML = "上课地点："+Location[i];}
            }
            function mouseout(event) {
                const course = event.currentTarget; //必须要
                if(course.innerHTML != ''){
                    te.innerHTML = "任课教师："+'';
                    ti.innerHTML = "上课时间："+'';
                    lo.innerHTML = "上课地点："+'';}
            }
            const course = document.getElementById('c'+id[i]);
            course.addEventListener('mouseover',mouseover)
            course.addEventListener('mouseout',mouseout)
        }
    }
    const botton2 = document.getElementById('mp')
    const botton1 = document.getElementById('np')
    botton1.addEventListener('click',clickbutton1)
    botton2.addEventListener('click',clickbutton2)