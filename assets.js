(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 30,
	color: "#FFFFFF",
    loadfest: [
        {src:"images/loadbackpic.jpg", id:"loadbackpic"},
        {src:"images/loadingtiao.jpg", id:"loadingtiao"},
        {src:"images/xiongmao2.png", id:"xiongmao2"}
    ],
	manifest: [
		{src:"images/_01_0000_logo01.png", id:"_01_0000_logo01"},
		{src:"images/_01_0000_text01_01.png", id:"_01_0000_text01_01"},
		{src:"images/_01_0001_rocket.png", id:"_01_0001_rocket"},
		{src:"images/_01_0001_text01_02.png", id:"_01_0001_text01_02"},
		{src:"images/_01_0002_rocketfire.png", id:"_01_0002_rocketfire"},
		{src:"images/_01_0002_text01_03.png", id:"_01_0002_text01_03"},
		{src:"images/_01_0003_DREAM.png", id:"_01_0003_DREAM"},
		{src:"images/_01_0005_plane.png", id:"_01_0005_plane"},
		{src:"images/_01_0006_BJ.jpg", id:"_01_0006_BJ"},
		{src:"images/_02_0000_anniu.png", id:"_02_0000_anniu"},
		{src:"images/_02_0000_xiaoshuo.png", id:"_02_0000_xiaoshuo"},
		{src:"images/_02_0001_logo02.png", id:"_02_0001_logo02"},
		{src:"images/_02_0001_ren.png", id:"_02_0001_ren"},
		{src:"images/_02_0001_text02_01.png", id:"_02_0001_text02_01"},
		{src:"images/_02_0002_PRODUCT.png", id:"_02_0002_PRODUCT"},
		{src:"images/_02_0002_text02_02.png", id:"_02_0002_text02_02"},
		{src:"images/_02_0002_tu01.png", id:"_02_0002_tu01"},
		{src:"images/_02_0003_bj_gai.jpg", id:"_02_0003_bj_gai"},
		{src:"images/_02_0003_jian.png", id:"_02_0003_jian"},
		{src:"images/_02_0003_text02_03.png", id:"_02_0003_text02_03"},
		{src:"images/_02_0004_text02_04.png", id:"_02_0004_text02_04"},
		{src:"images/_03_0000_logo03.png", id:"_03_0000_logo03"},
		{src:"images/_03_0000_text03_01.png", id:"_03_0000_text03_01"},
		{src:"images/_03_0001_sanjiao.png", id:"_03_0001_sanjiao"},
		{src:"images/_03_0001_text03_02.png", id:"_03_0001_text03_02"},
		{src:"images/_03_0002_bj03.jpg", id:"_03_0002_bj03"},
		{src:"images/_03_0002_success.png", id:"_03_0002_success"},
		{src:"images/_03_0002_text03_03.png", id:"_03_0002_text03_03"},
		{src:"images/_03_0003_text03_04.png", id:"_03_0003_text03_04"},
		{src:"images/_04_0000_logo04.png", id:"_04_0000_logo04"},
		{src:"images/_04_0000_text04c.png", id:"_04_0000_text04c"},
		{src:"images/_04_0001_spirit.png", id:"_04_0001_spirit"},
		{src:"images/_04_0002_spirit.png", id:"_04_0002_spirit"},
		{src:"images/_04_0003_shoubing.png", id:"_04_0003_shoubing"},
		{src:"images/_04_0004_bj.png", id:"_04_0004_bj"},
		{src:"images/_05_0000_text05_01.png", id:"_05_0000_text05_01"},
		{src:"images/_05_0001_text05_02.png", id:"_05_0001_text05_02"},
		{src:"images/_05_0002_text05_03.png", id:"_05_0002_text05_03"},
		{src:"images/_05_0003_text05_04.png", id:"_05_0003_text05_04"},
		{src:"images/_06_0000_text06_01.png", id:"_06_0000_text06_01"},
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/BG1.jpg", id:"BG1"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap10_1.png", id:"Bitmap10_1"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap11_1.png", id:"Bitmap11_1"},
		{src:"images/Bitmap14.png", id:"Bitmap14"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap3_1.png", id:"Bitmap3_1"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap4_1.png", id:"Bitmap4_1"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap8_1.png", id:"Bitmap8_1"},
		{src:"images/Bitmap9.png", id:"Bitmap9"},
		{src:"images/Bitmap9_1.png", id:"Bitmap9_1"},
		{src:"images/dengpao.png", id:"dengpao"},
		{src:"images/dengpao_1.png", id:"dengpao_1"},
		{src:"images/end.jpg", id:"end"},
		{src:"images/fmsdt.jpg", id:"fmsdt"},
		{src:"images/loadbackpic.jpg", id:"loadbackpic"},
		{src:"images/loadingtiao.jpg", id:"loadingtiao"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pagepic7.jpg", id:"pagepic7"},
		{src:"images/renwu.jpg", id:"renwu"},
		{src:"images/shandian.png", id:"shandian"},
		{src:"images/shandian_1.png", id:"shandian_1"},
		{src:"images/shandian_2.png", id:"shandian_2"},
		{src:"images/text05gai.png", id:"text05gai"},
		{src:"images/xiongmao2.png", id:"xiongmao2"}
	]
};



// symbols:



(lib._01_0000_logo01 = function() {
	this.initialize(img._01_0000_logo01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,335);


(lib._01_0000_text01_01 = function() {
	this.initialize(img._01_0000_text01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,90);


(lib._01_0001_rocket = function() {
	this.initialize(img._01_0001_rocket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,220);


(lib._01_0001_text01_02 = function() {
	this.initialize(img._01_0001_text01_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,90);


(lib._01_0002_rocketfire = function() {
	this.initialize(img._01_0002_rocketfire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,124);


(lib._01_0002_text01_03 = function() {
	this.initialize(img._01_0002_text01_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,555,146);


(lib._01_0003_DREAM = function() {
	this.initialize(img._01_0003_DREAM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,394);


(lib._01_0005_plane = function() {
	this.initialize(img._01_0005_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,414);


(lib._01_0006_BJ = function() {
	this.initialize(img._01_0006_BJ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib._02_0000_anniu = function() {
	this.initialize(img._02_0000_anniu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,237);


(lib._02_0000_xiaoshuo = function() {
	this.initialize(img._02_0000_xiaoshuo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,65);


(lib._02_0001_logo02 = function() {
	this.initialize(img._02_0001_logo02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,181);


(lib._02_0001_ren = function() {
	this.initialize(img._02_0001_ren);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,290);


(lib._02_0001_text02_01 = function() {
	this.initialize(img._02_0001_text02_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,137);


(lib._02_0002_PRODUCT = function() {
	this.initialize(img._02_0002_PRODUCT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,286);


(lib._02_0002_text02_02 = function() {
	this.initialize(img._02_0002_text02_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,621,137);


(lib._02_0002_tu01 = function() {
	this.initialize(img._02_0002_tu01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,140);


(lib._02_0003_bj_gai = function() {
	this.initialize(img._02_0003_bj_gai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib._02_0003_jian = function() {
	this.initialize(img._02_0003_jian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,312);


(lib._02_0003_text02_03 = function() {
	this.initialize(img._02_0003_text02_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,137);


(lib._02_0004_text02_04 = function() {
	this.initialize(img._02_0004_text02_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,83);


(lib._03_0000_logo03 = function() {
	this.initialize(img._03_0000_logo03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,309);


(lib._03_0000_text03_01 = function() {
	this.initialize(img._03_0000_text03_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,487,85);


(lib._03_0001_sanjiao = function() {
	this.initialize(img._03_0001_sanjiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,182);


(lib._03_0001_text03_02 = function() {
	this.initialize(img._03_0001_text03_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,85);


(lib._03_0002_bj03 = function() {
	this.initialize(img._03_0002_bj03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib._03_0002_success = function() {
	this.initialize(img._03_0002_success);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,175);


(lib._03_0002_text03_03 = function() {
	this.initialize(img._03_0002_text03_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,137);


(lib._03_0003_text03_04 = function() {
	this.initialize(img._03_0003_text03_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,487,83);


(lib._04_0000_logo04 = function() {
	this.initialize(img._04_0000_logo04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,677,172);


(lib._04_0000_text04c = function() {
	this.initialize(img._04_0000_text04c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,608,707);


(lib._04_0001_spirit = function() {
	this.initialize(img._04_0001_spirit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,318);


(lib._04_0002_spirit = function() {
	this.initialize(img._04_0002_spirit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,203);


(lib._04_0003_shoubing = function() {
	this.initialize(img._04_0003_shoubing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,113);


(lib._04_0004_bj = function() {
	this.initialize(img._04_0004_bj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib._05_0000_text05_01 = function() {
	this.initialize(img._05_0000_text05_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,136);


(lib._05_0001_text05_02 = function() {
	this.initialize(img._05_0001_text05_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,137);


(lib._05_0002_text05_03 = function() {
	this.initialize(img._05_0002_text05_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,136);


(lib._05_0003_text05_04 = function() {
	this.initialize(img._05_0003_text05_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,188);


(lib._06_0000_text06_01 = function() {
	this.initialize(img._06_0000_text06_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,656);


(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.BG1 = function() {
	this.initialize(img.BG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1205);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,123);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,5);


(lib.Bitmap10_1 = function() {
	this.initialize(img.Bitmap10_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,5);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,6);


(lib.Bitmap11_1 = function() {
	this.initialize(img.Bitmap11_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,6);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,575,68);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,179);


(lib.Bitmap3_1 = function() {
	this.initialize(img.Bitmap3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,179);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,86);


(lib.Bitmap4_1 = function() {
	this.initialize(img.Bitmap4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,86);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,403);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,181);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,79);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,67);


(lib.Bitmap8_1 = function() {
	this.initialize(img.Bitmap8_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,67);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,8);


(lib.Bitmap9_1 = function() {
	this.initialize(img.Bitmap9_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,8);


(lib.dengpao = function() {
	this.initialize(img.dengpao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,115);


(lib.dengpao_1 = function() {
	this.initialize(img.dengpao_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,115);


(lib.end = function() {
	this.initialize(img.end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.fmsdt = function() {
	this.initialize(img.fmsdt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,462);


(lib.loadbackpic = function() {
	this.initialize(img.loadbackpic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.loadingtiao = function() {
	this.initialize(img.loadingtiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,55);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,72);


(lib.pagepic7 = function() {
	this.initialize(img.pagepic7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.renwu = function() {
	this.initialize(img.renwu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,891);


(lib.shandian = function() {
	this.initialize(img.shandian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,193);


(lib.shandian_1 = function() {
	this.initialize(img.shandian_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,194);


(lib.shandian_2 = function() {
	this.initialize(img.shandian_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,194);


(lib.text05gai = function() {
	this.initialize(img.text05gai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,136);


(lib.xiongmao2 = function() {
	this.initialize(img.xiongmao2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,115);


(lib.xian = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147,67);


(lib.text01_04 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,209,111,0.8)").s().p("EgqFAjeQi5AAiDiKQiDiKAAjCMAAAg4OQAAjECDiJQCDiKC5AAMBULAAAQC5AACDCKQCDCJAADEMAAAA4OQAADCiDCKQiDCKi5AAg");
	this.shape.setTransform(314.1,227.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,628.3,454.1);


(lib.text01_03 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0002_text01_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,555,146);


(lib.text01_01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0000_text01_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,552,90);


(lib.text_01_02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0001_text01_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,554,90);


(lib.success = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._03_0002_success();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,361,175);


(lib.rocket = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0001_rocket();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214,220);


(lib.plane = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0005_plane();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,466,414);


(lib.ocketfire = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0002_rocketfire();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,124);


(lib.logo03 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib._03_0000_logo03();
	this.instance.setTransform(0,87);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,87,649,309);


(lib.logo_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0000_logo01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,474,335);


(lib.dream = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0003_DREAM();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,340,394);


(lib.BJ = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._01_0006_BJ();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.sj = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB902").s().p("Eg0igNCMBpFglJMgX+BkXgEgwSgMVMBLmA7EMAWdhdkg");
	this.shape.setTransform(336.4,321.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,672.8,642.5);


(lib.spirit = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._04_0001_spirit();

	this.instance_1 = new lib._04_0002_spirit();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,372,318);


(lib.logo04 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib._04_0000_logo04();
	this.instance.setTransform(-0.4,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,0,677,172);


(lib.logo02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0001_logo02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,654,181);


(lib.jian = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0003_jian();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,747,312);


(lib.game = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._04_0003_shoubing();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,177,113);


(lib.p8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.end();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.shandian_3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.shandian_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209,194);


(lib.IN = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,86);


(lib.dengmc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.dengpao();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,115);


(lib.chuangxingmc = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438,179);


(lib.元件17 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,6);


(lib.元件16 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,5);


(lib.元件15 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,8);


(lib.yonghu = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438,181);


(lib.shandian_4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.shandian();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,217,193);


(lib.qiqium = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,230,403);


(lib.cus = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,368,79);


(lib.xiongmao = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xiongmao2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,115);


(lib.sj_1 = function() {
	this.initialize();

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#406330").s().p("AirhVIFXAAIisCrg");
	this.shape_1.setTransform(17.3,8.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.5,17.3);


(lib.diandianmc = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#919191").s().p("AgLAMQgFgGAAgGQAAgFAFgGQAGgFAFAAQAGAAAGAFQAFAGAAAFQAAAGgFAGQgGAFgGAAQgFAAgGgFg");
	this.shape.setTransform(1.8,1.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.5,3.5);


(lib.闪电2 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A920").s().p("AoPguIBqh0IO1DaIhLBrg");
	this.shape.setTransform(103.1,108.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFDFC").s().p("AARipIBmhjIiDGkIhqB1g");
	this.shape_1.setTransform(62.2,76.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E799").s().p("AlpiyIBqh3IJpHxIhmBig");
	this.shape_2.setTransform(38,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D226").s().p("AjoFeICGmkIprnzIO+HHIieE3IJ7F1g");
	this.shape_3.setTransform(84.2,57.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,0.1,154.3,124.8);


(lib.闪电1 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3A920").s().p("AoPguIBqh0IO1DaIhLBrg");
	this.shape.setTransform(36.9,96.7,0.739,0.739,0,-16.8,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFDFC").s().p("AARipIBmhjIiDGkIhqB1g");
	this.shape_1.setTransform(59.2,65.6,0.739,0.739,0,-16.8,163.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E799").s().p("AlpiyIBqh3IJpHxIhmBig");
	this.shape_2.setTransform(66.3,27.2,0.739,0.739,0,-16.8,163.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D226").s().p("AjoFeICGmkIprnzIO+HHIieE3IJ7F1g");
	this.shape_3.setTransform(39.4,56.2,0.739,0.739,0,-16.8,163.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.6,87.4,117.4);


(lib.背景闪电 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.fmsdt();
	this.instance.setTransform(13.5,16);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.5,16,272,462);


(lib.人物照片 = function() {
	this.initialize();

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6+BGAIAAguIAEAAMAAAhRiIgEgHIAAAAIAAhLIe0AAIABgBIAAAAQAHgLABgSIAAAAIAAgUIAAAAQABgNAEgKIAAAAQANgdACg7IAAAAIAPhYIAAAAQAJg2ADgjIAAAAIAQhYIAAAAQAJg3AKghIAAAAIAghQIAAAAQAchLABgUIAAAAQAAgEgGgMIAAAAQgEgLAAgGIAAAAQgBgHADgKIAAAAIAAgDIAAAAIARg+IAAAAQAIggAEgaIAAAAIgCgHIAAAAIAFgQIAAAAIACgZIAAAAIAGgBIAAAAIAAAAIASg5IAAAAIAPgxIAAAAQAIgdAAgWIAAAAQgCg3ARgtIAAAAQAPgpAdgaIAAAAIAAgEIAAAAQAAgCAPgjIAAAAQAQgiAAgLIAAAAIgFgxIAAAAQAAgaAKgeIAAAAQAKgdAQgWIAAAAQAQgVALgdIAAAAIARg1IAAAAQAfhoApg4IAAAAQALgOAIgHIAAAAQAIgMAkgpIAAAAIA4hAIAAAAQAog2AxghIAAAAQA6glAmAPIAAAAQABABAAAAQAAAAAAAAQAAgBAAgBQAAgBAAgBIAAAAIAAgEIAAAAIABAAIAAAAQAIAAAAgJIAAAAQAAgGgNgiIAAAAIgPghIAAAAIAAgBIAAAAQgBgHgFgMIAAAAIACABIAAAAQgEgJgCgMIAAAAQgFgIgFgNIAAAAQgJgZAAgIIAAAAIgBAAQgLiBgOAAIAAAAQgHAAgCAIIAAAAIgBAJIAAAAIAAAFIAAABIAAAAIAAADIABAQIAAAAQACALAFAJIAAAAIAAANIgBAAIgJgvIAAAAIgEACIAAAAQgGgHgCgKIAAAAIgBgPIAAAAQAAgIAEgFIAAAAIgJguIAAAAQgDgIgCg+IAAAAQgBgVgFgOIAAAAQAGgfAAgGIAAAAQgDgvgNAAIAAAAQgFAAgLgnIAAAAQgKgkAAgHIAAAAIAFhCQAAgIgFgXIAAAAQgFgXAAgJIAAAAQAAgGAHgOIAAAAQAFgNAAgGIAAAAIgDgRIAAAAQgFgPAAgGIAAAAQAAgBAIgLIAAAAQAIgMAAgJIAAAAQAAgKAHgTIAAAAQAIgTAAgDIAAAAQAAgIgDgCIAAAAQADgEAAgCIAAAAIgBgGIAAAAIgTgBIAAAAIAMgLIAAAAQAIgHAAgGIAAAAQAAgDgGgGIAAAAIgVAAIAAAAIgIgBIgCgBIAAAAIAAgDIAAAAIgEgBIAAAAIAEAAIAAAAIAAgBQAAgGAUgDIAAAAQAPgCAMADIAAAAIAVgWIAAAAQAHgHgBgOIAAAAQABgJgHgHIAAAAQAGgFAHgIIAAAAQAIgKABgEIAAAAQgBgCgDgDIAAAAIgHgIIAAAAQATgDAPgWIAAAAQAOgTAAgNIAAAAQAAgIgKgIIAAAAQgMgJgNgCIAAAAIAOgDQAHAAAYAGIAAAAQAFAAANgRIAAAAQAMgRAAgGIAAAAQAAgQgSgJIAAAAIgLgEIAAAAIAEgDIAAAAQAGgFArAAIAAAAIAFgEIAAAAQABgBAAgEIAAAAIgBgHIAAAAQAfgMAAgLIAAAAIAAgEIgBgBIAAAAQAPgCAAgKIAAAAIABgPIAAAAQADgGAJgGIAAAAIAMgKIAAAAQAEgFAMgGIAAAAQALgGADgDIAAAAQAFgIAagUIAAAAIAFABQAEAAAFgBIAAAAQgEgGAAgGIAAAAQAAgJAJgDIAAAAQAFgCAUgDIAAAAIACgFIAAAAIgDgFIAAAAQgDgEAAgDIAAAAQAAgJAJAGIAAAAIAGAFIAAAAIARgJIAAAAQgCgEAAgDIAAAAQAAgKAKAFIAAAAIAEAEIAAAAIAggVIAAAAQArgeAygMIAAAAQAEgCADgFIAAAAQAHgEAVABIAAAAQARgLAcAAIAAAAQABABAAgGIAAAAIAAgDIAAAAIARAAIAAAAQARAAAzgMIAAAAIASgFIAAAAQABAFAFABIAAAAIAKgEIAAAAIAFABIAAAAIAUAAIAEgBIAAAAQACgCAAgEIAAAAIAAgCIAAAAIAOgGIAAAAQAIgEADgDIAAAAIAMAAIACAAIAAAAQAFAAACgCIAAAAQADACAFAAIAAAAQAEAAACgDIAAAAIABgDIAAAAIApgEIAAAAQADgBAEgFIAAAAQAEgDAEAAIAAAAQAcAAAoAWIAAAAQAoAWAbAAIAAAAQAJAAAWAHIAAAAQAPAFAJACIAAAAIAAABIAAAAQABAEAIAHIAAAAQAJAJAHAAIAAAAQAFAAgBgDIAAAAIABgFIgNgMIAAAAQAjABAcALIAAAAIgCADIAAAAQAGAOAlAaIAAAAIAEgBIAAAAIAFAGIAAAAQAHALAFAEIAAAAIACgBIACAHQAFAJAGACIAAAAIABADIAAAAIAHgCIABADQAEALAFAAIAAAAIACAEIAAAAIACAGIAAAAIAGAJIAAAAIAAABIAAAAQABAGACAAIAAAAQABAAABAAQAAAAAAAAQABAAgBAAQAAAAgBgBIAAAAIABgDIAAAAIABAAIAAAAQADAIAFAGIAAAAQABAJAFADIAAAAIACgBIAAAAIgBAOIAAAAQAAAEACABIAAAAIAFACIAAAAQAFgGACgKIAAAAIABAAIAAAAIAAALIABABIAAAAIgGAKIAAAAQgFALAAACIAAAAQAAACAGAGIAAAAIAGgLIAAAAIADgFIAAAAIAAAAQAAACAGAHIAAAAIACgCIAAAAIgBAHIAAAAIAAAAIAAACIAAAAIABACIAAAAIgDAKIAAAAIABAGIAAAAQABACAFADIAAAAIABgBIAAAAIAAABIAAAAQAAAFAGAHIAAAAIABABIAAAAQAMARAaAAIAAAAIABAAIAAAAIACABIAAAAQgEABABADIAAAAQAAACAAABQAAABAAAAQAAABAAAAQAAAAAAgBIAAAAQADADAGAAIAAAAIACAAIAAAAIgBABIAAAAIADAFIAAAAQADADADAAIAAAAIACgBIAAAAIAAgBIABgBIgEgFIAAAAIgDgCIAAAAIABgBIAAAAQAAABAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAAAQANAJAKAKIAAAAIgCAAIAAAAIgEgBIAAAAIAAABIAAAAQgMgIAAAFIAAAAIACADQADAEACAAIAAAAIAEgBIAAAAQABAFAHAAIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIAAAAIAAgBIAAAAIAJAJIAAAAQAGAIAjA8IAAAAIAqBFIAAAAIAEAHIAAAAIgCgCIAAAAIAAAFIAMAjIAAAAIATAxIAAAAQALAcAOAZIAAAAQAPAaAJAGIAAAAIABAFIAAAAQgDAEAAAFIAAAAQAAAGAFAGIAAAAQgBAdASA4IAAAAQASAzAFAAIAAAAQAKAAACAIIAAAAIAEASIAAAAQAEAMAHAEIAAAAIACAAIAAAAQAGACABAJIAAAAIgGgFIAAAAQgTgQgBALIAAAAQAAgCAZArIAAAAIgCgBQgIgFgDAAIAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAIAAABQACAIATARIAAAAIAFAEIAAAAIADAFIAAAAIAGAFIAAAAQADAGAAADIAAAAQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAIAAAAIgCAAIgDABIAAAAIgBADIAAAAIABAFIAAAAIgBAAIAAAAQgEgGgCAAIAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIAAAAIAAABIAAAAIgGgJIAAAAQgFgGgDAAIAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAIAAAAIAAAAIAAAAIAAAKQABADAKAMIAAAAIAKALIAAAAQACAGAEAGIAAAAIgBAJIAAAAQAAALALAxIAAAAIAGAZIAAAAQAPBHAABAIAAAAIAABMIAAAAQgCAjgMA1IAAAAQgOA5gMAaIAAAAQgOAegkAMIAAAAQgdAKgBAVIAAAAQAAAIBPAoIAAAAQBuA5AZAOIAAAAIBhBDIAAAAQAoAYAiAOIAAAAIAeASIAAAAQAcAQA1ALIAAAAQAlAHApASIAAAAIA3AbIAAAAQB3A5BcA0IAAAAQBFAoCsBWIAAAAIB4A8IAAAAICzCeQArAiA+A+IAAAAIBHBHIAAAAIAIANIAAAAIAcA7IAAAAQAtBcAMApIAAAAQAKAlAIApIAAAAIgBgCIAAAAIAFAgIAAAAIABgCIAAAAQAIA3AEA/IAAAAIAADfQACAMAAAjIAAAAIAAATIAAAAIAAALQgCAagCA2IAAAAIAAB8QgMA8ABBuIAAAAIaRAAIAAgKIAAAAQAKAEAHAGIAAAAQAFAEADAGIAAAAIAAAoMAAABSCIAGAAIAAAugEgAihDVIAAAOQACAEAFABIAAAAIAFgCIABgJIAAAAQAAgFgBgCIAAAAQgBgCgEAAIAAAAIgHABgEgB0hEOIAAAFQADAGAJAAIAAAAQAFAAAAgEIAAAAQgCgLgIgCIAAAAIgDAAIAAAAQgEAAAAAGgEgFrhE5QAIAJATAAIAAAAQADAAACgCIAAAAIADgGIAAAAQgRgIgJgCIAAAAIgDgBIAAAAQgHAAABAKgEA65gMwIAAgoQgDgGgFgEIAAAAIAOAAIAAAygEAgbgZ1IABADIAAAAIAAAAIgBgDgEANEgp/IgIgCIAAAAIADgBIAAAAQAFAAAAABIAAAAIABACIAAAAgEAIxgsPIABAAIAAAAIAKAGIAAAAIgLgGgEAHhgs3IgtgWIAAAAIAbALIAAAAIAXALIAAAAIADABIAAAAIABAEIAAAAIgJgFgEAHWg3MIACAAIAAAAIAAACIAAAAgEAHWg3WIAAgCIABADIAAAAIgBgBgEAFgg8PIAAgBIABACgEgRtg9fIAEgEIAAAAIgCAEIAAAAgEgRqg9mIACAAIAAABIAAAAgEgRIg+SIAGgCIAAAAIAAAAIgEAEIgCgCgEgQkg/XIAAgBIADABIAAAAIgBABIAAAAgEgQthACIgGgDIAAAAIABgBIAAAAIAFADIAAAAIAEADIAAAAIgEgCgEgQshAPIABgBIAAAAIAAABIAAAAIgBAAgEgPZhCCIAAgEIAAAAIAEAAIAAAAIgFAFIAAAAgEAByhCeIABABIAAAAIgBAAIAAgBgEABMhDcIABAAIAAAAIgBAAIAAABIAAgBgEgKPhE5IgLAFIAAAAIgmATIAAAAQAdgRAUgHgEgG4hFTIAAgBIAAAAIgCAAIAAAAIADgBIAAAAIABACIAAAAgEgE+hF8QgBgEATACIAAAAIgBAAIAAAAIgRAEIAAAAIAAgCg");
	mask.setTransform(375.6,447.3);

	// 图层 1
	this.instance = new lib.renwu();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,891);


(lib.图层29 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#462209").s().p("AKLQAIhZAVInTAAQhWgegyAgIlkgEQhWABhWhEIm0gCQgbAnhzAHIlhAAQhygLgogvQhQA+h/ASImKADIhzglIgKASIlZgGQiAgChPhaQhYhxA1iSIC0lAQgZhHACg9IA8jNQArhMBMgkQg1i2BehsIK1pkQAqgiBTgIIKwACQDIgGBbE0QAljVDSgNIJGAAQA0g+B/gYIF+ABQCgAYA3BnICZgGQA+gMA7AOIA7gSIG2gCQBEhPCAgSIGSgBQCFATA7BTIFwADQD2AjABDgIg6DOQg/BuhsASIg1C3QA6BkgFBHIhyF+QhHCKixgIQBCBdgEBUIg8DRQhGB0iJAZIo6ADQiKgShIh3QhmBvi1AcImDADg");
	this.shape.setTransform(298.8,105.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,597.7,210.7);


(lib.图层27副本 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1430B").s().p("ABcMpIC2ouIgnAAIkZIuIllAAIEbouIhdAAIAqiCIO6AAIgrCCIhrAAIiMGsIBrAAIgqCCgAZcMnICNmxImAAAIhXELQgaBLgzAtQg1AthEABIlyAAIAriBIBCAAQAgAAAVgWQAVgUAKgjIBnk6IjSAAIBhkoIZIAAIhhEoIjvAAIh/GHIClAAIgqCBgASrD1INxAAIAph+ItxAAgEgjPAMkIAriCIA4AAQAUAAASgNQASgNAHgVIB+mCIpbAAIAqiBIJcAAIAmhzIoWAAIAqiCIXDAAIgrCCIoZAAIgmBzIJfAAIgrCBIpeAAIiDGRQgYBEg9AvQg8AthFACgA3gMNIAvnOIFzAAIgvHOgEgq7AMNID9nOIFzAAIj9HOgAwCLkIHe24IJgAAImoUWQgZBFg9AtQg+AuhGACgArQJiIAgAAQATAAATgOQASgOAHgVICgnqIhPAAgAn2g4IBPAAICxocIhQAAgAGCBJIgmjEIndB1IAtiJIGYhmIgzkMIj0AQIAriBICxgMIggiqIGBAAIAbCPIGlgfIgrCEIlgAZIApDLIEBg/IgtCJIi7AuIAgCiIBXAAIgqB/gAQhhSICGmbIVZAAIhSD5QgYBFg8AuQg9AuhFABgAW3jTIJTAAQATgBATgOQASgOAIgUIAhhnIqCAAgAzljRIjTm6In6G6InEAAIKWpSIKhAAIEVJSgARHo5IAqiCIJcAAIAhhmIGVAAIghBmIJaAAIgqCCg");
	this.shape.setTransform(274.8,81);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,549.7,161.9);


(lib.图层28副本 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBA12").s().p("EgjJAH2IAAvrMBGTAAAIAAPrg");
	this.shape.setTransform(227.1,50,0.951,1.029,0,14.7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,454.2,100);


(lib.图层28 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26C06").s().p("EgjJAH2IAAvrMBGTAAAIAAPrg");
	this.shape.setTransform(227.1,50,0.951,1.029,0,14.7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,454.2,100);


(lib.电魂企业标志短横 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,177,72);


(lib.图层39 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB816").s().p("AjpESQhzABhQhRQhRhQAAhyQAAhxBRhQQBQhRBzAAIHUAAQBxAABRBRQBQBQAABxQAAByhQBQQhRBRhxgBg");
	this.shape.setTransform(51,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,55);


(lib.三角5 = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(572.7,508.5,2.72,2.72,-161.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,678.6,508.5);


(lib.三角4 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17C0F").s().p("Ai3hnIIlCHIrbBIg");
	this.shape.setTransform(72.5,65.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3D220").s().p("AkLl3IIXIeIi2DRg");
	this.shape_1.setTransform(27.2,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEB816").s().p("AgGDLIoZoeIQ/Kng");
	this.shape_2.setTransform(54.8,35);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,0.9,108.9,75.3);


(lib.三角3 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222,123);


(lib.三角2 = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-199.3,-12.1,1.748,1.748,-6.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-199.3,-57.3,410.6,258.8);


(lib.三角1 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37A538").s().p("AgXjyIHQCmItxE/g");
	this.shape.setTransform(44.2,70.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83C140").s().p("AChnaIAvHQImfHlg");
	this.shape_1.setTransform(20.9,47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56B432").s().p("AjQCUIgvnNIH/J0g");
	this.shape_2.setTransform(62.7,31.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88.4,95.1);


(lib.sanjiao = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._03_0001_sanjiao();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162,182);


(lib.tu01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0002_tu01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179,140);


(lib.text06_01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._06_0000_text06_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,602,656);


(lib.text06 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,218,139,0.8)").s().p("EAQuBDrQvhiEnvt5MgmZAAAQjJAAiOiMQiNiOAAjGMAAAhorQAAjHCNiNQCOiMDJgBMBZ3AAAQDJABCNCMQCOCNAADHMAAABorQAADGiOCOQiNCMjJAAMgkgAAAQg+JoMPGVIAnAUQh2gFhwgPg");
	this.shape.setTransform(336.1,435.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,672.2,870.2);


(lib.text05_04 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._05_0003_text05_04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,492,188);


(lib.text05_03 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._05_0002_text05_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,493,136);


(lib.text05_02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._05_0001_text05_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,493,137);


(lib.text05_01 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.text05gai();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,493,136);


(lib.text05 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,218,139,0.8)").s().p("EgF6A0FI+qAAQjGAAiNiMQiMiNAAjGMAAAhm1QAAjHCMiMQCNiNDGAAMBJJAAAQDGAACNCNQCMCMAADHMAAABm1QAADGiMCNQiNCMjGAAI+9AAQAaJOPYEOQiLAPiCAAQvtAAnatrg");
	this.shape.setTransform(282.1,420.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,564.2,841.6);


(lib.text04c = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._04_0000_text04c();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,608,707);


(lib.text04 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,218,139,0.8)").s().p("AvGm4IMWAAQENLANqCuQhQADhNAAQz3AAn5txg");
	this.shape.setTransform(389,824.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,209,111,0.8)").s().p("EAEjA89IsVAAMgl0AAAQjQgBiTiSQiTiUAAjQMAAAhqLQAAjRCTiTQCTiTDQAAMBbNAAAQDQAACTCTQCTCTAADRMAAABqLQAADQiTCUQiTCSjQABg");
	this.shape_1.setTransform(342.2,390.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,684.4,868.6);


(lib.text03_05 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,209,111,0.8)").s().p("AuzpJILvAAQhANLS4FHQ6Kihjdvxg");
	this.shape.setTransform(525,1089.3,1,1,0,0,0,94.9,58.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,209,111,0.8)").s().rr(-352.1,-321.1,704.2,642.2,53);
	this.shape_1.setTransform(374.8,972.1,0.827,0.91,0,0,0,-0.1,321.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(83.9,387.9,582.1,701.5);


(lib.text03_04 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._03_0003_text03_04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,487,83);


(lib.text03_03 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._03_0002_text03_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,488,137);


(lib.text03_02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._03_0001_text03_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,486,85);


(lib.text03_01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._03_0000_text03_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,487,85);


(lib.text02_05 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,209,111,0.8)").s().rr(-352.1,-321.1,704.2,642.2,53);
	this.shape.setTransform(376,675,0.98,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,209,111,0.8)").s().p("AwOrkINwAAQlGTMX0D9IgYAAQ/+AAgI3Jg");
	this.shape_1.setTransform(431,1070.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30.9,354,690.1,790.5);


(lib.text02_04 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0004_text02_04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,624,83);


(lib.text02_03 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0003_text02_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,625,137);


(lib.text02_02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0002_text02_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,621,137);


(lib.text02_01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0001_text02_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,625,137);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-49,-49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49,-49,98,98);


(lib.rocketZ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rocket
	this.instance = new lib.rocket();
	this.instance.setTransform(107,110,1,1,0,0,0,107,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:104,y:107},9).to({x:107,y:110},10).wait(1));

	// ocket-fire
	this.instance_1 = new lib.ocketfire();
	this.instance_1.setTransform(59.6,166,1,1,0,0,0,112.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9,scaleY:0.93,x:58.1,y:164.5},4).to({scaleX:1,scaleY:1,x:57.6,y:162},5).to({scaleX:0.86,scaleY:0.91,y:164.1},5).to({scaleX:1,scaleY:1,x:59.6,y:166},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,0,267,275);


(lib.product = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._02_0002_PRODUCT();

	// 图层 2
	this.instance_1 = new lib.tu01();
	this.instance_1.setTransform(177.1,322.8,1,1,0,0,0,89.5,70);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,340,392.8);


(lib.qqpf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.qiqium();
	this.instance.setTransform(114.9,201.5,1,1,0,0,0,114.9,201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:201.4,rotation:2,y:220.3},9).to({regY:201.5,rotation:0,y:241.1},10).to({rotation:-2,x:115,y:221.4},10).to({rotation:0,x:114.9,y:201.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,403);


(lib.xiongmaoMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sanjiao
	this.instance = new lib.sj_1();
	this.instance.setTransform(50.7,116.3,1,1,0,0,0,17.3,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:119.8},8).to({y:116.3},8).wait(1));

	// xiongmao
	this.instance_1 = new lib.xiongmao();
	this.instance_1.setTransform(51.5,68,1,1,0,0,0,51.5,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:10},4).to({rotation:0},4).to({rotation:-10},4).to({rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,124.9);


(lib.dianMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// diandianmc
	this.instance = new lib.diandianmc();
	this.instance.setTransform(42.6,1.8,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:-2.4},0).wait(4).to({y:1.8},0).wait(7));

	// diandianmc
	this.instance_1 = new lib.diandianmc();
	this.instance_1.setTransform(34.4,1.8,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:-2.4},0).wait(4).to({y:1.8},0).wait(9));

	// diandianmc
	this.instance_2 = new lib.diandianmc();
	this.instance_2.setTransform(26.3,1.8,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({y:-2.4},0).wait(4).to({y:1.8},0).wait(11));

	// diandianmc
	this.instance_3 = new lib.diandianmc();
	this.instance_3.setTransform(18.1,1.8,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({y:-2.4},0).wait(4).to({y:1.8},0).wait(13));

	// diandianmc
	this.instance_4 = new lib.diandianmc();
	this.instance_4.setTransform(10,1.8,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({y:-2.4},0).wait(4).to({y:1.8},0).wait(15));

	// diandianmc
	this.instance_5 = new lib.diandianmc();
	this.instance_5.setTransform(1.8,1.8,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({y:-2.4},0).wait(4).to({y:1.8},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.3,3.5);


(lib.余晓亮 = function() {
	this.initialize();

	// 余晓亮
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB912").s().p("ABcMpIC2ouIgnAAIkZIuIllAAIEbouIhdAAIAqiCIO6AAIgrCCIhrAAIiMGsIBrAAIgqCCgAZcMnICNmxImAAAIhXELQgaBLgzAtQg1AthEABIlyAAIAriBIBCAAQAgAAAVgVQAVgVAKgjIBnk6IjSAAIBhkoIZIAAIhhEoIjvAAIh/GHIClAAIgqCBgASrD1INxAAIAph+ItxAAgEgjPAMkIAriBIA4AAQAUAAASgOQASgNAHgVIB+mCIpbAAIAqiBIJcAAIAmh0IoWAAIAqiBIXDAAIgrCBIoZAAIgmB0IJfAAIgrCBIpeAAIiDGRQgYBEg9AvQg8AthFACgA3gMNIAvnOIFzAAIgvHOgEgq7AMNID9nOIFzAAIj9HOgAwCLkIHe24IJgAAImoUWQgZBFg9AtQg+AthGADgArQJiIAgAAQATAAATgOQASgOAHgVICgnqIhPAAgAn2g4IBPAAICxocIhQAAgAGCBJIgmjEIndB1IAtiJIGYhmIgzkMIj0AQIAriBICxgLIggirIGBAAIAbCPIGlgfIgrCEIlgAZIApDLIEBhAIgtCKIi7AuIAgCiIBXAAIgqB/gAQhhSICGmbIVZAAIhSD5QgYBFg8AtQg9AvhFABgAW3jTIJTAAQATgBATgOQASgOAIgUIAhhnIqCAAgAzljRIjTm6In6G6InEAAIKWpSIKhAAIEVJSgARHo6IAqiBIJcAAIAhhmIGVAAIghBmIJaAAIgqCBg");
	this.shape.setTransform(295.6,95.5);

	// 图层 27 副本
	this.instance = new lib.图层27副本();
	this.instance.setTransform(283,101,1,1,0,0,0,260,77);

	// 图层 29
	this.instance_1 = new lib.图层29();
	this.instance_1.setTransform(283,100,1,1,0,0,0,283,100);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,597.7,210.7);


(lib.面对面 = function() {
	this.initialize();

	// 电魂面对面之 副本
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Au/ETICIjZIhUAAIBGkkIAfAAIAUgmIBcAAIgTAmICgAAIg5DtQgGAXgQAQQgRAPgTABIgrAAIgpCsIBiAAIgKAsIipAAIAWhgIg6BhgArLAOIAIAAQAGAAAFgFQAEgFACgFIAPhAIgVAAgAsvAOIATAAIAThPIgTAAgAquhtIAVAAIAThRIgVAAgAsRhtIASAAIAThRIgTAAgAy6ETIBjlBIgaAAIAKgsIDzAAIgLAsIhzAAIhXEUIAUAAQAGAAAGgEQAGgEABgIIAfi1IBfAAIggC7QgDAPgKANQgKAMgNAHQgNAHgOABgARXESIG/mOIlpAAIALgsIC5AAIAZhnICJAAIgZBnIDZAAIm1GOIFZAAIgKAsgABdESIgKhDIglBDIhkAAIB2jZIgYizIAIggIBbAAIAIA+IA0hgIiQAAIALgsIDvAAIgSBNIh4DWIAbDXgAIVERIBjmgICsAAIAmhIIjNAAIAKgsIImAAIgLAsIjQAAIglBIIDZAAIhXFpQgGAXgTAQQgTAPgYABgAOcDlIAOAAQAGgBAGgEQAGgFACgHIBKk3IgdAAgAMTDlIAmAAIAUhVIgmAAgAKTDlIAeAAIBOlIIgeAAgAMxBkIAnAAIAShMIgnAAgANNgSIAnAAIAUhRIgnAAgApvERIBjmgICrAAIAmhIIjMAAIALgsIIjAAIgKAsIjPAAIglBIIDXAAIhUFpQgHAXgTAQQgTAPgYABgAjoDlIAOAAQAGgBAGgEQAGgFACgHIBKk3IgeAAgAlxDlIAmAAIAVhVIgnAAgAnxDlIAdAAIBPlIIgeAAgAlSBkIAmAAIAShMIgmAAgAk2gSIAmAAIAThRIgmAAgAEWERIALgsIAyAAQAIgBAEgEQAHgFABgHIBXlpIiOAAIALgsICNAAIAThQIB+AAIgTBQIAUAAIgLAsIgTAAIhYFvQgGAWgTAQQgSAQgXABgA4+EQIAgiLIi0AAIBPlJIC0AAIAShMICHAAIgSBMIC2AAIhBESQgHAYgTAPQgTAQgYAAIh+AAIgWBfIDOAAIgKAsgA2MBZIAhAAQAGAAAGgEQAGgGACgHIAThRIgwAAgA5EBZIAxAAIAXhiIgwAAgA1qg1IAxAAIAXhkIgwAAgA4hg1IAwAAIAYhkIgxAAgArnDSIAqh9IApAAIgbBRIACAAQAEAAADgCQACgDABgEIAGgeIAmAAIgKAxQgDANgJALQgGAFgGACQgEADgHAAgAEBCHIAojcIBeAAIgoDcgAxCjJIAKgsIDeAAIgKAsg");
	this.shape.setTransform(216.3,44.4);

	// 电魂面对面之
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1420B").s().p("AvAESICIjYIhTAAIBGkkIAfAAIATgmIBeAAIgUAmICfAAIg4DtQgGAYgQAPQgRAQgTAAIgrAAIgpCsIBiAAIgKAsIiqAAIAXhgIg7BggArLAOIAIAAQAFAAAFgEQAFgGACgFIAPhAIgVAAgAsvAOIATAAIAThPIgTAAgAqthtIAVAAIAShRIgUAAgAsRhtIATAAIAThRIgTAAgAy7ESIBklAIgbAAIALgsIDzAAIgLAsIhzAAIhXEUIAUAAQAHABAFgFQAFgEACgIIAfi1IBfAAIggC6QgDAQgKAMQgJANgNAHQgNAHgOAAgARWESIHAmOIlpAAIALgsIC6AAIAYhoICJAAIgZBoIDZAAIm1GOIFaAAIgKAsgABcESIgJhDIglBDIhkAAIB2jZIgYizIAHggIBcAAIAHA+IA1hfIiQAAIAKgsIDxAAIgTBMIh4DWIAbDXgAIVERIBjmfICrAAIAnhJIjNAAIAKgrIImAAIgKArIjQAAIgmBJIDZAAIhXFoQgGAXgTAPQgTAQgYABgAOdDlIAMAAQAHAAAGgFQAGgEACgIIBKk3IgeAAgAMTDlIAnAAIAUhVIgnAAgAKTDlIAeAAIBNlIIgdAAgAMyBkIAmAAIAShMIgmAAgANOgSIAmAAIAThRIgmAAgApvERIBjmfICsAAIAmhJIjNAAIAKgrIIkAAIgLArIjOAAIglBJIDXAAIhVFoQgGAXgTAPQgTAQgYABgAjoDlIAOAAQAGAAAGgFQAGgEACgIIBKk3IgdAAgAlxDlIAmAAIAUhVIgmAAgAnxDlIAeAAIBOlIIgeAAgAlTBkIAnAAIAShMIgnAAgAk3gSIAnAAIAUhRIgnAAgAEXERIAKgsIAzAAQAGgBAFgEQAHgEABgIIBXlpIiNAAIAKgsICNAAIAThQIB+AAIgTBQIAUAAIgKAsIgUAAIhYFvQgGAWgTAQQgSAQgXABgA4+EQIAhiLIi1AAIBPlJIC0AAIAShMICIAAIgSBMIC1AAIhBESQgHAXgTARQgTAPgYAAIh+AAIgXBfIDOAAIgKAsgA2MBaIAhAAQAGgBAGgFQAGgEACgHIAThSIgwAAgA5DBaIAwAAIAYhjIgxAAgA1pg0IAwAAIAYhlIgxAAgA4ig0IAxAAIAXhlIgwAAgAroDSIArh9IApAAIgcBRIAEAAQADAAACgCQADgDABgFIAGgdIAnAAIgLAxQgDAOgKAKQgGAFgEADQgFABgGABgAECCIIAnjdIBeAAIgoDdgAxCjKIAKgsIDdAAIgKAsg");
	this.shape_1.setTransform(219.2,49.1);

	// 图层 28 副本
	this.instance = new lib.图层28副本();
	this.instance.setTransform(214.5,46.5,1,1,0,0,0,214.5,46.5);

	// 图层 28
	this.instance_1 = new lib.图层28();
	this.instance_1.setTransform(221.5,55,1,1,0,0,0,214.5,47);

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,461.2,108);


(lib.上篇 = function() {
	this.initialize();

	// 上篇
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACoCZIANgsIgNAAIgNAsIgoAAIANgsIgMAAIgNArIgyAAIAjh5IDZAAIgbBcQgDAMgLAJQgLAIgMAAIgdAAIAGgXIABAAQADAAADgDQAEgCABgEIAEgLIgNAAIgNAsgADkBWIAMAAIAJggIgMAAgACuBWIANAAIAJggIgNAAgAB6BWIAMAAIAJggIgMAAgAgaCYIA5jLIBwAAIAFgRIBNAAIgFARIBvAAIgNAsQgDAIgJAHQgJAIgKAAIjNAAIgnCIgABZgHICcAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgBABgEIAEgMIiiAAgAlkCXIAHgZIBnAAIBRkWIBOAAIgeBmIBwAAIgHAZIhwAAIgsCXIB/AAIgHAZgAEPhIIAEgpIgFAAIgUApIhBAAIAmhPIBBAAIgHAOIBMAAIgHAYIgNAAIgEApgAB1hIIAEgpIgEAAIgUApIhBAAIAmhPIBCAAIgHAOIBLAAIgHAYIgNAAIgEApg");
	this.shape.setTransform(45.4,24.3);

	// 图层 39
	this.instance = new lib.图层39();
	this.instance.setTransform(48,26,1,1,0,0,0,48,26);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,55);


(lib.三角形 = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7XBL9MAAAiX5MB2vAAAMAAACX5gEAK1AocQAAApDICfQAaATBkBfQBPBMAPAIIABADIABABIAGAAQAKAAAWg2IAPgoIAPglQAOgmAYhMIAihyQAEgPAZgyQAVguAAgEIAAgBIAAgBIgBgHIAAgBIAAAAQgBgEgEABIhWg1Qg+glhbgPQg0gPg5gWQg3gVgJgCQgYgGgHAJQgIAKAAAjIAAABQgDAJAAADIACAHQgJAPgJAXIgIAUQgSATgdAZQhGA6gHAPIgDAAgEAb7Am/IAqAoQA+A6AIAKIAWAiQASAUArAIQAGABAlAdQAjAZAjAAQAUAAAHgCIAQAAQBFgdBNi6QAqhmBEjdQAbhXAqjhQAmjOAAgYQAAgLgDgNIgEgLQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBIABgDIgBgDIAAgBQABgEgHgDQgfgshBgsIgdgSQgSgOgcgPIgWgLIgagWIgCgCIACgBIAAgKIABg0IAAgDIAAgFQAAgSgEgmQgDglAAgTIAAgKIgBAAQgBgTgFgWQABgGgBgDIgCAAQgKgngXgtQgphSg6gVQgDgFgJgEQgZgbhBAMQhDAMAAAOIAAAAQgVAUgSA6QgNAsgXBTQgNAngYBdIgKAnQgJARgHAZIgSBDQgOArgOBZQgIA4gGBOIgKCFQgCBggtDcIgrDYIADAVQgDABADAEIABACQAFANAIAAQAEAAACgCIAAAAQAkAVBFAfgEAJYgkaQmPAnidAfQgxAKgvAOQg7ASgPAEQiJAihzAkQiDAphcAcQg/ATikBOQi7BYg0AUQiGAxhlAoQikBCgZAcQgWAVgRAuQgUA2AAArQAAAOADAJIgDAeIgZBGQgaBJAAARQABAmgLAnIgMAmIABAEIAAACQAAAOAPAFQAOADBCANIBXABIADABICDAAQFngpCsgiQDOgoDghOICug9QBugbA6gRQFRhlB4gmQBbgdBEgjIAdAEIBdAAQBzgSBRhAQAtgkBDhHIB/hyQAgglAAhAQAAgKgDgOQgDgUgEgFQgHgGgcgRIgRgJIgTgLQglgVgagJIgGgEQglgVhEgZQh8gpgMgHQgVgHgfgQIgVgLQgIgIgUgNQgjgYgNAHIglARQgKgCgKAAIgFAAgEARXghaIAHAEIACAEIgJgIg");
	mask.setTransform(347.1,315.2);

	// 图层 1
	this.instance = new lib.sj();
	this.instance.setTransform(400.4,295.3,1,1,0,0,0,400.4,295.3);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,672.8,642.5);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:49},30,cjs.Ease.get(1)).to({y:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-49,98,98);


(lib.p7 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.arrow_1();
	this.instance.setTransform(375,1106.9);

	// 图层 1
	this.instance_1 = new lib.pagepic7();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_133 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(133).call(this.frame_133).wait(1));

	// jiantou
	this.instance = new lib.arrow_1();
	this.instance.setTransform(375,1106.9,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(24));

	// chuangxing
	this.instance_1 = new lib.chuangxingmc();
	this.instance_1.setTransform(975.2,533,1,1,0,0,0,219.2,89.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:305.7},8,cjs.Ease.get(1)).wait(45).to({y:177},20,cjs.Ease.get(1)).wait(60));

	// deng
	this.instance_2 = new lib.dengmc();
	this.instance_2.setTransform(601.7,500.1,0.1,0.1,0,0,0,56.5,59);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({scaleX:0.89,scaleY:1.16,y:475.6},3).to({scaleX:1.11,scaleY:0.96,y:483.1},3).to({scaleX:0.96,scaleY:1.05,y:480.6},3).to({scaleX:1.02,scaleY:0.97,y:483.1},3).to({scaleX:1,scaleY:1},3).wait(8).to({y:127.1},20,cjs.Ease.get(1)).wait(60));

	// 元件 17
	this.instance_3 = new lib.元件17();
	this.instance_3.setTransform(600.8,555.8,0.1,0.1,0,0,0,20,3.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({regX:20.3,regY:3.1,scaleX:1,scaleY:1,y:540.8},3).wait(23).to({y:184.8},20,cjs.Ease.get(1)).wait(60));

	// 元件 16
	this.instance_4 = new lib.元件16();
	this.instance_4.setTransform(600.9,556.9,0.1,0.1,0,0,0,19.5,2.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({regX:19.4,scaleX:1,scaleY:1,x:600.8,y:549.5},3).wait(25).to({y:193.5},20,cjs.Ease.get(1)).wait(60));

	// 元件 15
	this.instance_5 = new lib.元件15();
	this.instance_5.setTransform(600.4,561.4,0.1,0.1,0,0,0,16.5,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({regX:16.4,regY:3.9,scaleX:1,scaleY:1,y:558.9},4).wait(26).to({y:202.9},20,cjs.Ease.get(1)).wait(60));

	// xian1
	this.instance_6 = new lib.xian();
	this.instance_6.setTransform(457.8,625.5,1,0.09,0,0,0,0,67);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleY:1},5,cjs.Ease.get(1)).wait(30).to({y:269.5},20,cjs.Ease.get(1)).wait(60));

	// shandian
	this.instance_7 = new lib.shandian_3();
	this.instance_7.setTransform(641.1,431.6,1,1,0,0,0,104.5,97);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({x:599.1,y:533.6,alpha:1},7,cjs.Ease.get(1)).wait(33).to({x:601.1,y:175.6},20,cjs.Ease.get(1)).wait(60));

	// INNOVATIVE
	this.instance_8 = new lib.IN();
	this.instance_8.setTransform(-207.9,400.8,1,1,0,0,0,200.1,43.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:532.5,y:409.9},8,cjs.Ease.get(1)).wait(40).to({y:53.9},20,cjs.Ease.get(1)).wait(60));

	// ren
	this.instance_9 = new lib._02_0001_ren();
	this.instance_9.setTransform(591,916);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(134));

	// TEXT06_01
	this.instance_10 = new lib.text06_01();
	this.instance_10.setTransform(378.1,656.2,1,1,0,0,0,301,328);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(71).to({_off:false},0).to({y:663.5,alpha:0.301},14).to({y:672.2,alpha:1},17).wait(32));

	// text06
	this.instance_11 = new lib.text06();
	this.instance_11.setTransform(503.1,1167.3,0.11,0.11,0,0,0,462.4,871.5);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({regX:462.1,regY:871.2,scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.get(1)).wait(60));

	// BG1
	this.instance_12 = new lib.Bitmap2();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(175).call(this.frame_175).wait(1));

	// jiantou
	this.instance = new lib.arrow_1();
	this.instance.setTransform(375,1106.9,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6lBeOMAAAi8bMB1KAAAMAAAC8bg");
	mask.setTransform(375,603);

	// text05_01
	this.instance_1 = new lib.text05_01();
	this.instance_1.setTransform(376.1,385.1,1,1,0,0,0,246.5,68);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({y:395.1,alpha:1},47,cjs.Ease.get(1)).wait(49));

	// text05_02
	this.instance_2 = new lib.text05_02();
	this.instance_2.setTransform(377.1,541.7,1,1,0,0,0,246.5,68.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({y:551.7,alpha:1},47,cjs.Ease.get(1)).wait(46));

	// text05_03
	this.instance_3 = new lib.text05_03();
	this.instance_3.setTransform(377.1,696.2,1,1,0,0,0,246.5,68);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86).to({_off:false},0).to({y:706.2,alpha:1},47,cjs.Ease.get(1)).wait(43));

	// text05_04
	this.instance_4 = new lib.text05_04();
	this.instance_4.setTransform(376.6,878.3,1,1,0,0,0,246,94);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({y:888.3,alpha:1},47,cjs.Ease.get(1)).wait(40));

	// yonghu
	this.instance_5 = new lib.yonghu();
	this.instance_5.setTransform(309.2,145.3,1,1,0,0,0,218.8,90.7);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:585.3,alpha:1},24,cjs.Ease.get(1)).wait(29).to({y:163.3},23,cjs.Ease.get(1)).wait(91));

	// customer
	this.instance_6 = new lib.cus();
	this.instance_6.setTransform(222.5,641.8,1,1,0,0,0,184,39.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({x:552.5,alpha:1},15,cjs.Ease.get(1)).wait(14).to({y:219.8},23,cjs.Ease.get(1)).wait(91));

	// shandian
	this.instance_7 = new lib.shandian_4();
	this.instance_7.setTransform(441.9,647.1,0.2,0.2,0,0,0,0,193);
	this.instance_7.alpha = 0.102;
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(9).to({y:215.1},23,cjs.Ease.get(1)).wait(91));

	// QIqiu
	this.instance_8 = new lib.qiqium();
	this.instance_8.setTransform(119.7,1663.9,1,1,0,0,0,114.9,201.5);

	this.instance_9 = new lib.qqpf();
	this.instance_9.setTransform(119.7,456,1,1,0,0,0,114.9,201.5);
	this.instance_9._off = true;

	this.instance_8.mask = this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:456},28,cjs.Ease.get(1)).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).wait(33).to({y:34},23,cjs.Ease.get(1)).wait(91));

	// ren03
	this.instance_10 = new lib._02_0001_ren();
	this.instance_10.setTransform(591,916);

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(176));

	// text05
	this.instance_11 = new lib.text05();
	this.instance_11.setTransform(512.1,1124.1,0.11,0.11,0,0,0,415.9,841);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(62).to({_off:false},0).to({regX:416.1,scaleX:1,scaleY:1,alpha:1},23,cjs.Ease.get(1)).wait(91));

	// BG1
	this.instance_12 = new lib.BG1();

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_128 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(128).call(this.frame_128).wait(1));

	// jiantou
	this.instance = new lib.arrow_1();
	this.instance.setTransform(375,1106.9,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(22));

	// maskz (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6lBeOMAAAi8bMB1KAAAMAAAC8bg");
	mask.setTransform(375,603);

	// ren
	this.instance_1 = new lib._02_0001_ren();
	this.instance_1.setTransform(591,916);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129));

	// text
	this.instance_2 = new lib.text04c();
	this.instance_2.setTransform(504,1182.5,0.11,0.11,0,0,0,430.1,846);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).to({regX:429.9,regY:845.9,scaleX:1,scaleY:1,alpha:1},24,cjs.Ease.get(1)).wait(37));

	// text04
	this.instance_3 = new lib.text04();
	this.instance_3.setTransform(504,1182.5,0.11,0.11,0,0,0,472.4,872.4);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).to({regX:472.2,scaleX:1,scaleY:1,alpha:1},24,cjs.Ease.get(1)).wait(37));

	// logo04
	this.instance_4 = new lib.logo04();
	this.instance_4.setTransform(381.6,-191.7,1,1,0,0,0,338.5,0);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({y:464.3},22,cjs.Ease.get(1)).wait(43).to({y:116.3},24,cjs.Ease.get(1)).wait(37));

	// spirit
	this.instance_5 = new lib.spirit();
	this.instance_5.setTransform(318.6,515.8,1,0.157,0,0,0,127.5,92.5);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({scaleY:1,x:298.6,y:493.8},19,cjs.Ease.get(1)).wait(24).to({y:145.8},24,cjs.Ease.get(1)).wait(37));

	// game
	this.instance_6 = new lib.game();
	this.instance_6.setTransform(750,478.8,0.3,0.3,0,0,0,177,56.5);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.get(1)).wait(9).to({y:130.8},24,cjs.Ease.get(1)).wait(37));

	// bjgai
	this.instance_7 = new lib._04_0004_bj();

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_131 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(131).call(this.frame_131).wait(1));

	// jiantou
	this.instance = new lib.arrow_1();
	this.instance.setTransform(375,1106.9,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(13));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6lBeOMAAAi8bMB1KAAAMAAAC8bg");
	mask.setTransform(375,603);

	// ren03
	this.instance_1 = new lib._02_0001_ren();
	this.instance_1.setTransform(591,916);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132));

	// text03_01
	this.instance_2 = new lib.text03_01();
	this.instance_2.setTransform(378.6,486.2,1,1,0,0,0,243.5,42.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({y:501.2,alpha:1},31,cjs.Ease.get(1)).wait(31));

	// text03_02
	this.instance_3 = new lib.text03_02();
	this.instance_3.setTransform(379.1,590.2,1,1,0,0,0,243,42.5);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({y:605.2,alpha:1},31,cjs.Ease.get(1)).wait(27));

	// text03_03
	this.instance_4 = new lib.text03_03();
	this.instance_4.setTransform(379.1,720.2,1,1,0,0,0,244,68.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({y:735.2,alpha:1},31,cjs.Ease.get(1)).wait(22));

	// text03_04
	this.instance_5 = new lib.text03_04();
	this.instance_5.setTransform(378.6,850.3,1,1,0,0,0,243.5,41.5);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({_off:false},0).to({y:865.3,alpha:1},31,cjs.Ease.get(1)).wait(16));

	// text02_05
	this.instance_6 = new lib.text03_05();
	this.instance_6.setTransform(503.2,1090.3,0.11,0.11,0,0,0,499.6,1083.3);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).to({regX:500,scaleX:1,scaleY:1,y:1090.4,alpha:1},17,cjs.Ease.get(1)).wait(62));

	// logo03
	this.instance_7 = new lib.logo03();
	this.instance_7.setTransform(-258.4,585.2,1,1,0,0,0,324.5,198);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({x:375.6},18,cjs.Ease.get(1)).wait(31).to({y:259.2},17,cjs.Ease.get(1)).wait(62));

	// sanjiao
	this.instance_8 = new lib.sanjiao();
	this.instance_8.setTransform(266.1,566.1,1,0.648,0,0,0,81,91);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).to({scaleY:1,y:420.1},14,cjs.Ease.get(1)).wait(8).to({y:88.1},17,cjs.Ease.get(1)).wait(62));

	// success
	this.instance_9 = new lib.success();
	this.instance_9.setTransform(503.7,582.2,1,0.148,0,0,0,180.5,175);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).to({scaleY:1},12,cjs.Ease.get(1)).wait(19).to({y:256.2},17,cjs.Ease.get(1)).wait(62));

	// bj03
	this.instance_10 = new lib._03_0002_bj03();

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_124 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(124).call(this.frame_124).wait(1));

	// jiantou
	this.instance = new lib.arrow_1();
	this.instance.setTransform(375,1106.9,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(27));

	// ren
	this.instance_1 = new lib._02_0001_ren();
	this.instance_1.setTransform(591,916);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125));

	// text02_01.png
	this.instance_2 = new lib.text02_01();
	this.instance_2.setTransform(377,495.1,1,1,0,0,0,312.5,68.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).to({y:465.1,alpha:1},31,cjs.Ease.get(1)).wait(29));

	// text02_02.png
	this.instance_3 = new lib.text02_02();
	this.instance_3.setTransform(375,649.1,1,1,0,0,0,310.5,68.5);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},0).to({y:619.1,alpha:1},31,cjs.Ease.get(1)).wait(32));

	// text02_03.png
	this.instance_4 = new lib.text02_03();
	this.instance_4.setTransform(377,805.7,1,1,0,0,0,312.5,68.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({y:775.7,alpha:1},31,cjs.Ease.get(1)).wait(35));

	// text02_04.png
	this.instance_5 = new lib.text02_04();
	this.instance_5.setTransform(376.5,935.2,1,1,0,0,0,312,41.5);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).to({y:905.2,alpha:1},31,cjs.Ease.get(1)).wait(37));

	// text02_05
	this.instance_6 = new lib.text02_05();
	this.instance_6.setTransform(520.2,1146.3,0.11,0.11,0,0,0,520.1,1145.1);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({regX:520,regY:1145.3,scaleX:1,scaleY:1,y:1146.4,alpha:1},24,cjs.Ease.get(1)).wait(67));

	// logo02
	this.instance_7 = new lib.logo02();
	this.instance_7.setTransform(673.3,601.2,1,1,0,0,0,0,90.5);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:78.1,alpha:1},17,cjs.Ease.get(1)).wait(15).to({x:64.1,y:231.2},24,cjs.Ease.get(1)).wait(67));

	// product
	this.instance_8 = new lib.product();
	this.instance_8.setTransform(405.2,601.2,1,0.341,0,0,0,162,159);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).to({scaleY:1},14,cjs.Ease.get(1)).wait(9).to({x:391.2,y:231.2},24,cjs.Ease.get(1)).wait(67));

	// jian
	this.instance_9 = new lib.jian();
	this.instance_9.setTransform(-363.5,197,1,1,0,0,0,373.5,156);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({x:373.5,y:450.1},15,cjs.Ease.get(1)).wait(16).to({x:359.5,y:80.1},24,cjs.Ease.get(1)).wait(67));

	// bj02
	this.instance_10 = new lib._02_0003_bj_gai();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_187 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(187).call(this.frame_187).wait(15));

	// jiantou
	this.instance = new lib.arrow_1();
	this.instance.setTransform(375,1106.9,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(117));

	// text01_01
	this.instance_1 = new lib.text01_01();
	this.instance_1.setTransform(371.9,596,1,1,0,0,0,276,45);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({y:628,alpha:1},36,cjs.Ease.get(1)).to({_off:true},106).wait(14));

	// text_01_02
	this.instance_2 = new lib.text_01_02();
	this.instance_2.setTransform(371.9,710,1,1,0,0,0,277,45);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({y:742,alpha:1},36,cjs.Ease.get(1)).to({_off:true},103).wait(14));

	// text01_03
	this.instance_3 = new lib.text01_03();
	this.instance_3.setTransform(371.4,849.9,1,1,0,0,0,277.5,73);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).to({y:881.9,alpha:1},36,cjs.Ease.get(1)).to({_off:true},100).wait(14));

	// text01_04
	this.instance_4 = new lib.text01_04();
	this.instance_4.setTransform(57.9,770.1,0.118,1,0,0,0,0,227.1);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({scaleX:1,alpha:1},26,cjs.Ease.get(1)).to({_off:true},136).wait(14));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.setTransform(364.1,9.2,1,1,0,0,0,237,167.5);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({y:347.2,alpha:1},18,cjs.Ease.get(1)).to({_off:true},168).wait(14));

	// dream
	this.instance_6 = new lib.dream();
	this.instance_6.setTransform(308.1,317.7,1,0.198,0,0,0,170,197);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({scaleY:1,x:320.1},12,cjs.Ease.get(1)).to({_off:true},161).wait(14));

	// rocketZ
	this.instance_7 = new lib.rocketZ();
	this.instance_7.setTransform(-135.5,804.8,1,1,0,0,0,79.5,137);
	this.instance_7.alpha = 0.98;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:532.1,y:268.7},18,cjs.Ease.get(1)).to({_off:true},168).wait(14));

	// plane
	this.instance_8 = new lib.plane();
	this.instance_8.setTransform(533.3,1053.2,0.93,0.93,0,0,0,233,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},188).wait(14));

	// BJ
	this.instance_9 = new lib.BJ();
	this.instance_9.setTransform(375,603,1,0.904,0,0,0,375,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},188).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1245.7);


(lib.loadingmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// xiongmao
	this.instance = new lib.xiongmaoMC();
	this.instance.setTransform(74.8,418.6,1,1,0,0,0,54,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:683},99).wait(1));

	// diandian
	this.instance_1 = new lib.dianMC();
	this.instance_1.setTransform(450.3,621.1,1,1,0,0,0,22.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// txt
	this.instance_2 = new lib.Bitmap14();
	this.instance_2.setTransform(88.4,1081.5);

	this.text = new cjs.Text("Loading", "30px 'Microsoft YaHei'", "#919191");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 131;
	this.text.setTransform(365.8,589.4);

	this.text_1 = new cjs.Text("100%", "21px 'Microsoft YaHei'", "#919191");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 57;
	this.text_1.setTransform(678.6,558.1);

	this.text_2 = new cjs.Text("0%", "21px 'Microsoft YaHei'", "#919191");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 23;
	this.text_2.lineWidth = 47;
	this.text_2.setTransform(73,558.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_2}]}).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_24 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_31 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_32 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_40 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_41 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_42 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_43 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_44 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_45 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_46 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_47 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_48 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_49 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_50 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_51 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_52 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_53 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_54 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_55 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_56 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_57 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_58 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_59 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_60 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_61 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_62 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_63 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_64 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_65 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_66 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_67 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_68 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_69 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_70 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_71 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_72 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_73 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_74 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_75 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_76 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_77 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_78 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_79 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_80 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_81 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_82 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_83 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_84 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_85 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_86 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_87 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_88 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_89 = new cjs.Graphics().p("EgueAqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_90 = new cjs.Graphics().p("EguXAqZQhWAAg9g9Qg8g9AAhWIAAAAQAAhWA8g9QA9g9BWAAMBc+AAAQBWAAA8A9QA9A9AABWIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_91 = new cjs.Graphics().p("Egt3AqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_92 = new cjs.Graphics().p("EgtYAqZQhWAAg9g9Qg8g9AAhWIAAAAQAAhWA8g9QA9g9BWAAMBc+AAAQBWAAA8A9QA9A9AABWIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_93 = new cjs.Graphics().p("Egs4AqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_94 = new cjs.Graphics().p("EgsZAqZQhWAAg9g9Qg8g9AAhWIAAAAQAAhWA8g9QA9g9BWAAMBc+AAAQBWAAA8A9QA9A9AABWIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_95 = new cjs.Graphics().p("Egr5AqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_96 = new cjs.Graphics().p("EgraAqZQhWAAg9g9Qg8g9AAhWIAAAAQAAhWA8g9QA9g9BWAAMBc+AAAQBWAAA8A9QA9A9AABWIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_97 = new cjs.Graphics().p("Egq6AqZQhWAAg9g9Qg9g9AAhWIAAAAQAAhWA9g9QA9g9BWAAMBc9AAAQBWAAA9A9QA9A9AABWIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_98 = new cjs.Graphics().p("EgqbAqZQhWAAg9g9Qg8g9AAhWIAAAAQAAhWA8g9QA9g9BWAAMBc+AAAQBWAAA8A9QA9A9AABWIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_99 = new cjs.Graphics().p("Egp7AqZQhWAAg9g9Qg8g9gBhWIAAAAQABhWA8g9QA9g9BWAAMBc+AAAQBWAAA8A9QA9A9AABWIAAAAQAABWg9A9Qg8A9hWAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-247.4,y:271.3}).wait(1).to({graphics:mask_graphics_1,x:-241.1,y:271.3}).wait(1).to({graphics:mask_graphics_2,x:-234.8,y:271.3}).wait(1).to({graphics:mask_graphics_3,x:-228.5,y:271.3}).wait(1).to({graphics:mask_graphics_4,x:-222.2,y:271.3}).wait(1).to({graphics:mask_graphics_5,x:-215.9,y:271.3}).wait(1).to({graphics:mask_graphics_6,x:-209.6,y:271.3}).wait(1).to({graphics:mask_graphics_7,x:-203.3,y:271.3}).wait(1).to({graphics:mask_graphics_8,x:-197,y:271.3}).wait(1).to({graphics:mask_graphics_9,x:-190.7,y:271.3}).wait(1).to({graphics:mask_graphics_10,x:-184.4,y:271.3}).wait(1).to({graphics:mask_graphics_11,x:-178.1,y:271.3}).wait(1).to({graphics:mask_graphics_12,x:-171.8,y:271.3}).wait(1).to({graphics:mask_graphics_13,x:-165.5,y:271.3}).wait(1).to({graphics:mask_graphics_14,x:-159.2,y:271.3}).wait(1).to({graphics:mask_graphics_15,x:-152.9,y:271.3}).wait(1).to({graphics:mask_graphics_16,x:-146.6,y:271.3}).wait(1).to({graphics:mask_graphics_17,x:-140.3,y:271.3}).wait(1).to({graphics:mask_graphics_18,x:-134,y:271.3}).wait(1).to({graphics:mask_graphics_19,x:-127.7,y:271.3}).wait(1).to({graphics:mask_graphics_20,x:-121.4,y:271.3}).wait(1).to({graphics:mask_graphics_21,x:-115.1,y:271.3}).wait(1).to({graphics:mask_graphics_22,x:-108.8,y:271.3}).wait(1).to({graphics:mask_graphics_23,x:-102.5,y:271.3}).wait(1).to({graphics:mask_graphics_24,x:-96.2,y:271.3}).wait(1).to({graphics:mask_graphics_25,x:-89.8,y:271.3}).wait(1).to({graphics:mask_graphics_26,x:-83.5,y:271.3}).wait(1).to({graphics:mask_graphics_27,x:-77.2,y:271.3}).wait(1).to({graphics:mask_graphics_28,x:-70.9,y:271.3}).wait(1).to({graphics:mask_graphics_29,x:-64.6,y:271.3}).wait(1).to({graphics:mask_graphics_30,x:-58.3,y:271.3}).wait(1).to({graphics:mask_graphics_31,x:-52,y:271.3}).wait(1).to({graphics:mask_graphics_32,x:-45.7,y:271.3}).wait(1).to({graphics:mask_graphics_33,x:-39.4,y:271.3}).wait(1).to({graphics:mask_graphics_34,x:-33.1,y:271.3}).wait(1).to({graphics:mask_graphics_35,x:-26.8,y:271.3}).wait(1).to({graphics:mask_graphics_36,x:-20.5,y:271.3}).wait(1).to({graphics:mask_graphics_37,x:-14.2,y:271.3}).wait(1).to({graphics:mask_graphics_38,x:-7.9,y:271.3}).wait(1).to({graphics:mask_graphics_39,x:-1.6,y:271.3}).wait(1).to({graphics:mask_graphics_40,x:4.7,y:271.3}).wait(1).to({graphics:mask_graphics_41,x:11,y:271.3}).wait(1).to({graphics:mask_graphics_42,x:17.3,y:271.3}).wait(1).to({graphics:mask_graphics_43,x:23.6,y:271.3}).wait(1).to({graphics:mask_graphics_44,x:29.9,y:271.3}).wait(1).to({graphics:mask_graphics_45,x:36.2,y:271.3}).wait(1).to({graphics:mask_graphics_46,x:42.5,y:271.3}).wait(1).to({graphics:mask_graphics_47,x:48.8,y:271.3}).wait(1).to({graphics:mask_graphics_48,x:55.1,y:271.3}).wait(1).to({graphics:mask_graphics_49,x:61.4,y:271.3}).wait(1).to({graphics:mask_graphics_50,x:67.7,y:271.3}).wait(1).to({graphics:mask_graphics_51,x:74,y:271.3}).wait(1).to({graphics:mask_graphics_52,x:80.3,y:271.3}).wait(1).to({graphics:mask_graphics_53,x:86.6,y:271.3}).wait(1).to({graphics:mask_graphics_54,x:92.9,y:271.3}).wait(1).to({graphics:mask_graphics_55,x:99.2,y:271.3}).wait(1).to({graphics:mask_graphics_56,x:105.5,y:271.3}).wait(1).to({graphics:mask_graphics_57,x:111.8,y:271.3}).wait(1).to({graphics:mask_graphics_58,x:118.2,y:271.3}).wait(1).to({graphics:mask_graphics_59,x:124.5,y:271.3}).wait(1).to({graphics:mask_graphics_60,x:130.8,y:271.3}).wait(1).to({graphics:mask_graphics_61,x:137.1,y:271.3}).wait(1).to({graphics:mask_graphics_62,x:143.4,y:271.3}).wait(1).to({graphics:mask_graphics_63,x:149.7,y:271.3}).wait(1).to({graphics:mask_graphics_64,x:156,y:271.3}).wait(1).to({graphics:mask_graphics_65,x:162.3,y:271.3}).wait(1).to({graphics:mask_graphics_66,x:168.6,y:271.3}).wait(1).to({graphics:mask_graphics_67,x:174.9,y:271.3}).wait(1).to({graphics:mask_graphics_68,x:181.2,y:271.3}).wait(1).to({graphics:mask_graphics_69,x:187.5,y:271.3}).wait(1).to({graphics:mask_graphics_70,x:193.8,y:271.3}).wait(1).to({graphics:mask_graphics_71,x:200.1,y:271.3}).wait(1).to({graphics:mask_graphics_72,x:206.4,y:271.3}).wait(1).to({graphics:mask_graphics_73,x:212.7,y:271.3}).wait(1).to({graphics:mask_graphics_74,x:219,y:271.3}).wait(1).to({graphics:mask_graphics_75,x:225.3,y:271.3}).wait(1).to({graphics:mask_graphics_76,x:231.6,y:271.3}).wait(1).to({graphics:mask_graphics_77,x:237.9,y:271.3}).wait(1).to({graphics:mask_graphics_78,x:244.2,y:271.3}).wait(1).to({graphics:mask_graphics_79,x:250.5,y:271.3}).wait(1).to({graphics:mask_graphics_80,x:256.8,y:271.3}).wait(1).to({graphics:mask_graphics_81,x:263.1,y:271.3}).wait(1).to({graphics:mask_graphics_82,x:269.4,y:271.3}).wait(1).to({graphics:mask_graphics_83,x:275.7,y:271.3}).wait(1).to({graphics:mask_graphics_84,x:282,y:271.3}).wait(1).to({graphics:mask_graphics_85,x:288.3,y:271.3}).wait(1).to({graphics:mask_graphics_86,x:294.6,y:271.3}).wait(1).to({graphics:mask_graphics_87,x:300.9,y:271.3}).wait(1).to({graphics:mask_graphics_88,x:307.2,y:271.3}).wait(1).to({graphics:mask_graphics_89,x:313.5,y:271.3}).wait(1).to({graphics:mask_graphics_90,x:319.1,y:271.3}).wait(1).to({graphics:mask_graphics_91,x:322.2,y:271.3}).wait(1).to({graphics:mask_graphics_92,x:325.4,y:271.3}).wait(1).to({graphics:mask_graphics_93,x:328.5,y:271.3}).wait(1).to({graphics:mask_graphics_94,x:331.7,y:271.3}).wait(1).to({graphics:mask_graphics_95,x:334.8,y:271.3}).wait(1).to({graphics:mask_graphics_96,x:338,y:271.3}).wait(1).to({graphics:mask_graphics_97,x:341.1,y:271.3}).wait(1).to({graphics:mask_graphics_98,x:344.3,y:271.3}).wait(1).to({graphics:mask_graphics_99,x:347.5,y:271.3}).wait(1));

	// tiao
	this.instance_3 = new lib.loadingtiao();
	this.instance_3.setTransform(63,494.1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// BG1
	this.instance_4 = new lib.loadbackpic();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(1));

	// 三角1
	this.instance = new lib.三角1();
	this.instance.setTransform(473.1,532.6,0.1,0.1,0,0,0,44,47.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:44.1,regY:47.6,scaleX:0.8,scaleY:0.8,x:681.7,y:266.6},5).to({scaleX:1,scaleY:1,x:757.1,y:194.6},35,cjs.Ease.get(1)).wait(16));

	// 三角2
	this.instance_1 = new lib.三角2();
	this.instance_1.setTransform(293.5,441.8,0.1,0.1,0,0,0,3.5,91.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:3.4,regY:91.7,scaleX:0.8,scaleY:0.8,x:138.1,y:179.8},5).to({scaleX:1,scaleY:1,x:3.4,y:91.7},42,cjs.Ease.get(1)).wait(9));

	// 三角3
	this.instance_2 = new lib.三角3();
	this.instance_2.setTransform(301.9,511,0.1,0.1,0,0,0,107.5,63);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:183.5,y:423.1},5).to({scaleX:1,scaleY:1,x:107.5,y:387},31,cjs.Ease.get(1)).wait(20));

	// 三角4
	this.instance_3 = new lib.三角4();
	this.instance_3.setTransform(323.6,711.6,0.1,0.1,0,0,0,54.5,38.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:190.6,y:611.6},5).to({scaleX:1,scaleY:1,x:117.5,y:561.5},47,cjs.Ease.get(1)).wait(4));

	// 闪电1
	this.instance_4 = new lib.闪电1();
	this.instance_4.setTransform(493.5,979,0.1,0.1,0,0,0,44.5,59);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:611.5,y:867},5).to({scaleX:1,scaleY:1,x:655.5,y:819},50,cjs.Ease.get(1)).wait(1));

	// 闪电2
	this.instance_5 = new lib.闪电2();
	this.instance_5.setTransform(321.3,1036.1,0.1,0.1,0,0,0,78.5,63);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:222.7,y:962.5},5).to({scaleX:1,scaleY:1,x:148.5,y:926},39,cjs.Ease.get(1)).wait(12));

	// 三角5
	this.instance_6 = new lib.三角5();
	this.instance_6.setTransform(429.9,853.2,0.1,0.1,0,0,0,305.1,213.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({regY:214.3,scaleX:1,scaleY:1,x:665.1,y:1027.3},7).to({x:739.1,y:1089.3},23,cjs.Ease.get(1)).wait(30));

	//  (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_47 = new cjs.Graphics().p("An9BSIPClXIA5CgIv7Frg");
	var mask_graphics_48 = new cjs.Graphics().p("AtKDIIZcpEIA5CgI6VJZg");
	var mask_graphics_49 = new cjs.Graphics().p("AxkEtMAiQgMNIA5CfMgjJAMig");
	var mask_graphics_50 = new cjs.Graphics().p("A1LF/MApdgOyIA6CgMgqXAPHg");
	var mask_graphics_51 = new cjs.Graphics().p("A3+G/MAvEgQyIA5CgMgv9ARHg");
	var mask_graphics_52 = new cjs.Graphics().p("A5+HtMAzEgSNIA5CfMgz9ASjg");
	var mask_graphics_53 = new cjs.Graphics().p("A7LIIMA1egTEIA5CgMg2XATZg");
	var mask_graphics_54 = new cjs.Graphics().p("A7kIRMA2QgTWIA5CgMg3JATrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_graphics_47,x:752.3,y:396.5}).wait(1).to({graphics:mask_graphics_48,x:719,y:408.4}).wait(1).to({graphics:mask_graphics_49,x:690.8,y:418.4}).wait(1).to({graphics:mask_graphics_50,x:667.7,y:426.7}).wait(1).to({graphics:mask_graphics_51,x:649.8,y:433.1}).wait(1).to({graphics:mask_graphics_52,x:637,y:437.7}).wait(1).to({graphics:mask_graphics_53,x:629.3,y:440.4}).wait(1).to({graphics:mask_graphics_54,x:626.7,y:441.3}).wait(31));

	// 三角形
	this.instance_7 = new lib.三角形();
	this.instance_7.setTransform(364,728,1,1,0,0,0,337,321);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).wait(38));

	//  (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_38 = new cjs.Graphics().p("AiTC+IBnmnIDAAAIhxHUg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AjrIpIEUx9IDDAAIkgSpg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AlDOUIHE9TIDDAAInPd/g");
	var mask_1_graphics_41 = new cjs.Graphics().p("AmbT/MAJ0gopIDDAAMgJ/ApVg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AnzZqMAMkgz/IDDAAMgMvA0rg");
	var mask_1_graphics_43 = new cjs.Graphics().p("ApLfUMAPTg/UIDEAAMgPfBABg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgKjAk/MASEhKqIDDAAMgSPBLXg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgL7AqqMAUzhWAIDEAAMgU/BWtg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgNSAwVMAXihhVIDEAAMgXvBiBg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EgOqA2AMAaShsrIDDAAMgadBtXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_1_graphics_38,x:533,y:1076.8}).wait(1).to({graphics:mask_1_graphics_39,x:541.8,y:1040.5}).wait(1).to({graphics:mask_1_graphics_40,x:550.6,y:1004.2}).wait(1).to({graphics:mask_1_graphics_41,x:559.4,y:967.9}).wait(1).to({graphics:mask_1_graphics_42,x:568.2,y:931.6}).wait(1).to({graphics:mask_1_graphics_43,x:577,y:895.3}).wait(1).to({graphics:mask_1_graphics_44,x:585.7,y:859}).wait(1).to({graphics:mask_1_graphics_45,x:594.5,y:822.8}).wait(1).to({graphics:mask_1_graphics_46,x:603.3,y:786.5}).wait(1).to({graphics:mask_1_graphics_47,x:612.1,y:750.2}).wait(38));

	// 三角形
	this.instance_8 = new lib.三角形();
	this.instance_8.setTransform(364,728,1,1,0,0,0,337,321);
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).wait(47));

	//  (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_29 = new cjs.Graphics().p("AgfBeIj0i8IEzAAID0C8g");
	var mask_2_graphics_30 = new cjs.Graphics().p("AozlGIE1AAIMyJ8IkfARg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AtTouIE1AAIVyQ8IkJAhg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AxzsXIE0AAIezX9Ij0Axg");
	var mask_2_graphics_33 = new cjs.Graphics().p("A2Uv/IE1AAMAn0Ae8IjgBDg");
	var mask_2_graphics_34 = new cjs.Graphics().p("A60znIE1AAMAw0Al9IjKBSg");
	var mask_2_graphics_35 = new cjs.Graphics().p("A/U3PIE1AAMA50As8Ii1Bjg");
	var mask_2_graphics_36 = new cjs.Graphics().p("Egj0ga4IE1AAMBC0Az9IigB0g");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgoUgegIE1AAMBL0A68IiKCFg");
	var mask_2_graphics_38 = new cjs.Graphics().p("Egs0giIIE0AAMBU1BB8Ih0CVg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_2_graphics_29,x:12.5,y:625.7}).wait(1).to({graphics:mask_2_graphics_30,x:41.3,y:648.9}).wait(1).to({graphics:mask_2_graphics_31,x:70.2,y:672.1}).wait(1).to({graphics:mask_2_graphics_32,x:99,y:695.4}).wait(1).to({graphics:mask_2_graphics_33,x:127.8,y:718.6}).wait(1).to({graphics:mask_2_graphics_34,x:156.6,y:741.8}).wait(1).to({graphics:mask_2_graphics_35,x:185.4,y:765}).wait(1).to({graphics:mask_2_graphics_36,x:214.2,y:788.3}).wait(1).to({graphics:mask_2_graphics_37,x:243,y:811.5}).wait(1).to({graphics:mask_2_graphics_38,x:271.8,y:834.7}).wait(47));

	// 三角形
	this.instance_9 = new lib.三角形();
	this.instance_9.setTransform(364,728,1,1,0,0,0,337,321);
	this.instance_9._off = true;

	this.instance_9.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).wait(56));

	//  (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_25 = new cjs.Graphics().p("Ag/hFIBLgbIA0CUIh/Atg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AlBAVIJQjNIAzCXIp3Dag");
	var mask_3_graphics_27 = new cjs.Graphics().p("ApEBxIRVmAIA0CWIxuGJg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AtGDNIZao0IAzCXI5mI3g");
	var mask_3_graphics_29 = new cjs.Graphics().p("AxJEoMAhfgLmIA0CWMgheALng");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_3_graphics_25,x:226.5,y:582.3}).wait(1).to({graphics:mask_3_graphics_26,x:200.7,y:591}).wait(1).to({graphics:mask_3_graphics_27,x:174.8,y:599.8}).wait(1).to({graphics:mask_3_graphics_28,x:149,y:608.5}).wait(1).to({graphics:mask_3_graphics_29,x:123.1,y:617.3}).wait(56));

	// 三角形
	this.instance_10 = new lib.三角形();
	this.instance_10.setTransform(364,728,1,1,0,0,0,337,321);
	this.instance_10._off = true;

	this.instance_10.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).wait(60));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Eg6lBeOMAAAi8bMB1KAAAMAAAC8bg");
	mask_4.setTransform(375,603);

	// 人物照片
	this.instance_11 = new lib.人物照片();
	this.instance_11.setTransform(375,1656.5,1,1,0,0,0,375,445.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_11.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({y:760.5,alpha:1},12,cjs.Ease.get(1)).wait(55));

	// 上篇
	this.instance_12 = new lib.上篇();
	this.instance_12.setTransform(627,362,0.1,0.1,0,0,0,48,26);
	this.instance_12._off = true;

	this.instance_12.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31).to({_off:false},0).to({scaleX:1.2,scaleY:1.2},6).to({scaleX:0.95,scaleY:0.95},6).to({scaleX:1,scaleY:1},7).wait(35));

	// 余晓亮
	this.instance_13 = new lib.余晓亮();
	this.instance_13.setTransform(1042.9,283.5,1,1,0,0,0,279.9,95.5);
	this.instance_13._off = true;

	this.instance_13.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({x:359.9},12,cjs.Ease.get(1)).wait(60));

	// 面对面
	this.instance_14 = new lib.面对面();
	this.instance_14.setTransform(-250,160,1,1,0,0,0,218,51);
	this.instance_14._off = true;

	this.instance_14.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).to({x:382},11,cjs.Ease.get(1)).wait(66));

	// 电魂企业标志短横
	this.instance_15 = new lib.电魂企业标志短横();
	this.instance_15.setTransform(366.5,54,1,1,0,0,0,88.5,36);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_15.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({alpha:1},19).wait(65));

	// 背景闪电
	this.instance_16 = new lib.背景闪电();
	this.instance_16.setTransform(477,402,0.1,0.1,0,0,0,136,236);
	this.instance_16._off = true;

	this.instance_16.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},4).to({scaleX:1.1,scaleY:1.1},3).to({regX:136.1,scaleX:1.07,scaleY:1.07,x:477.1},4).to({regX:136,scaleX:1,scaleY:1,x:477},4).wait(69));

	// 背景
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFE").s().p("Eg6lBeOMAAAi8bMB1KAAAMAAAC8bg");
	this.shape.setTransform(375,603);

	this.shape.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.loadingBar = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6lBeOMAAAi8bMB1KAAAMAAAC8bg");
	mask.setTransform(375,603);

	// MC
	this.bar = new lib.loadingmc();
	this.bar.setTransform(375,603,1,1,0,0,0,375,603);

	this.bar.mask = mask;

	this.addChild(this.bar);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


// stage content:
(lib.assets = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;