Zepto(function($) {
	var questionTpl = doT.compile([
		'{{~it.datas :q:k}}',
		'<div class="question-wrapper col-md-6 col-md-offset-3 hide" id="num-{{=q.num}}">',
    			'<p class="question">',
    				'{{=q.question}}',
    			'</p>',
    			'<div class="answer">',
    				'{{~q.btns :v:i}}',
    				'<button type="button" data-action="{{=v.action}}" data-target="{{=v.target}}" class="btn btn-primary btn-lg btn-block btn-choose">{{=v.text}}</button>',
    				'{{~}}',
    				'{{?k !== 0}}',
    				'<button type="button" class="btn btn-back btn-lg">上一题</button>',
    				'{{?}}',
    			'</div>',
    			'<div class="ad">',
    				'<img src="{{=q.ad}}" alt="面包">',
    			'</div>',
    	'</div>',
    	'{{~}}'
    	].join('')),
		questions = '吃西瓜喜欢这样吃,口香糖一次吃,喝饮料时这样,喜欢这样对待塑料上的小泡泡,喜欢这样的位置,看到反光的东西第一反应是, 被蚊子咬了个包的反应是,一个人喝酸奶时,在陌生人面前与在熟悉人面前，你的表现差异大吗？,如果要买夜宵给男友，你会买什么？,你因为工作的事情而经常熬夜吗？,早餐和下午茶最喜欢？'.split(','),
		btnsTexts = 'A 直接用勺子挖,B 切成片,C 做成西瓜汁;A 一颗,B 两颗,C 三颗;A 拧开直接喝,B 用吸管,C 边吸边咬;A 一个个捏破,B 两个两个按破,C 直接无视;A 靠中间,B 靠窗,C 靠墙;A 扭头闪,B 想照,C 好喜欢;A 抓破,B 涂止痒水,C 掐“十”字;A 舔干净塑料纸,B 用勺子代替吸管,C 倒在杯子里喝;A 是的，很大,B 有点,C 没什么差异;A 奶黄小餐包,B 饼干,C 粥;A 有过，但不经常,B 经常,C 从不熬夜;A 奶黄小餐包,B 草莓奶油卷,C 玛格丽特饼干'.split(';'),
		btnActions = '3,2,4;3,4,6;5,7,6;8,9,7;6,9,8;9,8,7;8,9,10;10,9,6;10,12,11;A,11,12;C,12,A;B,D,E'.split(';'),
		results = '标准硬妹子, 你是一个内心强大的女生，浑身上下透着一种霸气，让人无法直视，给人一种震慑感。过去的日子你并不是一张白纸，经历过种种坎坷与波折，追求过梦想，虽然失败了，但依然顽强地存活在世间，见的极品多了，你自然淡定，阅的风景多了，你也不会狂喜。因此当你把心态修练得十分平和的时候，你也就达到了那种“无欲则刚”的境界。作为一名硬妹子，你充满的是正能量，尽管你在最初的时候十分脆弱，需要别人保护，但渐渐地，你成为了保护别人的妹子。; 标准软妹子, 作为浪漫派的女生，你给人一种很标准软妹子的感觉。你很善良也很单纯，别人跟你一起总会感觉到很舒心，你不喜欢让人出丑，也不喜欢去逼迫别人做一些事情。你有很多的幻想，尽管那都是不切实际的，但事实上浪漫是生活的一种格调，也因如此，你让人觉得你特别不同。自然，也不忍心去伤害你。作为一个名副其实的软妹子，你有时候也会犯犯迷糊，经常不着边际，偶尔还会因为感情问题迷失方向，但那并不要紧，因为，软妹子都是会成长的，只是还没到时候。; 外软内硬, 有的软妹子，满脑子都是不切实际的想法，同样，你也有很多想法，但是显然你不是标准意义上的软妹子。因为你的想法是你所要实现的目标。尽管你的外表看起来很像软妹子，也让人想要好好地守护着，但是其实你的内心是很强大的。因为有了心中的向往，所以你会朝着这个目标奋斗，这恰恰能反映一个人内心的强大。作为一个外表看起来是软妹子，内心住着一个硬妹子的人，有时候你也会觉得有些无奈，但是慢慢地，你也习惯了这种“表里不一”。; 外硬内软, 生活中的你，给人一种很强大的感觉，不仅从你的外表，包括说话的语气，言语的逻辑，眼神的坚定中看得出来，在你一个人独处的时候，你也会让人觉得你一个人也可以过得很好。但其实，你的内心是柔软的，一个人的时候也会默默地哭，也会因为一些难过的坎而没有办法做到十分地放得开，你也想要有人在你身边守护着你……你坚信着一个人的时候，多读些好书，多多去旅游见见世面，多与不同的人交流，人总能在这之中收获到不少好东西。你是一个外硬内软的妹子，毋庸置疑。; 时硬时软, 你是一个挺性情的人哦，平时也喜欢自由的环境，自由地表达情绪，自由地做自己想做的事情。你的情绪是多变的，有时候给人一种柔弱的感觉，有的时候也给人很强势的印象。可能有一段时间你讨厌这样的自己，不能稳固如一。但慢慢地你已经接受了这样的事实，那就是，作为一个妹子，你有时候可以是软妹子，有时候也可以变身成为硬气女生。不管哪一个，都是你。不过，你也是慢慢地修炼你的内心，力求一直可以坚强、稳定，而不是耍小女人脾气。'.split(';'),
		rslMapping = {A:0, B: 1, C: 2, D:3, E: 4},
		obj = {datas: []};

	//初始化问题
	questions.forEach(function(item, index) {
		var texts = btnsTexts[index].split(','),
			actions = btnActions[index].split(','),
			data = {
				num: index + 1,
				question: item,
				ad: '/img/bread_' + (index % 8) + '.jpg',
				btns: []
			},
			reg = /\d/;
		//按钮
		actions.forEach(function(action, innerIndex){
			data.btns.push({
				action: reg.test(action)? 'jump': 'result',
				text: texts[innerIndex],
				target: action
			});
		});
		obj.datas.push(data);
	});
	$('#content').append(questionTpl(obj))
	//选择答案
	.on('click', '.btn-choose', function(e) {
		var $this = $(this), action = $this.data('action'), target = $this.data('target'),
			$wrapper, result;
		if(action === 'jump') {			
			$wrapper = $this.closest('.question-wrapper').addClass('hide');
			$('#num-' + target).removeClass('hide').find('.btn-back').data('back', $wrapper.attr('id')); 
		}else {
			$wrapper = $this.closest('.question-wrapper').addClass('hide');
			result = results[rslMapping[target]].split(',');

			$('#result').removeClass('hide')
			.find('.caption').html(result[0]);

			$('#result').find('.desc').html(result[1]);
			$('#result').find('.ad img').attr('src', '/img/bread_' + ((new Date()).getTime() % 8) + '.jpg');
			window.shareText = '【软妹子测试】我居然是个 ' + result[0];
		}
	})
	//上一题
	.on('click', '.btn-back', function(e) {
		var $this = $(this), back = $this.data('back');
		$this.closest('.question-wrapper').addClass('hide');
		$('#' + back).removeClass('hide');
	})
	//分享
	.on('click', '.btn-share', function(e) {
		$('#share').removeClass('hide');
	})
	//重新测试
	.on('click', '.btn-test-again', function(e) {
		$('#result').addClass('hide');
		$('#num-1').removeClass('hide');
	})
	//开始测试
	.on('click', '.btn-start', function(e) {
		$('#num-1').removeClass('hide');
		$('#start').addClass('hide');
	});

	$('#share').on('click', function(e) {
		$(this).addClass('hide');
	});
});

