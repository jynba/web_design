
	option3 = {
		title: {
			text: '1921-2019年党员人数变化',
			subtext: '',
			left: '16%',
			top: '0%',   // 等价于 y: '16%'
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			left: 'left',
			data: ['党员数量'],
		},
		toolbox: {
			show: true,
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				dataView: { readOnly: false },
				magicType: { type: ['bar', 'line'] },
				restore: {},
				saveAsImage: {}
			}
		},
		grid: {  // 等价于 y: '16%'
			left: '3%',
			right: '8%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['1921', '1922', '1923', '1924', '1925', '1927', '1928', '1934', '1937', '1940', '1945', '1947', '1949', '1950', '1954', '1956', '1959', '1961', '1969', '1973', '1977', '1980', '1981', '1982', '1983', '1985', '1986', '1987', '1988', '1990', '1991', '1992', '1994', '1995', '1996', '1997', '1998', '1999', '2002', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],

		},
		yAxis: {
			name: '党员人数',
			type: 'value',
			axisLabel: {
				formatter: function (value, index) {
					return value / 10000 + '万';
				}
			},
			axisLine: {
				show: true
			}
		},
		series: [
			{
				name: '党员人数',
				type: 'line',
				data: [
					{ value: 57, name: '1921' },
					{ value: 195, name: '1922' },
					{ value: 432, name: '1923' },
					{ value: 994, name: '1925' },
					{ value: 57000, name: '1927' },
					{ value: 10000, name: '1927' },
					{ value: 40000, name: '1928' },
					{ value: 300000, name: '1934' },
					{ value: 40000, name: '1937' },
					{ value: 800000, name: '1940' },
					{ value: 1210000, name: '1945' },
					{ value: 2700000, name: '1947' },
					{ value: 4480000, name: '1949' },
					{ value: 5000000, name: '1950' },
					{ value: 6500000, name: '1954' },
					{ value: 10730000, name: '1956' },
					{ value: 13500000, name: '1959' },
					{ value: 17000000, name: '1961' },
					{ value: 22000000, name: '1969' },
					{ value: 28000000, name: '1973' },
					{ value: 35000000, name: '1977' },
					{ value: 38000000, name: '1980' },
					{ value: 38920000, name: '1981' },
					{ value: 39650000, name: '1982' },
					{ value: 40000000, name: '1982' },
					{ value: 42000000, name: '1985' },
					{ value: 44000000, name: '1986' },
					{ value: 46000000, name: '1987' },
					{ value: 47000000, name: '1988' },
					{ value: 49000000, name: '1991' },
					{ value: 51000000, name: '1992' },
					{ value: 52000000, name: '十四大' },
					{ value: 54000000, name: '十四大' },
					{ value: 55000000, name: '十四大' },
					{ value: 57000000, name: '十四大' },
					{ value: 58000000, name: '十四大' },
					{ value: 61000000, name: '十四大' },
					{ value: 63000000, name: '十四大' },
					{ value: 66941000, name: '十四大' },
					{ value: 68000000, name: '十四大' },
					{ value: 69000000, name: '2005' },
					{ value: 72391000, name: '2006' },
					{ value: 73363000, name: '2007' },
					{ value: 75930000, name: '2008' },
					{ value: 77995000, name: '2009' },
					{ value: 80878000, name: '十四大' },
					{ value: 82602000, name: '十四大' },
					{ value: 85127000, name: '十四大' },
					{ value: 86686000, name: '十四大' },
					{ value: 87793000, name: '十四大' },
					{ value: 88758000, name: '十四大' },
					{ value: 89447000, name: '十四大' },
					{ value: 89564000, name: '十四大' },
					{ value: 90594000, name: '十四大' },
					{ value: 91914000, name: '十四大' },

				],
				itemStyle: {
					color: '#ff8c71',
				},

			}
		]
	};
	var chart3 = echarts.init(document.getElementById('line'));
	chart3.setOption(option3);
