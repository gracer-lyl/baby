$(function() {
	var yAxis = growObj.xAxis
	var values = growObj.data
	var i
	var len = yAxis.length
	var data = []
	for (i = 0; i < len; i++) {
		data.push({
			name: yAxis[i],
			value: values[i],
			color: '#08C'
		})
	}
	var chart = new iChart.Bar2D({
		render: 'canvasDiv',
		data: data,
		width: $('.chart-frame').width(),
		height: 300,
		offsetx: 5,
		turn_off_touchmove: true,
		coordinate: {
			width: '65%',
			height: '80%',
			grid_color: '#CCC',
			axis: {
				color: '#CCC',
				width: [1, 1, 0, 1]
			},
			scale: [{
				position: 'top',
				start_scale: growObj.yStart,
				end_scale: growObj.yEnd,
				scale_space: growObj.ySpace,
				label: {
					color: '#444'
				},
				listeners: {
					parseText: function(t, x, y) {
						return {
							text: t
						}
					}
				}
			}]
		},
		label: {
			color: '#444'
		},
		background_color: '#FFF',
		sub_option: {
			listeners: {
				parseText: function(r, t) {
					return t;
				}
			}
		},
		legend: {
			enable: false
		}
	});
	//利用自定义组件构造左上侧单位
	chart.plugin(new iChart.Custom({
		drawFn: function() {
			//计算位置
			var coo = chart.getCoordinate(),
				x = coo.get('originx'),
				y = coo.get('originy'),
				w = coo.width,
				h = coo.height;
			//在左上侧的位置，渲染一个单位的文字
			chart.target.textAlign('end')
				.textBaseline('bottom')
				.textFont('500 11px')
				.fillText('随访日期', x - 5, y, false, '#444')
				.textBaseline('top')
				.fillText('平均生长速率g/day', x + w + 24, y - 32, false, '#444')

		}
	}));
	chart.draw();
	$(window).resize(function() {
		chart.resize($('.chart-frame').width(), 300);
	});
});