$(function() {

	var w1 = [5, 8, 10, 18, 24, 36, 44, 60, 78, 83, 88, 96],
		w2 = [8, 10, 13, 22, 28, 40, 48, 67, 82, 85, 90, 100],
		t;
	var data = [{
		name: 'SH',
		value: w1,
		color: '#0d8ecf',
		line_width: 1
	}, {
		name: 'WHO',
		value: w2,
		color: '#6db284',
		line_width: 1
	}];

	var labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "12", "10", "11", "12", "12", "05", "06", "07", "08", "09", "10", "11"];

	var chart = new iChart.LineBasic2D({
		render: 'canvasDiv1',
		data: data,
		align: 'center',
		fit: false,
		shadow: false,
		width: $('.chart-frame').width(),
		height: 300,
		border: 0,
		turn_off_touchmove: true,
		//background_color: '#0391d5',
		sub_option: {
			smooth: true,
			label: true,
			hollow: false,
			hollow_inside: false,
			point_size: 1
		},
		legend: {
			enable: true,
			row: 1, //设置在一行上显示，与column配合使用
			column: 'max',
			valign: 'top',
			sign: 'bar',
			background_color: null, //设置透明背景
			offsetx: -10, //设置x轴偏移，满足位置需要
			offsety: -10,
			border: true
		},
		coordinate: {
			grid_color: '#c8c8c8',
			axis: {
				color: '#ccc',
				width: [0, 0, 0, 0]
			},
			scale: [{
				position: 'left',
				start_scale: 0,
				end_scale: 100,
				scale_space: 20,
				scale_size: 1,
				scale_enable: false,
				label: {
					color: '#323232',
					fontsize: 10
				},
				scale_color: '#000'
			}, {
				position: 'bottom',
				label: {
					color: '#323232',
					fontsize: 10,
				},
				scale_enable: true,
				labels: labels
			}]
		}
	});
	//利用自定义组件构造左侧说明文本
	chart.plugin(new iChart.Custom({
		drawFn: function() {
			//计算位置
			var coo = chart.getCoordinate(),
				x = coo.get('originx'),
				y = coo.get('originy'),
				w = coo.width,
				h = coo.height;
			//在左上侧的位置，渲染一个单位的文字
			chart.target.textAlign('start')
				.textBaseline('bottom')
				.textFont('400 10px');
		}
	}));
	chart.on('beforedraw', function(e) {
		chart.START_RUN_TIME = new Date().getTime();
		return true;
	});

	chart.on('draw', function(e) {
		chart.END_RUN_TIME = new Date().getTime();
		chart.RUN_TIME_COST = chart.END_RUN_TIME - chart.START_RUN_TIME;
		// $('#canvasDiv1>div').css('width', '300px').css('overflow', 'auto')
	});
	//开始画图
	chart.draw();
	$(window).resize(function() {
		chart.resize($('.chart-frame').width(), 300);
		// $('#canvasDiv1>div').css('width', '300px').css('overflow', 'auto')
	});
});