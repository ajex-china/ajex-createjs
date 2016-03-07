/**
 * Created by Administrator on 2015/10/10.
 */
//main.js
var canvas,img,stage,loadPic,model,modelData,container,loadingView,tweenLength,viewList,currentView,moveView,homeView,contentView1,contentView2,contentView3,contentView4,contentView5,contentView6,contentView7,contentView8,codepic,stageWidth,stageHeight,stageScale;
var isStartTouch = false;
var isloadInit = false;
model = new createjs.EventDispatcher();
modelData = {};
stageWidth =  document.documentElement.clientWidth;
stageHeight = document.documentElement.clientHeight;
stageScale = stageWidth/(750/2);
loadPic = document.getElementById("loadPic");
loadPic.style.width =  750/2*stageScale + 'px';
loadPic.style.height = 1206/2*stageScale + 'px';
canvas = document.getElementById("mainView");
canvas.style.width = 750/2*stageScale + 'px';
canvas.style.height = 1206/2*stageScale + 'px';
function init() {
//    document.getElementById('loadTxt').style.display='none';
//    document.getElementById('loadTxt').innerHTML="";
    images = images||{};
    stage = new createjs.Stage(canvas);
//    loadingComplete();
    img = document.getElementById("img");
    codepic =  document.getElementById("codepic");
    codepic.style.left = 211/2*stageScale + 'px';
    codepic.style.top = 451/2*stageScale + 'px';
    codepic.style.width = 163*stageScale + 'px';
    codepic.style.height = 174*stageScale + 'px';
    container = new createjs.Container();
    stage.addChild(container);
    createjs.Touch.enable(stage);

    var loader = new createjs.LoadQueue(true);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", loadLoadingComplete);
    loader.loadManifest(lib.properties.loadfest);

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stageBreakHandler);

}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function loadLoadingComplete(event){
    event.currentTarget.removeEventListener("fileload",handleFileLoad);
    event.currentTarget.removeEventListener("complete",loadLoadingComplete);
    loadingView = new View.LoadingView();
    stage.addChild(loadingView);
    var loader = new createjs.LoadQueue(true);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress",loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler);
    loader.loadManifest(lib.properties.manifest);
    isloadInit = true;
    loadPic.style.display='none';
//    setTimeout(nonePicHandler,1000)

}
//function nonePicHandler()
//{
//    loadPic.style.display='none';
//}
function loadProgressHandler(event)
{
    loadingView.back.bar.gotoAndStop(Math.floor(event.progress*99));
//    loadingView.back.icon.txt.text = Math.floor(event.progress*99).toString() + "%";
}
function loadCompleteHandler(event)
{
    event.currentTarget.removeEventListener("fileload",handleFileLoad);
    event.currentTarget.removeEventListener("progress",loadProgressHandler);
    event.currentTarget.removeEventListener("complete",loadCompleteHandler);
    if(loadingView.parent) loadingView.parent.removeChild(loadingView);

    homeView = new View.HomeView();
    container.addChild(homeView);
    homeView.back.gotoAndPlay(1);
    currentView = homeView;

    contentView1 = new View.ContentView1();
    contentView2 = new View.ContentView2()
    contentView3 = new View.ContentView3()
    contentView4 = new View.ContentView4()
    contentView5 = new View.ContentView5()
    contentView6 = new View.ContentView6()
    contentView7 = new View.ContentView7()
    contentView8 = new View.ContentView8();

    viewList = [homeView,contentView1,contentView2,contentView3,contentView4,contentView5,contentView6,contentView7,contentView8];
    tweenLength = 9;
    isStartTouch = true;

    img.src = "images/fenxiang.jpg";
    img.style.width = '1px';
    img.style.height = '1px';
}
function stageBreakHandler(event)
{
    if(stageWidth!=document.documentElement.clientWidth||stageHeight!= document.documentElement.clientHeight)
    {
        stageWidth =  document.documentElement.clientWidth;
        stageHeight = document.documentElement.clientHeight;
        stageScale = stageWidth/(750/2);

        canvas.style.width = 750/2*stageScale + 'px';
        canvas.style.height = 1206/2*stageScale + 'px';

        codepic.style.left = 211/2*stageScale + 'px';
        codepic.style.top = 451/2*stageScale + 'px';
        codepic.style.width = 163*stageScale + 'px';
        codepic.style.height = 174*stageScale + 'px';
    }
    stage.update();
}
//View
var View = {};
View.index = 0;
View.isTween = false;
View.changeView = function changeView(arrow,index,force)
{
    if(View.isTween) return;
    if(View.index == index) return;
    moveView = viewList[index];
    container.addChild(moveView);
    if(arrow = "down")
    {
        moveView.y = 1206;
//        changeHandler(arrow);
//        createjs.Tween.get(view).to({y:0},500);
//        createjs.Tween.get(currentView).to({y:-stageHeight},500).call(delayComplete);
    }
    else
    {
        moveView.y = -1206;
//        createjs.Tween.get(view).to({y:0},500);
//        createjs.Tween.get(currentView).to({y:stageHeight},500).call(delayComplete);
    }
    View.changeHandler(arrow,index,force);
};
View.changeHandler = function changeHandler(arrow,index,force)
{
    if((index < 0 || index > tweenLength)&&force!=true) return;
    View.isTween = true;
    View.index = index;
    var bi;
    if(arrow == "down")
    {
        bi = Math.abs((1206 - Math.abs(currentView.y))/1206);
        //bi = Math.abs(currentView.y/stageHeight);
        createjs.Tween.get(moveView).to({y:0},500*bi);
        createjs.Tween.get(currentView).to({y:-1206},500*bi).call(View.delayComplete);
    }
    else
    {

        bi = Math.abs((1206 - Math.abs(currentView.y))/1206);
        createjs.Tween.get(moveView).to({y:0},500*bi);
        createjs.Tween.get(currentView).to({y:1206},500*bi).call(View.delayComplete);
    }
   // console.log("currentView.y:" + currentView.y);
    View.bi = bi;
}
View.delayComplete = function delayComplete()
{
    View.isTween = false;
    if(currentView.back.gotoAndStop)
    {
        currentView.back.gotoAndStop(0);
    }
    if(currentView.parent)
    {
        currentView.parent.removeChild(currentView)
    }
    currentView = viewList[View.index];
    if(currentView.back.gotoAndPlay)
    {
        currentView.back.gotoAndPlay(1);
    }
    View.codeHandler();
}
View.resumeHandler = function resumeHandler(arrow)
{
    if(arrow == "down")
    {
        View.bi = Math.abs(currentView.y/1206);
        createjs.Tween.get(currentView).to({y:0},500*View.bi);
        createjs.Tween.get(moveView).to({y:-1206},500*View.bi).call(View.resumeComplete);
    }
    else
    {
        View.bi = Math.abs(currentView.y/1206);
        createjs.Tween.get(currentView).to({y:0},500*View.bi);
        createjs.Tween.get(moveView).to({y:1206},500*View.bi).call(View.resumeComplete);
    }
};
View.resumeComplete = function resumeComplete()
{
    if(moveView)
    {
        if(moveView.parent) moveView.parent.removeChild(moveView);
    }
    View.codeHandler();
};
View.codeHandler = function codeHandler()
{
    if(codepic)
    {
        if(View.index == 8)
        {
            codepic.style.display = "block";
//            codepic.style.left = 269/2*stageScale + 'px';
//            codepic.style.top = 527/2*stageScale + 'px';
        }
        else
        {
            codepic.style.display = "none";
        }
    }
};
//LoadingView
(function() {
    "use strict";
    function LoadingView(){
        this.Container_constructor();

        this.back = new lib.loadingBar();
        this.addChild(this.back);
    }
    var p = createjs.extend(LoadingView,createjs.Container);
    View.LoadingView = createjs.promote(LoadingView, "Container");
}());
//HomeView
(function() {
    "use strict";
    function HomeView(){
        this.Container_constructor();

        this.back = new lib.home();
        this.addChild(this.back);
    }
    var p = createjs.extend(HomeView,createjs.Container);
    View.HomeView = createjs.promote(HomeView, "Container");
}());
//ContentView1
(function() {
    "use strict";
    function ContentView1(){
        this.Container_constructor();

        this.back = new lib.p1();
        this.addChild(this.back);
    }
    var p = createjs.extend(ContentView1,createjs.Container);
    View.ContentView1 = createjs.promote(ContentView1, "Container");
}());
//ContentView2
(function() {
    "use strict";
    function ContentView2(){
        this.Container_constructor();

        this.back = new lib.p2();
        this.addChild(this.back);
//        var _this = this;
//        this.back.btn.addEventListener("mousedown",function (event){
//            _this.back.play();
//        })
    }
    var p = createjs.extend(ContentView2,createjs.Container);
    View.ContentView2 = createjs.promote(ContentView2, "Container");
}());
//ContentView3
(function() {
    "use strict";
    function ContentView3(){
        this.Container_constructor();

        this.back = new lib.p3();
        this.addChild(this.back);
//        var _this = this;
//        this.back.btn.addEventListener("mousedown",function (event){
//            _this.back.play();
//        })
    }
    var p = createjs.extend(ContentView3,createjs.Container);
    View.ContentView3 = createjs.promote(ContentView3, "Container");
}());
//ContentView4
(function() {
    "use strict";
    function ContentView4(){
        this.Container_constructor();

        this.back = new lib.p4();
        this.addChild(this.back);
//        var _this = this;
//        this.back.btn.addEventListener("mousedown",function (event){
//            _this.back.play();
//        })
    }
    var p = createjs.extend(ContentView4,createjs.Container);
    View.ContentView4 = createjs.promote(ContentView4, "Container");
}());
//ContentView5
(function() {
    "use strict";
    function ContentView5(){
        this.Container_constructor();

        this.back = new lib.p5();
        this.addChild(this.back);
//        var _this = this;
//        this.back.btn.addEventListener("mousedown",function (event){
//            _this.back.play();
//        })
    }
    var p = createjs.extend(ContentView5,createjs.Container);
    View.ContentView5 = createjs.promote(ContentView5, "Container");
}());
//ContentView6
(function() {
    "use strict";
    function ContentView6(){
        this.Container_constructor();

        this.back = new lib.p6();
        this.addChild(this.back);
//        var _this = this;
//        this.back.btn.addEventListener("mousedown",function (event){
//            _this.back.play();
//        })
    }
    var p = createjs.extend(ContentView6,createjs.Container);
    View.ContentView6 = createjs.promote(ContentView6, "Container");
}());
//ContentView7
(function() {
    "use strict";
    function ContentView7(){
        this.Container_constructor();

        this.back = new lib.p7();
        this.addChild(this.back);
    }
    var p = createjs.extend(ContentView7,createjs.Container);
    View.ContentView7 = createjs.promote(ContentView7, "Container");
}());
//ContentView8
(function() {
    "use strict";
    function ContentView8(){
        this.Container_constructor();

        this.back = new lib.p8();
        this.addChild(this.back);
    }
    var p = createjs.extend(ContentView8,createjs.Container);
    View.ContentView8 = createjs.promote(ContentView8, "Container");
}());
//touch
var mx = 0;
var my = 0;
var cx = 0;
var cy = 0;
canvas.addEventListener('touchstart',function(event){
    if(!isStartTouch) return;
    if(View.isTween) return;

    event.preventDefault();
    var touch = event.targetTouches[0];
    mx = touch.pageX;
    my = touch.pageY;
    cx = container.x;
    cy = container.y;
    if(View.index == 8)
    {
        codepic.style.display = "none";
    }
}, false);