WeixinApi.ready(function(Api) {

    // 微信分享的数据
    var wxData = {
        "appId": "", // 服务号可以填写appId
        "imgUrl" : 'http://www.notanumber.cn:4000/img/avatar.png?time=4',
        "link" : 'http://www.notanumber.cn:4000',
        "desc" : '三分钟测出你和软妹子的直接距离！！！准到爆！！！',
        "title" : "软妹子测试"
    };

    // 分享的回调
    var wxCallbacks = {
        // 分享操作开始之前
        ready : function() {
            // 你可以在这里对分享的数据进行重组
            wxData.desc = window.shareText || '三分钟测出你和软妹子的直接距离！！！准到爆！！！';
        },
        // 分享被用户自动取消
        cancel : function(resp) {
            // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？     
        },
        // 分享失败了
        fail : function(resp) {
            // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
            
        },
        // 分享成功
        confirm : function(resp) {
            // 分享成功了，我们是不是可以做一些分享统计呢？
            //window.location.href='http://192.168.1.128:8080/wwyj/test.html';
            
        },
        // 整个分享过程结束
        all : function(resp) {
            // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
            
        }
    };

    // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
    Api.shareToFriend(wxData, wxCallbacks);

    // 点击分享到朋友圈，会执行下面这个代码
    Api.shareToTimeline(wxData, wxCallbacks);

    // 点击分享到腾讯微博，会执行下面这个代码
    Api.shareToWeibo(wxData, wxCallbacks);
});