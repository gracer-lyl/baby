$(function() {
	var chart = new iChart.ColumnStacked2D({
		render: 'canvasDiv',
		data: growObj.data,
		labels: growObj.xAxis,
		title: {
			text: '哺乳柱状图',
			color: '#444',
			textAlign: 'center',
			padding: '0 20',
			font: '微软雅黑',
			fontsize: 14,
			height: 30
		},
		padding: '2 0',
		width: $('.chart-frame').width(),
		height: 300,
		border: 0,
		column_width: 20,
		background_color: '#FFF',
		label: {
			color: '#000',
			font: '微软雅黑',
			fontsize: 11,
			fontweight: 500
		},
		turn_off_touchmove: true,
		legend: {
			enable: true,
			align: 'center',
			valign: 'top',
			column: 2,
			background_color: null,
			color: '#444',
			fontsize: 10,
			font: '微软雅黑',
			fontweight: 400,
			border: {
				enable: false
			}
		},
		sub_option: {
			label: {
				fontsize: 10,
				fontweight: 400,
				color: '#FFF'
			}
		},
		column_width: 30,
		coordinate: {
			grid_color: '#EEE',
			background_color: null,
			axis: {
				color: '#EEE',
				width: 1
			},
			scale: [{
				position: 'left',
				scale_enable: false,
				start_scale: growObj.yStart,
				scale_space: growObj.ySpace,
				end_scale: growObj.yEnd,
				label: {
					color: '#000',
					fontsize: 10,
					fontweight: 400
				}
			}],
			width: '80%',
			height: '80%'
		}
	});

	//利用自定义组件构造左上侧单位
	chart.plugin(new iChart.Custom({
		drawFn: function() {
			//计算位置
			var coo = chart.getCoordinate(),
				x = coo.get('originx'),
				y = coo.get('originy');
			//在左上侧的位置，渲染一个单位的文字
			chart.target.textAlign('end')
				.textBaseline('bottom')
				.textFont('500 11px 微软雅黑')
				.fillText('喂养量', x + 10, y - 20, false, '#000')
		}
	}));

	chart.draw();

	$(window).resize(function() {
		chart.resize($('.chart-frame').width(), 300);
	});
});