//var x = 0;
//var y = 0;
//var i = 0;

var addX = 0;
var addY = 0;

canvas.addEventListener('touchmove', function(event) {
    if(!isStartTouch) return;
    // 如果这个元素的位置内只有一个手指的话
    if(View.isTween) return;
    if (event.targetTouches.length == 1) {
        event.preventDefault();// 阻止浏览器默认事件，重要
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置

        addX = touch.pageX - mx;
        addY = touch.pageY - my;
//        if(View.index == 6)
//        {
//            endViewMoveHandler(addY);
//            return;
//        }
        touchMoveHandler(addY);
//        i++;
//        x =  touch.pageX - mx + cx;
//        y = touch.pageY - my + cy;
        // con.x = x;
        //con.y = y;
    }
}, false);

canvas.addEventListener('touchend', function(event) {
    if(!isStartTouch) return;
    if(View.isTween) return;
    var index = View.index;
//    if(currentView.y != 0&&currentView.y > -stageHeight/2)
//    {
//
//    }
//    else if(currentView.y != 0&&currentView.y < stageHeight/2)
//    {
//
//    }
    if(currentView.y > 0)
    {
        if(currentView.y >  100)
        {
            View.changeHandler("up",index - 1);
        }
        else
        {
            View.resumeHandler("down");
        }
    }
    else if(currentView.y < 0)
    {
        if(currentView.y < - 100)
        {
            View.changeHandler("down",index + 1);
        }
        else
        {
            View.resumeHandler("up");
        }
    }
}, false);



