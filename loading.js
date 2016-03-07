(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 25,
	color: "#999999",
    loadfest: [
		{src:"images/loadbackpic.jpg", id:"loadbackpic"},
		{src:"images/loadingtiao.jpg", id:"loadingtiao"},
		{src:"images/xiongmao2.png", id:"xiongmao2"}
	]
};



// symbols:



(lib.loadbackpic = function() {
	this.initialize(img.loadbackpic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.loadingtiao = function() {
	this.initialize(img.loadingtiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,55);


(lib.xiongmao2 = function() {
	this.initialize(img.xiongmao2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,115);


(lib.xiongmao = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xiongmao2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,115);


(lib.sj = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#406330").s().p("AirhVIFXAAIisCrg");
	this.shape.setTransform(17.3,8.6);

	this.addChild(this.shape);
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


(lib.xiongmaoMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sanjiao
	this.instance = new lib.sj();
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


(lib.loadingmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xiongmao
	this.instance = new lib.xiongmaoMC();
	this.instance.setTransform(74.8,418.6,1,1,0,0,0,54,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:683},99).wait(1));

	// diandian
	this.instance_1 = new lib.dianMC();
	this.instance_1.setTransform(450.3,621.1,1,1,0,0,0,22.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// txt
	this.text = new cjs.Text("d", "22px 'Microsoft YaHei'", "#919191");
	this.text.lineHeight = 22;
	this.text.setTransform(645.4,1116);

	this.text_1 = new cjs.Text("t", "22px 'Microsoft YaHei'", "#919191");
	this.text_1.lineHeight = 22;
	this.text_1.setTransform(637.2,1116);

	this.text_2 = new cjs.Text("L", "22px 'Microsoft YaHei'", "#919191");
	this.text_2.lineHeight = 22;
	this.text_2.setTransform(625.9,1116);

	this.text_3 = new cjs.Text(",", "22px 'Microsoft YaHei'", "#919191");
	this.text_3.lineHeight = 22;
	this.text_3.setTransform(620.6,1116);

	this.text_4 = new cjs.Text(".", "22px 'Microsoft YaHei'", "#919191");
	this.text_4.lineHeight = 22;
	this.text_4.setTransform(615.8,1116);

	this.text_5 = new cjs.Text("o", "22px 'Microsoft YaHei'", "#919191");
	this.text_5.lineHeight = 22;
	this.text_5.setTransform(602.3,1116);

	this.text_6 = new cjs.Text("C", "22px 'Microsoft YaHei'", "#919191");
	this.text_6.lineHeight = 22;
	this.text_6.setTransform(587.6,1116);

	this.text_7 = new cjs.Text("y", "22px 'Microsoft YaHei'", "#919191");
	this.text_7.lineHeight = 22;
	this.text_7.setTransform(569.5,1116);

	this.text_8 = new cjs.Text("g", "22px 'Microsoft YaHei'", "#919191");
	this.text_8.lineHeight = 22;
	this.text_8.setTransform(555.5,1116);

	this.text_9 = new cjs.Text("o", "22px 'Microsoft YaHei'", "#919191");
	this.text_9.lineHeight = 22;
	this.text_9.setTransform(541.5,1116);

	this.text_10 = new cjs.Text("l", "22px 'Microsoft YaHei'", "#919191");
	this.text_10.lineHeight = 22;
	this.text_10.setTransform(536.1,1116);

	this.text_11 = new cjs.Text("o", "22px 'Microsoft YaHei'", "#919191");
	this.text_11.lineHeight = 22;
	this.text_11.setTransform(522.1,1116);

	this.text_12 = new cjs.Text("n", "22px 'Microsoft YaHei'", "#919191");
	this.text_12.lineHeight = 22;
	this.text_12.setTransform(508.6,1116);

	this.text_13 = new cjs.Text("h", "22px 'Microsoft YaHei'", "#919191");
	this.text_13.lineHeight = 22;
	this.text_13.setTransform(495,1116);

	this.text_14 = new cjs.Text("c", "22px 'Microsoft YaHei'", "#919191");
	this.text_14.lineHeight = 22;
	this.text_14.setTransform(484,1116);

	this.text_15 = new cjs.Text("e", "22px 'Microsoft YaHei'", "#919191");
	this.text_15.lineHeight = 22;
	this.text_15.setTransform(472,1116);

	this.text_16 = new cjs.Text("T", "22px 'Microsoft YaHei'", "#919191");
	this.text_16.lineHeight = 22;
	this.text_16.setTransform(459.9,1116);

	this.text_17 = new cjs.Text("k", "22px 'Microsoft YaHei'", "#919191");
	this.text_17.lineHeight = 22;
	this.text_17.setTransform(441.4,1116);

	this.text_18 = new cjs.Text("r", "22px 'Microsoft YaHei'", "#919191");
	this.text_18.lineHeight = 22;
	this.text_18.setTransform(433,1116);

	this.text_19 = new cjs.Text("o", "22px 'Microsoft YaHei'", "#919191");
	this.text_19.lineHeight = 22;
	this.text_19.setTransform(419.5,1116);

	this.text_20 = new cjs.Text("w", "22px 'Microsoft YaHei'", "#919191");
	this.text_20.lineHeight = 22;
	this.text_20.setTransform(402.6,1116);

	this.text_21 = new cjs.Text("t", "22px 'Microsoft YaHei'", "#919191");
	this.text_21.lineHeight = 22;
	this.text_21.setTransform(394.4,1116);

	this.text_22 = new cjs.Text("e", "22px 'Microsoft YaHei'", "#919191");
	this.text_22.lineHeight = 22;
	this.text_22.setTransform(381.9,1116);

	this.text_23 = new cjs.Text("N", "22px 'Microsoft YaHei'", "#919191");
	this.text_23.lineHeight = 22;
	this.text_23.setTransform(364.5,1116);

	this.text_24 = new cjs.Text("l", "22px 'Microsoft YaHei'", "#919191");
	this.text_24.lineHeight = 22;
	this.text_24.setTransform(352.2,1116);

	this.text_25 = new cjs.Text("u", "22px 'Microsoft YaHei'", "#919191");
	this.text_25.lineHeight = 22;
	this.text_25.setTransform(339.1,1116);

	this.text_26 = new cjs.Text("o", "22px 'Microsoft YaHei'", "#919191");
	this.text_26.lineHeight = 22;
	this.text_26.setTransform(325.6,1116);

	this.text_27 = new cjs.Text("S", "22px 'Microsoft YaHei'", "#919191");
	this.text_27.lineHeight = 22;
	this.text_27.setTransform(312.9,1116);

	this.text_28 = new cjs.Text("c", "22px 'Microsoft YaHei'", "#919191");
	this.text_28.lineHeight = 22;
	this.text_28.setTransform(295.4,1116);

	this.text_29 = new cjs.Text("i", "22px 'Microsoft YaHei'", "#919191");
	this.text_29.lineHeight = 22;
	this.text_29.setTransform(289.5,1116);

	this.text_30 = new cjs.Text("n", "22px 'Microsoft YaHei'", "#919191");
	this.text_30.lineHeight = 22;
	this.text_30.setTransform(276,1116);

	this.text_31 = new cjs.Text("o", "22px 'Microsoft YaHei'", "#919191");
	this.text_31.lineHeight = 22;
	this.text_31.setTransform(262,1116);

	this.text_32 = new cjs.Text("r", "22px 'Microsoft YaHei'", "#919191");
	this.text_32.lineHeight = 22;
	this.text_32.setTransform(254.1,1116);

	this.text_33 = new cjs.Text("t", "22px 'Microsoft YaHei'", "#919191");
	this.text_33.lineHeight = 22;
	this.text_33.setTransform(246.4,1116);

	this.text_34 = new cjs.Text("c", "22px 'Microsoft YaHei'", "#919191");
	this.text_34.lineHeight = 22;
	this.text_34.setTransform(235.3,1116);

	this.text_35 = new cjs.Text("e", "22px 'Microsoft YaHei'", "#919191");
	this.text_35.lineHeight = 22;
	this.text_35.setTransform(222.8,1116);

	this.text_36 = new cjs.Text("l", "22px 'Microsoft YaHei'", "#919191");
	this.text_36.lineHeight = 22;
	this.text_36.setTransform(217,1116);

	this.text_37 = new cjs.Text("E", "22px 'Microsoft YaHei'", "#919191");
	this.text_37.lineHeight = 22;
	this.text_37.setTransform(204.9,1116);

	this.text_38 = new cjs.Text("u", "22px 'Microsoft YaHei'", "#919191");
	this.text_38.lineHeight = 22;
	this.text_38.setTransform(184.8,1116);

	this.text_39 = new cjs.Text("o", "22px 'Microsoft YaHei'", "#919191");
	this.text_39.lineHeight = 22;
	this.text_39.setTransform(171.3,1116);

	this.text_40 = new cjs.Text("h", "22px 'Microsoft YaHei'", "#919191");
	this.text_40.lineHeight = 22;
	this.text_40.setTransform(158.8,1116);

	this.text_41 = new cjs.Text("Z", "22px 'Microsoft YaHei'", "#919191");
	this.text_41.lineHeight = 22;
	this.text_41.setTransform(145.1,1116);

	this.text_42 = new cjs.Text("g", "22px 'Microsoft YaHei'", "#919191");
	this.text_42.lineHeight = 22;
	this.text_42.setTransform(131.1,1116);

	this.text_43 = new cjs.Text("n", "22px 'Microsoft YaHei'", "#919191");
	this.text_43.lineHeight = 22;
	this.text_43.setTransform(117.5,1116);

	this.text_44 = new cjs.Text("a", "22px 'Microsoft YaHei'", "#919191");
	this.text_44.lineHeight = 22;
	this.text_44.setTransform(105.4,1116);

	this.text_45 = new cjs.Text("H", "22px 'Microsoft YaHei'", "#919191");
	this.text_45.lineHeight = 22;
	this.text_45.setTransform(88.4,1116);

	this.text_46 = new cjs.Text("司", "22px 'Microsoft YaHei'", "#919191");
	this.text_46.lineHeight = 22;
	this.text_46.setTransform(518.4,1081.5);

	this.text_47 = new cjs.Text("公", "22px 'Microsoft YaHei'", "#919191");
	this.text_47.lineHeight = 22;
	this.text_47.setTransform(493.9,1081.5);

	this.text_48 = new cjs.Text("限", "22px 'Microsoft YaHei'", "#919191");
	this.text_48.lineHeight = 22;
	this.text_48.setTransform(469.9,1081.5);

	this.text_49 = new cjs.Text("有", "22px 'Microsoft YaHei'", "#919191");
	this.text_49.lineHeight = 22;
	this.text_49.setTransform(445.9,1081.5);

	this.text_50 = new cjs.Text("份", "22px 'Microsoft YaHei'", "#919191");
	this.text_50.lineHeight = 22;
	this.text_50.setTransform(422.4,1081.5);

	this.text_51 = new cjs.Text("股", "22px 'Microsoft YaHei'", "#919191");
	this.text_51.lineHeight = 22;
	this.text_51.setTransform(398.4,1081.5);

	this.text_52 = new cjs.Text("技", "22px 'Microsoft YaHei'", "#919191");
	this.text_52.lineHeight = 22;
	this.text_52.setTransform(374.9,1081.5);

	this.text_53 = new cjs.Text("科", "22px 'Microsoft YaHei'", "#919191");
	this.text_53.lineHeight = 22;
	this.text_53.setTransform(350.9,1081.5);

	this.text_54 = new cjs.Text("络", "22px 'Microsoft YaHei'", "#919191");
	this.text_54.lineHeight = 22;
	this.text_54.setTransform(326.9,1081.5);

	this.text_55 = new cjs.Text("网", "22px 'Microsoft YaHei'", "#919191");
	this.text_55.lineHeight = 22;
	this.text_55.setTransform(303.4,1081.5);

	this.text_56 = new cjs.Text("魂", "22px 'Microsoft YaHei'", "#919191");
	this.text_56.lineHeight = 22;
	this.text_56.setTransform(279.9,1081.5);

	this.text_57 = new cjs.Text("电", "22px 'Microsoft YaHei'", "#919191");
	this.text_57.lineHeight = 22;
	this.text_57.setTransform(255.4,1081.5);

	this.text_58 = new cjs.Text("州", "22px 'Microsoft YaHei'", "#919191");
	this.text_58.lineHeight = 22;
	this.text_58.setTransform(231.9,1081.5);

	this.text_59 = new cjs.Text("杭", "22px 'Microsoft YaHei'", "#919191");
	this.text_59.lineHeight = 22;
	this.text_59.setTransform(207.9,1081.5);

	this.text_60 = new cjs.Text("Loading", "30px 'Microsoft YaHei'", "#919191");
	this.text_60.textAlign = "center";
	this.text_60.lineHeight = 32;
	this.text_60.lineWidth = 131;
	this.text_60.setTransform(365.8,589.4);

	this.text_61 = new cjs.Text("100%", "21px 'Microsoft YaHei'", "#919191");
	this.text_61.textAlign = "center";
	this.text_61.lineHeight = 23;
	this.text_61.lineWidth = 57;
	this.text_61.setTransform(678.6,558.1);

	this.text_62 = new cjs.Text("0%", "21px 'Microsoft YaHei'", "#919191");
	this.text_62.textAlign = "center";
	this.text_62.lineHeight = 23;
	this.text_62.lineWidth = 47;
	this.text_62.setTransform(73,558.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_62},{t:this.text_61},{t:this.text_60},{t:this.text_59},{t:this.text_58},{t:this.text_57},{t:this.text_56},{t:this.text_55},{t:this.text_54},{t:this.text_53},{t:this.text_52},{t:this.text_51},{t:this.text_50},{t:this.text_49},{t:this.text_48},{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_24 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_31 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_32 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_40 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_41 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_42 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_43 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_44 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_45 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_46 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_47 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_48 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_49 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_50 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_51 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_52 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_53 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_54 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_55 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_56 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_57 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_58 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_59 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_60 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_61 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_62 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_63 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_64 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_65 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_66 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_67 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_68 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_69 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_70 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_71 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_72 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_73 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_74 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_75 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_76 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_77 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_78 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_79 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_80 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_81 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_82 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_83 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_84 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_85 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_86 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_87 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_88 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_89 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_90 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_91 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_92 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_93 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_94 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_95 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_96 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_97 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_98 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");
	var mask_graphics_99 = new cjs.Graphics().p("EgueADPQhWAAg9g9Qg9g8AAhWIAAAAQAAhVA9g9QA9g8BWAAMBc9AAAQBWAAA9A8QA9A9AABVIAAAAQAABWg9A8Qg9A9hWAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-247.4,y:521.9}).wait(1).to({graphics:mask_graphics_1,x:-241.1,y:521.9}).wait(1).to({graphics:mask_graphics_2,x:-234.8,y:521.9}).wait(1).to({graphics:mask_graphics_3,x:-228.5,y:521.9}).wait(1).to({graphics:mask_graphics_4,x:-222.2,y:521.9}).wait(1).to({graphics:mask_graphics_5,x:-215.9,y:521.9}).wait(1).to({graphics:mask_graphics_6,x:-209.6,y:521.9}).wait(1).to({graphics:mask_graphics_7,x:-203.3,y:521.9}).wait(1).to({graphics:mask_graphics_8,x:-197,y:521.9}).wait(1).to({graphics:mask_graphics_9,x:-190.7,y:521.9}).wait(1).to({graphics:mask_graphics_10,x:-184.4,y:521.9}).wait(1).to({graphics:mask_graphics_11,x:-178.1,y:521.9}).wait(1).to({graphics:mask_graphics_12,x:-171.8,y:521.9}).wait(1).to({graphics:mask_graphics_13,x:-165.5,y:521.9}).wait(1).to({graphics:mask_graphics_14,x:-159.2,y:521.9}).wait(1).to({graphics:mask_graphics_15,x:-152.9,y:521.9}).wait(1).to({graphics:mask_graphics_16,x:-146.6,y:521.9}).wait(1).to({graphics:mask_graphics_17,x:-140.3,y:521.9}).wait(1).to({graphics:mask_graphics_18,x:-134,y:521.9}).wait(1).to({graphics:mask_graphics_19,x:-127.7,y:521.9}).wait(1).to({graphics:mask_graphics_20,x:-121.4,y:521.9}).wait(1).to({graphics:mask_graphics_21,x:-115.1,y:521.9}).wait(1).to({graphics:mask_graphics_22,x:-108.8,y:521.9}).wait(1).to({graphics:mask_graphics_23,x:-102.5,y:521.9}).wait(1).to({graphics:mask_graphics_24,x:-96.2,y:521.9}).wait(1).to({graphics:mask_graphics_25,x:-89.9,y:521.9}).wait(1).to({graphics:mask_graphics_26,x:-83.6,y:521.9}).wait(1).to({graphics:mask_graphics_27,x:-77.3,y:521.9}).wait(1).to({graphics:mask_graphics_28,x:-71,y:521.9}).wait(1).to({graphics:mask_graphics_29,x:-64.7,y:521.9}).wait(1).to({graphics:mask_graphics_30,x:-58.4,y:521.9}).wait(1).to({graphics:mask_graphics_31,x:-52.1,y:521.9}).wait(1).to({graphics:mask_graphics_32,x:-45.8,y:521.9}).wait(1).to({graphics:mask_graphics_33,x:-39.5,y:521.9}).wait(1).to({graphics:mask_graphics_34,x:-33.2,y:521.9}).wait(1).to({graphics:mask_graphics_35,x:-26.9,y:521.9}).wait(1).to({graphics:mask_graphics_36,x:-20.6,y:521.9}).wait(1).to({graphics:mask_graphics_37,x:-14.3,y:521.9}).wait(1).to({graphics:mask_graphics_38,x:-8,y:521.9}).wait(1).to({graphics:mask_graphics_39,x:-1.7,y:521.9}).wait(1).to({graphics:mask_graphics_40,x:4.6,y:521.9}).wait(1).to({graphics:mask_graphics_41,x:10.9,y:521.9}).wait(1).to({graphics:mask_graphics_42,x:17.2,y:521.9}).wait(1).to({graphics:mask_graphics_43,x:23.5,y:521.9}).wait(1).to({graphics:mask_graphics_44,x:29.8,y:521.9}).wait(1).to({graphics:mask_graphics_45,x:36.1,y:521.9}).wait(1).to({graphics:mask_graphics_46,x:42.4,y:521.9}).wait(1).to({graphics:mask_graphics_47,x:48.7,y:521.9}).wait(1).to({graphics:mask_graphics_48,x:55,y:521.9}).wait(1).to({graphics:mask_graphics_49,x:61.3,y:521.9}).wait(1).to({graphics:mask_graphics_50,x:67.6,y:521.9}).wait(1).to({graphics:mask_graphics_51,x:73.9,y:521.9}).wait(1).to({graphics:mask_graphics_52,x:80.2,y:521.9}).wait(1).to({graphics:mask_graphics_53,x:86.5,y:521.9}).wait(1).to({graphics:mask_graphics_54,x:92.8,y:521.9}).wait(1).to({graphics:mask_graphics_55,x:99.1,y:521.9}).wait(1).to({graphics:mask_graphics_56,x:105.4,y:521.9}).wait(1).to({graphics:mask_graphics_57,x:111.7,y:521.9}).wait(1).to({graphics:mask_graphics_58,x:118,y:521.9}).wait(1).to({graphics:mask_graphics_59,x:124.3,y:521.9}).wait(1).to({graphics:mask_graphics_60,x:130.6,y:521.9}).wait(1).to({graphics:mask_graphics_61,x:136.9,y:521.9}).wait(1).to({graphics:mask_graphics_62,x:143.2,y:521.9}).wait(1).to({graphics:mask_graphics_63,x:149.5,y:521.9}).wait(1).to({graphics:mask_graphics_64,x:155.8,y:521.9}).wait(1).to({graphics:mask_graphics_65,x:162.1,y:521.9}).wait(1).to({graphics:mask_graphics_66,x:168.4,y:521.9}).wait(1).to({graphics:mask_graphics_67,x:174.7,y:521.9}).wait(1).to({graphics:mask_graphics_68,x:181,y:521.9}).wait(1).to({graphics:mask_graphics_69,x:187.3,y:521.9}).wait(1).to({graphics:mask_graphics_70,x:193.6,y:521.9}).wait(1).to({graphics:mask_graphics_71,x:199.9,y:521.9}).wait(1).to({graphics:mask_graphics_72,x:206.2,y:521.9}).wait(1).to({graphics:mask_graphics_73,x:212.5,y:521.9}).wait(1).to({graphics:mask_graphics_74,x:218.8,y:521.9}).wait(1).to({graphics:mask_graphics_75,x:225.1,y:521.9}).wait(1).to({graphics:mask_graphics_76,x:231.4,y:521.9}).wait(1).to({graphics:mask_graphics_77,x:237.7,y:521.9}).wait(1).to({graphics:mask_graphics_78,x:244,y:521.9}).wait(1).to({graphics:mask_graphics_79,x:250.3,y:521.9}).wait(1).to({graphics:mask_graphics_80,x:256.6,y:521.9}).wait(1).to({graphics:mask_graphics_81,x:262.9,y:521.9}).wait(1).to({graphics:mask_graphics_82,x:269.2,y:521.9}).wait(1).to({graphics:mask_graphics_83,x:275.5,y:521.9}).wait(1).to({graphics:mask_graphics_84,x:281.8,y:521.9}).wait(1).to({graphics:mask_graphics_85,x:288.1,y:521.9}).wait(1).to({graphics:mask_graphics_86,x:294.4,y:521.9}).wait(1).to({graphics:mask_graphics_87,x:300.7,y:521.9}).wait(1).to({graphics:mask_graphics_88,x:307,y:521.9}).wait(1).to({graphics:mask_graphics_89,x:313.3,y:521.9}).wait(1).to({graphics:mask_graphics_90,x:319.6,y:521.9}).wait(1).to({graphics:mask_graphics_91,x:325.9,y:521.9}).wait(1).to({graphics:mask_graphics_92,x:332.2,y:521.9}).wait(1).to({graphics:mask_graphics_93,x:338.5,y:521.9}).wait(1).to({graphics:mask_graphics_94,x:344.8,y:521.9}).wait(1).to({graphics:mask_graphics_95,x:351.1,y:521.9}).wait(1).to({graphics:mask_graphics_96,x:357.4,y:521.9}).wait(1).to({graphics:mask_graphics_97,x:363.7,y:521.9}).wait(1).to({graphics:mask_graphics_98,x:370,y:521.9}).wait(1).to({graphics:mask_graphics_99,x:376.3,y:521.9}).wait(1));

	// tiao
	this.instance_2 = new lib.loadingtiao();
	this.instance_2.setTransform(63,494.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// BG1
	this.instance_3 = new lib.loadbackpic();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

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
(lib.loading = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.loadingBar();
	this.instance.setTransform(375,603,1,1,0,0,0,375,603);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-190.7,603,1315.8,1206);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;