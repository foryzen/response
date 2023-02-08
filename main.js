document.addEventListener('keypress',foryzen)

var time01 = 0
var time02 = 0
var time03 = 0
var time04 = 0
var time05 = 0

var count01 = 0
var count02 = 0
var count03 = 0
var count04 = 0
var count05 = 0

function start(){
    foryzen(1)
}

function foryzen(e){
    if(e.code=='Enter'||e==1){
        if(sc('input01').value=='s'||e==1){
            setTimeout(a,4500)
            sc('text').innerHTML = '3'
            setTimeout(()=>{sc('text').innerHTML = '2'},1000)
            setTimeout(()=>{sc('text').innerHTML = '1'},2000)
            setTimeout(()=>{sc('text').innerHTML = ''},3000)
            sc('input01').value = ''

            time01 = 0
            time02 = 0
            time03 = 0
            time04 = 0
            time05 = 0
            
            count01 = 0
            count02 = 0
            count03 = 0
            count04 = 0
            count05 = 0
        }else{
            var input = sc('input01').value
            sc('input01').value = ''
        }
    }
}

function a(){
    sc('main').innerHTML = '<div class="cls01" onclick="tap1()"></div>'
    timer01()
}

function tap1(){
    count01=1
    sc('main').innerHTML = ''
    setTimeout(()=>{sc('main').innerHTML = '<div class="cls01" onclick="tap2()"></div>';timer02()},2200)
}

function tap2(){
    count02=1
    sc('main').innerHTML = ''
    setTimeout(()=>{sc('main').innerHTML = '<div class="cls01" onclick="tap3()"></div>';timer03()},2800)
}

function tap3(){
    count03=1
    sc('main').innerHTML = ''
    setTimeout(()=>{sc('main').innerHTML = '<div class="cls01" onclick="end()"></div>';timer04()},1000)
}

function end(){
    count04=1
    var avg = (time01+time02+time03+time04)/4
    sc('text').innerHTML = 'ms('+time01+','+time02+','+time03+','+time04+')'+'avg('+avg+'ms)'
    sc('main').innerHTML = ''
}

function timer01(){
    if(count01==0){
        time01++
        sc('text').innerHTML = time01+'ms'
        timer_loop(1)
    }
}

function timer02(){
    if(count02==0){
        time02++
        sc('text').innerHTML = 'ms('+time01+','+time02+')'
        timer_loop(2)
    }
}

function timer03(){
    if(count03==0){
        time03++
        sc('text').innerHTML = 'ms('+time01+','+time02+','+time03+')'
        timer_loop(3)
    }
}

function timer04(){
    if(count04==0){
        time04++
        sc('text').innerHTML = 'ms('+time01+','+time02+','+time03+','+time04+')'
        timer_loop(4)
    }
}

function timer_loop(x){
    if(x==1){
        setTimeout(timer01,1)
    }else if(x==2){
        setTimeout(timer02,1)
    }else if(x==3){
        setTimeout(timer03,1)
    }else if(x==4){
        setTimeout(timer04,1)
    }
}

function sc(x){
    return document.getElementById(x)
}