function touchMoveHandler(moveNum)
{
    if(!isStartTouch) return;
    if(View.isTween) return;
    var index = View.index;
    if(index > tweenLength) return;
    var nn = 0;

    if(moveNum > 0 && index > 0)
    {
        moveView  = viewList[index-1  ];
        nn = - 1206;
        if(!moveView.parent)
        {
            moveView.y = - 1206;
            container.addChild(moveView);
        }
        if(moveView)
        {
            moveView.y =cy +  moveNum + nn;
            currentView.y =cy + moveNum;
        }
    }
    else if(moveNum < 0 && index < tweenLength)
    {
        moveView  = viewList[ index+1 ];
        nn = 1206
        if(moveView)
        {
            if(!moveView.parent)
            {
                moveView.y =  1206;
                container.addChild(moveView);
            }

            moveView.y =cy +  moveNum + nn;
            currentView.y =cy + moveNum;
        }

    }

}
//var endTop;
//function endViewMoveHandler(moveNum)
//{
//    endTop = moveNum;
//    if(moveNum < 0)
//    {
//        endView.style.top =(1206 + cy +  moveNum)/2 + 'px';
//        console.log(endView.style.top);
//    }
//}
//function endViewTouchEndHandler()
//{
//    var bi;
//    if(endTop > 0)
//    {
//        if(endTop >  50)
//        {
//
//        }
//        else
//        {
//
//        }
//    }
//    else if(endTop < 0)
//    {
//        if(endTop < - 50)
//        {
//            bi = Math.abs((1206/2 - Math.abs(endTop))/(1206/2));
//            //bi = Math.abs(currentView.y/stageHeight);
//            createjs.Tween.get(endView).to({y:0},500*bi);
//
//        }
//        else
//        {
//
//        }
//    }
//}