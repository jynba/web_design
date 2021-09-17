	var mydata = [
		{ name: '北京', value: 50, view: '故宫博物院', event: '在明、清两代皇宫及其收藏的基础上建立起来的中国综合性博物馆。' }, { name: '天津', value: 50, view: '', event: '' },
		{ name: '上海', value: 50, view: '中共一大会址纪念馆', event: '于1921年7月23日至8月初在上海法租界望志路106号（现兴业路76号）和浙江嘉兴召开。' }, { name: '重庆', value: 50, view: '', event: '' },
		{ name: '河北', value: 100, view: '', event: '' }, { name: '河南', value: 100, view: '', event: '' },
		{ name: '云南', value: 200, view: '', event: '' }, { name: '辽宁', value: 200, view: '', event: '' },
		{ name: '黑龙江', value: 200, view: '', event: '' }, { name: '湖南', value: 100, view: '', event: '' },
		{ name: '安徽', value: 200, view: '', event: '' }, { name: '山东', value: 200, view: '', event: '' },
		{ name: '新疆', value: 200, view: '', event: '' }, { name: '江苏', value: 100, view: '', event: '' },
		{ name: '浙江', value: 200, view: '', event: '' }, { name: '江西', value: 200, view: '', event: '。' },
		{ name: '湖北', value: 100, view: '', event: '' }, { name: '广西', value: 200, view: '', event: '' },
		{ name: '甘肃', value: 200, view: '', event: '' }, { name: '山西', value: 200, view: '', event: '' },
		{ name: '内蒙古', value: 200, view: '', event: '' }, { name: '陕西', value: 100, view: '', event: '' },
		{ name: '吉林', value: 100, view: '', event: '' }, { name: '福建', value: 200, view: '', event: '' },
		{ name: '贵州', value: 100, view: '', event: '' }, { name: '广东', value: 100, view: '', event: '' },
		{ name: '青海', value: 200, view: '', event: '' }, { name: '西藏', value: 200, view: '', event: '' },
		{ name: '四川', value: 100, view: '', event: '' }, { name: '宁夏', value: 200, view: '', event: '' },
		{ name: '海南', value: 200, view: '', event: '' }, { name: '台湾', value: 200, view: '', event: '' },
		{ name: '香港', value: 200, view: '香港历史博物馆', event: '' }, { name: '澳门', value: 200, view: '澳门艺术博物馆', event: '' },
		{ name: '延安市', value: 49, view: '延安革命纪念馆', event: '' }, { name: '赣州市', value: 49, view: '瑞金中央革命根据地纪念馆', event: '' },
		{ name: '南海诸岛', value: 199, view: '', event: '' }, { name: '遵义市', value: 49, view: '遵义会议会址纪念馆', event: '' },
		{ name: '东莞市', value: 49, view: '鸦片战争博物馆', event: '坐落在东莞市虎门镇海口东岸的威远炮台旧址附近，背山面海' },
		{ name: '长春市', value: 49, view: '伪满皇宫博物院', event: '' }, { name: '许昌市', value: 49, view: '禹州钧官窑址博物馆', event: '' },
		{ name: '武汉市', value: 49, view: '武昌起义纪念馆', event: '' }, { name: '南京市', value: 49, view: '侵华日军南京大屠杀遇难同胞纪念馆', event: '' },
		{ name: '荆州市', value: 50, view: '荆州博物馆', event: '' }, { name: '石家庄市', value: 49, view: '西柏坡纪念馆', event: '' },
		{ name: '宜昌市', value: 50, view: '宜昌博物院', event: '' }, { name: '梅州市', value: 50, view: '中国客家博物馆', event: '' },
		{ name: '黄冈市', value: 50, view: '黄冈博物馆', event: '' }, { name: '深圳市', value: 50, view: '深圳博物馆', event: '' },
		{ name: '成都市', value: 50, view: '成都博物馆', event: '' }, { name: '中山市', value: 50, view: '孙中山故居纪念馆', event: '' },
		{ name: '彭州市', value: 50, view: '彭州市博物馆', event: '' }, { name: '阳江市', value: 50, view: '广东海上丝绸之路博物馆', event: '' },
		{ name: '宜宾市', value: 50, view: '宜宾市博物馆', event: '' }, { name: '沈阳市', value: 49, view: '九一八历史博物馆', event: '' },
		{ name: '贵阳市', value: 50, view: '贵州省博物馆', event: '' }, { name: '阳泉市', value: 50, view: '百团大战纪念馆', event: '' },
		{ name: '昆明市', value: 50, view: '云南省博物馆', event: '' }, { name: '济南市', value: 50, view: '山西博物院', event: '' },
		{ name: '合肥市', value: 50, view: '安徽博物馆', event: '' }, { name: '天津市', value: 50, view: '天津历史博物馆', event: '' },
		{ name: '开封市', value: 50, view: '开封博物馆', event: '' }, { name: '太原市', value: 50, view: '山西博物院', event: '' },
		{ name: '西安市', value: 50, view: '陕西省美术博物馆', event: '' }, { name: '哈尔滨市', value: 50, view: '黑龙江省博物馆', event: '' },
		{ name: '无锡市', value: 50, view: '无锡博物院', event: '' }, { name: '拉萨市', value: 50, view: '西藏博物馆', event: '' },
		{ name: '杭州市', value: 50, view: '浙江省博物馆', event: '' }, { name: '西宁市', value: 50, view: '青海省博物馆', event: '' },
		{ name: '兰州市', value: 50, view: '甘肃省博物馆', event: '' }, { name: '张掖市', value: 50, view: '甘州区博物馆', event: '' },
		{ name: '洛阳市', value: 50, view: '洛阳博物馆', event: '' }, { name: '酒泉市', value: 50, view: '酒泉市博物馆', event: '' },
		{ name: '敦煌市', value: 50, view: '敦煌市博物馆', event: '' }, { name: '玉门市', value: 50, view: '玉门市博物馆', event: '' },
		{ name: '海西州德令哈市', value: 49, view: '海西州民族博物馆', event: '' }, { name: '包头市', value: 50, view: '包头博物馆', event: '' },
		{ name: '嘉峪关市', value: 50, view: '嘉峪关长城博物馆', event: '' }, { name: '庆阳市', value: 50, view: '庆阳市博物馆', event: '' },
		{ name: '平凉市', value: 50, view: '平凉市博物馆', event: '' }, { name: '临夏市', value: 50, view: '临夏回族自治州博物馆', event: '' },
		{ name: '乌海市', value: 50, view: '乌海市博物馆', event: '' }, { name: '通辽市', value: 50, view: '通辽市博物馆', event: '' },
		{ name: '鄂尔多斯市', value: 50, view: '鄂尔多斯博物馆', event: '' }, { name: '赤峰市', value: 50, view: '赤峰市博物馆', event: '' },
		{ name: '安阳市', value: 50, view: '安阳市博物馆', event: '' }, { name: '伊春市', value: 50, view: '伊春市博物馆', event: '' },
		{ name: '临清市', value: 50, view: '临清市博物馆', event: '' }, { name: '绥化市', value: 50, view: '绥化市博物馆', event: '' },
		{ name: '菏泽市', value: 50, view: '成武县博物馆', event: '' }, { name: '白城市', value: 50, view: '白城市博物馆', event: '' },
		{ name: '临沂市', value: 49, view: '临沂市博物馆', event: '' }, { name: '大安市', value: 50, view: '大安市博物馆', event: '' },
		{ name: '荣成市', value: 50, view: '荣成博物馆', event: '' }, { name: '辽源市', value: 50, view: '辽源市博物馆', event: '' },
		{ name: '威海市', value: 49, view: '甲午战争博物馆', event: '' }, { name: '四平市', value: 49, view: '四平战役纪念馆', event: '' },
		{ name: '泰安市', value: 50, view: '泰安市博物馆', event: '' }, { name: '双辽市', value: 50, view: '伊通满族民俗博物馆', event: '' },
		{ name: '济宁市', value: 50, view: '济宁市博物馆', event: '' }, { name: '通化市', value: 50, view: '通化市高志航纪念馆', event: '' },
		{ name: '邹城市', value: 50, view: '邹城博物馆', event: '' }, { name: '大连市', value: 50, view: '旅顺博物馆', event: '' },
		{ name: '高密市', value: 50, view: '高密市博物馆', event: '' }, { name: '鞍山市', value: 50, view: '鞍山市博物馆', event: '' },
		{ name: '昌邑市', value: 50, view: '昌邑市博物馆', event: '' }, { name: '抚顺市', value: 50, view: '抚顺市雷锋纪念馆', event: '' },
		{ name: '青州市', value: 50, view: '青州市博物馆', event: '' }, { name: '本溪市', value: 49, view: '东北抗联史实陈列馆', event: '' },
		{ name: '潍坊市', value: 50, view: '潍坊市博物馆', event: '' }, { name: '凌海市', value: 49, view: '凌海市萧军纪念馆', event: '' },
		{ name: '莱州市', value: 50, view: '莱州市博物馆', event: '' }, { name: '营口市', value: 50, view: '营口市博物馆', event: '' },
		{ name: '龙口市', value: 50, view: '龙口市博物馆', event: '' }, { name: '阜新市', value: 49, view: '阜新万人坑死难矿工纪念馆', event: '' },
		{ name: '诸城市', value: 50, view: '诸城市博物馆', event: '' }, { name: '辽阳市', value: 50, view: '辽阳博物馆', event: '' },
		{ name: '烟台市', value: 50, view: '烟台市博物馆', event: '' }, { name: '定州市', value: 50, view: '定州市博物馆', event: '' },
		{ name: '东营市', value: 50, view: '东营市历史博物馆', event: '' }, { name: '秦皇岛市', value: 50, view: '山海关长城博物馆', event: '' },
		{ name: '滕州市', value: 50, view: '滕州市博物馆  ', event: '' }, { name: '廊坊市', value: 50, view: '廊坊博物馆', event: '' },
		{ name: '枣庄市', value: 50, view: '枣庄市博物馆  ', event: '' }, { name: '沧州市', value: 50, view: '沧州市博物馆', event: '' },
		{ name: '淄博市', value: 50, view: '淄博市博物馆', event: '' }, { name: '唐山市', value: 50, view: '唐山抗震纪念馆', event: '' },
		{ name: '平度市', value: 50, view: '平度市博物馆', event: '' }, { name: '张家口市', value: 50, view: '张家口市博物馆', event: '' },
		{ name: '胶州市', value: 50, view: '胶州市博物馆', event: '' }, { name: '邯郸市', value: 49, view: '邯郸市博物馆', event: '' },
		{ name: '焦作市', value: 50, view: '焦作市博物馆', event: '' }, { name: '晋中市', value: 50, view: '麻田八路军总部纪念馆', event: '' },
		{ name: '鹤壁市', value: 50, view: '鹤壁市博物馆', event: '' }, { name: '常德市', value: 50, view: '常德市博物馆', event: '' },
		{ name: '新乡市', value: 50, view: '新乡市博物馆', event: '' }, { name: '益阳市', value: 50, view: '益阳市博物馆', event: '' },
		{ name: '濮阳市', value: 50, view: '濮阳市博物馆', event: '' }, { name: '衡阳市', value: 50, view: '衡阳市博物馆', event: '' },
		{ name: '许昌市', value: 50, view: '许昌市博物馆', event: '' }, { name: '岳阳市', value: 50, view: '岳阳博物馆', event: '' },
		{ name: '三门峡市', value: 50, view: '三门峡市博物馆', event: '' }, { name: '株洲市', value: 50, view: '株洲市博物馆', event: '' },
		{ name: '信阳市', value: 49, view: '鄂豫皖革命根据地首府旧址纪念馆', event: '' }, { name: '毕节市', value: 50, view: '毕节地区博物馆', event: '' },
		{ name: '周口市', value: 50, view: '周口市平粮台古城博物馆', event: '' }, { name: '凯里市', value: 50, view: '黔东南州民族博物馆', event: '' },
		{ name: '咸阳市', value: 50, view: '咸阳市博物馆', event: '' }, { name: '大理市', value: 50, view: '大理市博物馆', event: '' },
		{ name: '宝鸡市', value: 50, view: '宝鸡青铜器博物院', event: '' }, { name: '三亚市', value: 50, view: '三亚市博物馆', event: '' },
		{ name: '榆林市', value: 50, view: '榆林民俗博物馆', event: '' }, { name: '玉溪市', value: 50, view: '玉溪市博物馆', event: '' },
		{ name: '安康市', value: 50, view: '安康市博物馆', event: '' }, { name: '海口市', value: 50, view: '海南省博物馆', event: '' },
		{ name: '苏州市', value: 50, view: '苏州博物馆', event: '' }, { name: '眉山市', value: 50, view: '三苏祠博物馆', event: '' },
		{ name: '太仓市', value: 50, view: '太仓博物馆', event: '' }, { name: '宜宾市', value: 50, view: '宜宾市博物馆', event: '' },
		{ name: '常熟市', value: 50, view: '常熟博物馆', event: '' }, { name: '峨眉山市', value: 50, view: '峨眉山博物馆', event: '' },
		{ name: '张家港市', value: 50, view: '张家港博物馆', event: '' }, { name: '绵阳市', value: 50, view: '绵阳市博物馆', event: '' },
		{ name: '常州市', value: 50, view: '临汾市博物馆', event: '' }, { name: '德阳市', value: 50, view: '德阳市博物馆', event: '' },
		{ name: '临汾市', value: 50, view: '常州博物馆', event: '' }, { name: '泸州市', value: 50, view: '泸州市博物馆', event: '' },
		{ name: '镇江市', value: 50, view: '镇江博物馆', event: '' }, { name: '自贡市', value: 50, view: '自贡盐业历史博物馆', event: '' },
		{ name: '扬州市', value: 50, view: '扬州博物馆', event: '' }, { name: '荆门市', value: 50, view: '荆门市博物馆', event: '' },
		{ name: '高邮市', value: 50, view: '高邮市博物馆', event: '' }, { name: '鄂州市', value: 50, view: '鄂州市博物馆', event: '' },
		{ name: '仪征市', value: 50, view: '仪征市博物馆', event: '' }, { name: '荆州市', value: 50, view: '荆州市博物馆', event: '' },
		{ name: '徐州市', value: 49, view: '淮海战役纪念馆', event: '' }, { name: '十堰市', value: 50, view: '十堰市博物馆', event: '' },
		{ name: '淮安市', value: 50, view: '淮安市楚州博物馆', event: '' }, { name: '黄石市', value: 50, view: '黄石市博物馆', event: '' },
		{ name: '东台市', value: 50, view: '东台市博物馆', event: '' }, { name: '黄山市', value: 50, view: '中国徽州文化博物馆', event: '' },
		{ name: '连云港市', value: 50, view: '连云港市博物馆', event: '' }, { name: '亳州市', value: 50, view: '亳州市博物馆', event: '' },
		{ name: '南通市', value: 50, view: '南通博物馆', event: '' }, { name: '阜阳市', value: 50, view: '阜阳市博物馆', event: '' },
		{ name: '泰州市', value: 50, view: '泰州市博物馆', event: '' }, { name: '宿州市', value: 50, view: '宿州市博物馆', event: '' },
		{ name: '泰兴市', value: 50, view: '泰兴市博物馆', event: '' }, { name: '安庆市', value: 50, view: '安庆市博物馆', event: '' },
		{ name: '兴化市', value: 50, view: '兴化市博物馆', event: '' }, { name: '马鞍山市', value: 50, view: '马鞍山市博物馆', event: '' },
		{ name: '蚌埠市', value: 50, view: '蚌埠市博物馆', event: '' }, { name: '淮南市', value: 50, view: '淮南市博物馆', event: '' },
		{ name: '上饶市', value: 49, view: '上饶集中营革命烈士纪念馆', event: '' }, { name: '抚州市', value: 50, view: '抚州市王安石纪念馆', event: '' },
		{ name: '永州市', value: 50, view: '永州市博物馆', event: '' }, { name: '郴州市', value: 50, view: '郴州市博物馆', event: '' },
		{ name: '娄底市', value: 50, view: '娄底市博物馆', event: '' }, { name: '九江市', value: 50, view: '九江市博物馆', event: '' },
		{ name: '吉安市', value: 49, view: '井冈山革命博物馆', event: '' }, { name: '张家界市', value: 50, view: '淮南市博物馆', event: '' },
		{ name: '宁波市', value: 50, view: '宁波博物馆', event: '' }, { name: '温州市', value: 50, view: '温州博物馆', event: '' },
		{ name: '新余市', value: 50, view: '新余市博物馆', event: '' }, { name: '景德镇', value: 50, view: '景德镇民窑博物馆', event: '' },
		{ name: '嘉兴市', value: 50, view: '嘉兴博物馆', event: '' }, { name: '湖州市', value: 50, view: '湖州博物馆', event: '' },
		{ name: '清远市', value: 50, view: '清远市博物馆', event: '' }, { name: '衢州市', value: 50, view: '衢州市博物馆', event: '' },
		{ name: '湛江市', value: 50, view: '湛江市博物馆', event: '' }, { name: '舟山市', value: 50, view: '舟山市博物馆', event: '' },
		{ name: '河源市', value: 50, view: '河源市博物馆', event: '' }, { name: '丽水市', value: 50, view: '丽水摄影博物馆', event: '' },
		{ name: '韶关市', value: 50, view: '韶关市博物馆', event: '' }, { name: '台州市', value: 50, view: '台州市黄岩区博物馆 ', event: '' },
		{ name: '佛山市', value: 50, view: '佛山市博物馆', event: '' }, { name: '福州市', value: 50, view: '福建博物院', event: '' },
		{ name: '珠海市', value: 50, view: '珠海市博物馆', event: '' }, { name: '泉州市', value: 50, view: '福建中国闽台缘博物馆', event: '' },
		{ name: '防城港市', value: 50, view: '防城港市博物馆', event: '' }, { name: '莆田市', value: 50, view: '莆田市博物馆', event: '' },
		{ name: '贵港市', value: 50, view: '贵港市博物馆', event: '' }, { name: '厦门市', value: 50, view: '厦门市博物馆', event: '' },
		{ name: '玉林市', value: 50, view: '玉林市博物馆', event: '' }, { name: '漳州市', value: 50, view: '漳州市博物馆', event: '' },
		{ name: '梧州市', value: 50, view: '梧州市博物馆', event: '' }, { name: '龙岩市', value: 50, view: '龙岩市博物馆', event: '' },
		{ name: '来宾市', value: 50, view: '来宾市博物馆', event: '' }, { name: '三明市', value: 50, view: '三明市博物馆', event: '' },
		{ name: '崇左市', value: 50, view: '崇左市壮族博物馆', event: '' }, { name: '南平市', value: 50, view: '南平市博物馆', event: '' },
		{ name: '贺州市', value: 50, view: '贺州市博物馆', event: '' }, { name: '南宁市', value: 50, view: '广西壮族自治区博物馆', event: '' },
		{ name: '桂林市', value: 50, view: '桂林博物馆', event: '' }, { name: '柳州市', value: 50, view: '柳州市博物馆', event: '' },
		{ name: '江门市', value: 50, view: '江门市新会区博物馆', event: '' }, { name: '揭阳市', value: 50, view: '揭阳市博物馆', event: '' },
		{ name: '汕头市', value: 50, view: '汕头市博物馆', event: '' }, { name: '茂名市', value: 50, view: '茂名市博物馆', event: '' },
		{ name: '广州市', value: 49, view: '广州起义旧址', event: '' }, { name: '肇庆市', value: 50, view: '肇庆市博物馆', event: '' },
		{ name: '承德市', value: 49, view: '董存瑞烈士陵园', event: '' }, { name: '长治市', value: 49, view: '八路军太行纪念馆', event: '' },
		{ name: '南昌市', value: 49, view: '南昌八一起义纪念馆', event: '' }, { name: '长沙市', value: 49, view: '秋收起义纪念馆', event: '' },
		{ name: '锦州市', value: 49, view: '辽沈战役纪念馆', event: '' },
	];

	//输入数据
	var geoCoordMap = {
		'新疆': [86.61, 40.79],
		'西藏': [89.13, 30.66],
		'黑龙江': [128.34, 47.05],
		'吉林': [126.32, 43.38],
		'辽宁': [123.42, 41.29],
		'内蒙古': [112.17, 42.81],
		'北京': [116.40, 40.40],
		'宁夏': [106.27, 36.76],
		'山西': [111.95, 37.65],
		'河北': [115.21, 38.44],
		'天津': [117.04, 39.52],
		'青海': [97.07, 35.62],
		'甘肃': [103.82, 36.05],
		'山东': [118.01, 36.37],
		'陕西': [108.94, 34.46],
		'河南': [113.46, 34.25],
		'安徽': [117.28, 31.86],
		'江苏': [120.26, 32.54],
		'上海': [121.46, 31.28],
		'四川': [103.36, 30.65],
		'湖北': [112.29, 30.98],
		'浙江': [120.15, 29.28],
		'重庆': [107.51, 29.63],
		'湖南': [112.08, 27.79],
		'江西': [115.89, 27.97],
		'贵州': [106.91, 26.67],
		'福建': [118.31, 26.07],
		'云南': [101.71, 24.84],
		'台湾': [121.01, 23.54],
		'广西': [108.67, 23.68],
		'广东': [113.98, 23.05],
		'海南': [110.03, 19.33],
		'澳门': [113.54, 22.19],
		'香港': [114.17, 22.32],
		'长治市': [113.113556, 36.191112]
	};
	// 将坐标与值对应并反映在地图上
	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};//传到value的前两项




	var option = {
		backgroundColor: 'transparent',
		title: {
			text: ' ',
			subtext: ' ',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize: 35
			}
		},
		geo: {
			map: 'china',
			show: false,
			label: {
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#111'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		tooltip: {
			trigger: "item",
			show: false,
			backgroundColor: '#ffffff',
			padding: [0, 0],
			borderRadius: 3,
			lineHeight: 32,
			color: '#ffffff',
		},
		visualMap: {
			show: false,
			x: 'left',
			y: 'bottom',
			splitList: [
				{ start: 50, end: 200 }, { start: 0, end: 49 },
			],
			color: ['#ff8c71', "red"]
		},
		toolbox: {
			right: 40,
			bottom: 20,
			feature: {
				myTool1: {
					show: true,
					title: "返回上一级",
					iconStyle: {
						color: '#ff8c71',
						borderColor: 'black'
					},
					icon:
						"path://M853.333333 245.333333H245.333333l93.866667-93.866666c12.8-12.8 12.8-34.133333 0-46.933334-12.8-12.8-34.133333-12.8-46.933333 0l-145.066667 145.066667c-12.8 12.8-12.8 34.133333 0 46.933333l145.066667 145.066667c6.4 6.4 14.933333 10.666667 23.466666 10.666667s17.066667-4.266667 23.466667-10.666667c12.8-12.8 12.8-34.133333 0-46.933333L256 311.466667h597.333333c6.4 0 10.666667 4.266667 10.666667 10.666666v426.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V320c0-40.533333-34.133333-74.666667-74.666667-74.666667z",
					// 点击返回事件
					onclick: function () {
						option.series[0].mapType = 'china';
						option.series[1] = series1;
						chart.setOption(option);
					}
				}
			}
		},
		series: [
			{
				name: '',
				type: 'map',
				mapType: 'china',
				roam: false,
				selectedMode: 'multiple',
				select: {
					itemStyle: {
						color: null
					},
				},
				label: {
					normal: {
						show: true,
					},
					emphasis: {
						show: true,
						itemStyle: {
							color: 'red'
						},
					}
				},
				data: mydata
			},
			{
				type: 'effectScatter',
				coordinateSystem: 'geo',
				showEffectOn: 'render',
				rippleEffect: {
					period: 5,
					scale: 10,
					brushType: 'fill'
				},
				hoverAnimation: true,
				data: convertData([
					{ name: '北京', value: 49, view: '', event: '' }, { name: '天津', value: 49, view: '', event: '' },
					{ name: '上海', value: 49, view: '', event: '' }, { name: '重庆', value: 49, view: '', event: '' },
					{ name: '河北', value: 49, view: '', event: '' }, { name: '河南', value: 49, view: '', event: '' },
					{ name: '云南', value: 49, view: '', event: '' }, { name: '辽宁', value: 49, view: '', event: '' },
					{ name: '黑龙江', value: 49, view: '', event: '' }, { name: '湖南', value: 49, view: '', event: '' },
					{ name: '安徽', value: 49, view: '', event: '' }, { name: '山东', value: 49, view: '', event: '' },
					{ name: '新疆', value: 49, view: '', event: '' }, { name: '江苏', value: 49, view: '', event: '' },
					{ name: '浙江', value: 49, view: '', event: '' }, { name: '江西', value: 49, view: '', event: '。' },
					{ name: '湖北', value: 49, view: '', event: '' }, { name: '广西', value: 49, view: '', event: '' },
					{ name: '甘肃', value: 49, view: '', event: '' }, { name: '山西', value: 49, view: '', event: '' },
					{ name: '内蒙古', value: 49, view: '', event: '' }, { name: '陕西', value: 49, view: '', event: '' },
					{ name: '吉林', value: 49, view: '', event: '' }, { name: '福建', value: 49, view: '', event: '' },
					{ name: '贵州', value: 49, view: '', event: '' }, { name: '广东', value: 49, view: '', event: '' },
					{ name: '青海', value: 49, view: '', event: '' }, { name: '西藏', value: 49, view: '', event: '' },
					{ name: '四川', value: 49, view: '', event: '' }, { name: '宁夏', value: 49, view: '', event: '' },
					{ name: '海南', value: 49, view: '', event: '' }, { name: '台湾', value: 49, view: '', event: '' },
					{ name: '香港', value: 49, view: '', event: '' }, { name: '澳门', value: 49, view: '', event: '' },
					{ name: '长治市', value: 49, view: '八路军太行纪念馆', event: '' },
				]),
				symbolSize: 2,
				label: {
					normal: {
						show: false
					},
					emphasis: {
						show: false
					}
				},
				itemStyle: {
					emphasis: {
						borderColor: '#fff',
						borderWidth: 1
					}
				}
			}
		],


	};
	var chart = echarts.init(document.getElementById('main'));
	chart.setOption(option);
	var series1 = option.series[1];
	option.series[1] = null;
	chart.on('click', function (params) {//设置点击事件
		var province = params.name;//获取选中省市的省市名称
		option.series[0].mapType = province;
		option.series[0].itemStyle = {
			normal: {
				areaColor: '#ff8c71',
				borderColor: '#111'
			}
		};
		option.tooltip = {
			trigger: "item",
			show: true,
			formatter: function (param) {
				if (param.data) {
					return (param.data.view)
				}
				else {
					return "暂无数据"
				}
			},
			textStyle: {
				fontSize: 20,
			},
			backgroundColor: '#ffffff',
			padding: [0, 0],
			borderRadius: 3,
			lineHeight: 32,
			color: '#ffffff',
		};
		option.visualMap = {
			show: false,
			x: 'left',
			y: 'bottom',
			splitList: [
				{ start: 50, end: 200 }, { start: 0, end: 49 },
			],
			color: ['#ff8c71', 'red']
		};
		switch (province) {
			case '阳泉市':
				window.open("http://www.lydjw.gov.cn/ycjy.php?newsid=8849", "_blank");
				break;
			case '长沙市':
				window.open("http://www.qsqyhsjng.com/index.html", "_blank");
				break;
			case '赣州市':
				window.open("http://www.rjjng.com.cn/", "_blank");
				break;
			case '石家庄市':
				window.open("http://www.xbpjng.cn/Index.aspx", "_blank");
				break;
			case '承德市':
				window.open("http://www.dongcunrui.com.cn/", "_blank");
				break;
			case '长治市':
				window.open("http://www.balujun.cn/", "_blank");
				break;
			case '江门市':
				window.open("http://www.xhbwg.net", "_blank");
				break;
			case '北京':
				window.open('http://www.bytravel.cn/landscape/2/gugong.html', "_blank");
				break;
			case '上海':
				window.open('http://www.zgyd1921.com/zgyd/node3/index.html', "_blank");
				break;
			case '东莞市':
				window.open('http://www.ypzz.cn/f/index', "_blank");
				break;
			case '长春市':
				window.open('http://www.bytravel.cn/landscape/3/weimanhuanggong.html', "_blank");
				break;
			case '宜宾市':
				window.open('http://www.ybsbwy.com/', "_blank");
				break;
			case '彭州市':
				window.open('http://www.pzsbwg.com/', "_blank");
				break;
			case '许昌市':
				window.open('http://www.bytravel.cn/landscape/11/yuzhoujunguanyaozhibowuguan.html', "_blank");
				break;
			case '成都市':
				window.open('https://www.cdmuseum.com/', "_blank");
				break;
			case '宜昌市':
				window.open('http://www.ycbwg.com/', "_blank");
				break;
			case '广州市':
				window.open('http://www.gz.gov.cn/zlgz/gzly/wzgz/agjyjd/content/mpost_2855139.html', "_blank");
				break;
			case '黄冈市':
				window.open('http://www.hgbwg.org.cn/', "_blank");
				break;
			case '荆州市':
				window.open('http://www.jzmsm.org/', "_blank");
				break;
			case '南京市':
				window.open('http://www.19371213.net/', "_blank");
				break;
			case '中山市':
				window.open('http://www.sunyat-sen.org/', "_blank");
				break;
			case '深圳市':
				window.open('https://www.shenzhenmuseum.com/', "_blank");
				break;
			case '阳江市':
				window.open('https://www.msrmuseum.com/', "_blank");
				break;
			case '梅州市':
				window.open('http://www.zgkjbwg.com/', "_blank");
				break;
			case '沈阳市':
				window.open('http://www.918museum.org.cn/', "_blank");
				break;
			case '贵阳市':
				window.open('http://www.gzmuseum.com/', "_blank");
				break;
			case '济南市':
				window.open('http://www.sdmuseum.com/', "_blank");
				break;
			case '天津市':
				window.open('http://lishbowugian.meishujia.cn', "_blank");
				break;
			case '太原市':
				window.open('http://www.shanximuseum.com/sx/index/index.html', "_blank");
				break;
			case '哈尔滨市':
				window.open('http://www.hljmuseum.com/', "_blank");
				break;
			case '杭州市':
				window.open('http://www.zhejiangmuseum.com/', "_blank");
				break;
			case '无锡市':
				window.open('http://www.wxmuseum.com/', "_blank");
				break;
			case '西安市':
				window.open('http://www.sxpam.org/', "_blank");
				break;
			case '开封市':
				window.open('http://www.kfsbwg.com/', "_blank");
				break;
			case '合肥市':
				window.open('https://www.ahm.cn/', "_blank");
				break;
			case '昆明市':
				window.open('http://www.ynmuseum.org/index.html', "_blank");
				break;
			case '南昌市':
				window.open('http://www.81-china.com/', "_blank");
				break;
			case '郑州市':
				window.open('http://www.hnzzmuseum.com/', "_blank");
				break;
			case '武汉市':
				window.open('http://wlt.hubei.gov.cn/1911museum/', "_blank");
				break;
			case '洛阳市':
				window.open('http://www.lymuseum.com/', "_blank");
				break;
			case '西宁市':
				window.open('https://www.qhmuseum.cn/', "_blank");
				break;
			case '海西州德令哈市':
				window.open('https://www.hxzmzbwg.cn', "_blank");
				break;
			case '兰州市':
				window.open('http://www.gansumuseum.com', "_blank");
				break;
			case '拉萨市':
				window.open('https://www.tibetmuseum.com.cn', "_blank");
				break;
			case '天水市':
				window.open('http://www.tssbwg.com.cn', "_blank");
				break;
			case '白银市':
				window.open('http://www.bysbwg.com', "_blank");
				break;
			case '张掖市':
				window.open('http://www.zydfs1098.cn', "_blank");
				break;
			case '酒泉市':
				window.open('http://www.jqsbwg.com', "_blank");
				break;
			case '敦煌市':
				window.open('http://www.dhbwg.org.cn', "_blank");
				break;
			case '玉门市':
				window.open('http://www.ymsbwg.com', "_blank");
				break;
			case '嘉峪关市':
				window.open('http://www.jygccbwg.cn', "_blank");
				break;
			case '平凉市':
				window.open('http://www.plsbwg.com', "_blank");
				break;
			case '庆阳市':
				window.open('http://www.qysbwg.cn', "_blank");
				break;
			case '临夏市':
				window.open('http://www.lxzbwg.com', "_blank");
				break;
			case '包头市':
				window.open('http://www.nmgbtbwg.cn', "_blank");
				break;
			case '乌海市':
				window.open('http://www.whsbwg.org.cn', "_blank");
				break;
			case '赤峰市':
				window.open('http://www.cfbwg.org.cn', "_blank");
				break;
			case '通辽市':
				window.open('http://www.keerqinmuseum.com', "_blank");
				break;
			case '鄂尔多斯市':
				window.open('http://www.ordosbwg.org.cn', "_blank");
				break;
			case '哈尔滨市':
				window.open('http://www.hljmuseum.com', "_blank");
				break;
			case '伊春市':
				window.open('http://www.ycsbwg.org.cn', "_blank");
				break;
			case '绥化市':
				window.open('http://www.suihuamuseum.org.cn', "_blank");
				break;
			case '吉林市':
				window.open('http://www.jlswmbwg.com', "_blank");
				break;
			case '白城市':
				window.open('http://www.cfbwg.org.cn', "_blank");
				break;
			case '赤峰市':
				window.open('http://www.bcsbwg.net', "_blank");
				break;
			case '大安市':
				window.open('http://www.dasbwg.cn', "_blank");
				break;
			case '辽源市':
				window.open('http://www.cfbwg.org.cn', "_blank");
				break;
			case '赤峰市':
				window.open('http://lywly.chaoxing.com', "_blank");
				break;
			case '四平市':
				window.open('http://www.spzyjng.cn', "_blank");
				break;
			case '双辽市':
				window.open('http://www.ytmzbwg.org.cn', "_blank");
				break;
			case '通化市':
				window.open('http://gzhjng.cn', "_blank");
				break;
			case '大连市':
				window.open('http://www.lvshunmuseum.org', "_blank");
				break;
			case '鞍山市':
				window.open('http://www.asbwg.com', "_blank");
				break;
			case '丹东市':
				window.open('http://www.kmycjng.com', "_blank");
				break;
			case '抚顺市':
				window.open('http://www.leifeng.org.cn', "_blank");
				break;
			case '本溪市':
				window.open('http://www.dbklssclg.cn', "_blank");
				break;
			case '丹东市':
				window.open('http://www.kmycjng.com', "_blank");
				break;
			case '锦州市':
				window.open('http://www.jzlszy.com/', "_blank");
				break;
			case '凌海市':
				window.open('http://xjjng.cn', "_blank");
				break;
			case '营口市':
				window.open('http://www.ykbwg.com', "_blank");
				break;
			case '阜新市':
				window.open('http://www.fxwrkjng.cn', "_blank");
				break;
			case '辽阳市':
				window.open('http://www.lnlymuseum.com', "_blank");
				break;
			case '定州市':
				window.open('http://www.dzhmuseum.com', "_blank");
				break;
			case '秦皇岛市':
				window.open('http://www.scb-museum.com', "_blank");
				break;
			case '廊坊市':
				window.open('http://www.lfmuseum.org', "_blank");
				break;
			case '沧州市':
				window.open('http://www.czbwg.com', "_blank");
				break;
			case '唐山市':
				window.open('http://www.tskzjng.com/', "_blank");
				break;
			case '张家口市':
				window.open('http://www.zjkmuseum.com', "_blank");
				break;
			case '邯郸市':
				window.open('http://www.hdmuseum.org', "_blank");
				break;
			case '晋中市':
				window.open('http://www.mtbljzbjng.cn', "_blank");
				break;
			case '临汾市':
				window.open('http://www.linfenmuseum.com', "_blank");
				break;
			case '青岛市':
				window.open('http://www.qingdaomuseum.com', "_blank");
				break;
			case '胶州市':
				window.open('http://www.jzmuseum.com', "_blank");
				break;
			case '平度市':
				window.open('http://www.pdsbwg.net', "_blank");
				break;
			case '淄博市':
				window.open('http://www.zbsbwg.cn', "_blank");
				break;
			case '枣庄市':
				window.open('http://www.zzsbwg.com', "_blank");
				break;
			case '滕州市':
				window.open('http://www.tengzhoumuseum.com', "_blank");
				break;
			case '东营市':
				window.open('http://www.dymuseum.cn', "_blank");
				break;
			case '烟台市':
				window.open('http://www.ytmuseum.com', "_blank");
				break;
			case '龙口市':
				window.open('http://www.dingshiguzhai.com', "_blank");
				break;
			case '莱州市':
				window.open('http://www.lzsbwg.com', "_blank");
				break;
			case '潍坊市':
				window.open('http://www.wfsbwg.com', "_blank");
				break;
			case '诸城市':
				window.open('http://www.zcsbwg.com', "_blank");
				break;
			case '青州市':
				window.open('http://www.qingzhoumuseum.cn', "_blank");
				break;
			case '昌邑市':
				window.open('http://www.changyibwg.cn', "_blank");
				break;
			case '高密市':
				window.open('http://gmsbwg.com', "_blank");
				break;
			case '济宁市':
				window.open('http://www.jiningmuseum.com', "_blank");
				break;
			case '邹城市':
				window.open('http://www.zouchengmuseum.cn', "_blank");
				break;
			case '泰安市':
				window.open('http://www.daimiao.cn', "_blank");
				break;
			case '威海市':
				window.open('http://www.jiawuzhanzheng.cn', "_blank");
				break;
			case '荣成市':
				window.open('http://www.rcmuseum.cn', "_blank");
				break;
			case '临沂市':
				window.open('http://museum.linyi.cn', "_blank");
				break;
			case '菏泽市':
				window.open('http://www.cwxbwg.com', "_blank");
				break;
			case '临清市':
				window.open('http://www.lqsbwg.com', "_blank");
				break;
			case '安阳市':
				window.open('http://2019.aybwg.org', "_blank");
				break;
			case '焦作市':
				window.open('http://www.jzsbwg.cn', "_blank");
				break;
			case '鹤壁市':
				window.open('http://www.hbsbwg.com', "_blank");
				break;
			case '新乡市':
				window.open('http://www.xxbwg.com', "_blank");
				break;
			case '濮阳市':
				window.open('http://www.pybwg.com', "_blank");
				break;
			case '许昌市':
				window.open('http://www.xcmuseum.com', "_blank");
				break;
			case '三门峡市':
				window.open('http://www.smxmuseum.com', "_blank");
				break;
			case '信阳市':
				window.open('http://www.eywsqsfbwg.com', "_blank");
				break;
			case '周口市':
				window.open('http://www.pingliangtai.cn', "_blank");
				break;
			case '咸阳市':
				window.open('http://www.xybwg.cn', "_blank");
				break;
			case '宝鸡市':
				window.open('http://www.bjqtm.com', "_blank");
				break;
			case '延安市':
				window.open('http://www.yagmjng.com', "_blank");
				break;
			case '榆林市':
				window.open('http://www.ylmsbwg.com', "_blank");
				break;
			case '安康市':
				window.open('http://www.akbwg.cn', "_blank");
				break;
			case '苏州市':
				window.open('http://www.szmuseum.com', "_blank");
				break;
			case '太仓市':
				window.open('http://www.tcbwg.cn', "_blank");
				break;
			case '常熟市':
				window.open('http://www.csmuseum.cn', "_blank");
				break;
			case '张家港市':
				window.open('http://www.zjgmuseum.com', "_blank");
				break;
			case '无锡市':
				window.open('http://www.wxmuseum.com', "_blank");
				break;
			case '常州市':
				window.open('http://www.czmuseum.com', "_blank");
				break;
			case '镇江市':
				window.open('http://www.zj-museum.com', "_blank");
				break;
			case '扬州市':
				window.open('http://www.yzmuseum.com', "_blank");
				break;
			case '高邮市':
				window.open('http://www.gymuseum.cn', "_blank");
				break;
			case '仪征市':
				window.open('http://www.yzmuseum.cn', "_blank");
				break;
			case '徐州市':
				window.open('http://hhzy.xz.gov.cn/hhzy/', "_blank");
				break;
			case '淮安市':
				window.open('http://www.hamuseum.com', "_blank");
				break;
			case '东台市':
				window.open('http://www.dtmuseum.cn', "_blank");
				break;
			case '连云港市':
				window.open('http://www.lygmuseum.cn', "_blank");
				break;
			case '南通市':
				window.open('http://www.ntmuseum.com', "_blank");
				break;
			case '泰州市':
				window.open('http://www.tzmuseum.cn', "_blank");
				break;
			case '泰兴市':
				window.open('http://www.txsbwg.cn', "_blank");
				break;
			case '兴化市':
				window.open('http://www.xhbwg.org', "_blank");
				break;
			case '合肥市':
				window.open('http://www.ahm.cn', "_blank");
				break;
			case '蚌埠市':
				window.open('http://xjjng.cn', "_blank");
				break;
			case '淮南市':
				window.open('http://www.hnsbwg.cn', "_blank");
				break;
			case '马鞍山市':
				window.open('http://www.mas-museum.com', "_blank");
				break;
			case '安庆市':
				window.open('http://www.aqbwg.cn', "_blank");
				break;
			case '宿州市':
				window.open('http://www.sz-museum.com', "_blank");
				break;
			case '阜阳市':
				window.open('http://www.fymuseum.com', "_blank");
				break;
			case '亳州市':
				window.open('http://www.bzbwg.com', "_blank");
				break;
			case '黄山市':
				window.open('http://www.hzwhbwg.com', "_blank");
				break;
			case '黄石市':
				window.open('http://www.hssbwg.com', "_blank");
				break;
			case '十堰市':
				window.open('http://www.10ybwg.org.cn', "_blank");
				break;
			case '荆州市':
				window.open('http://www.jzmsm.org', "_blank");
				break;
			case '随州市':
				window.open('http://www.szbwg.net', "_blank");
				break;
			case '自贡市':
				window.open('http://www.zgshm.cn', "_blank");
				break;
			case '泸州市':
				window.open('http://luzhoumuseum.com', "_blank");
				break;
			case '德阳市':
				window.open('http://deyangmuseum.com', "_blank");
				break;
			case '绵阳市':
				window.open('http://www.mymuseum.cn', "_blank");
				break;
			case '乐山市':
				window.open('http://www.emsbwg.com', "_blank");
				break;
			case '宜宾市':
				window.open('http://www.ybsbwy.com', "_blank");
				break;
			case '眉山市':
				window.open('http://www.sscbwg.com', "_blank");
				break;
			case '海口市':
				window.open('http://www.hainanmuseum.org', "_blank");
				break;
			case '三亚市':
				window.open('http://sanyamuseum.com', "_blank");
				break;
			case '玉溪市':
				window.open('http://www.yuxibwg.com', "_blank");
				break;
			case '大理市':
				window.open('http://www.dlzbwg.cn', "_blank");
				break;
			case '凯里市':
				window.open('http://qdnzmb.com', "_blank");
				break;
			case '毕节市':
				window.open('http://www.bjmuseum.net', "_blank");
				break;
			case '株洲市':
				window.open('http://www.zzsmuseum.com', "_blank");
				break;
			case '岳阳市':
				window.open('http://www.yysbwg.com', "_blank");
				break;
			case '衡阳市':
				window.open('http://www.hengyangmuseum.com', "_blank");
				break;
			case '益阳市':
				window.open('http://www.yiyangmuseum.com', "_blank");
				break;
			case '永州市':
				window.open('http://www.yzsbwg.com', "_blank");
				break;
			case '郴州市':
				window.open('http://www.hnczsbwg.com', "_blank");
				break;
			case '娄底市':
				window.open('http://www.ldmuseum.com', "_blank");
				break;
			case '张家界市':
				window.open('http://www.zjjsmuseum.com', "_blank");
				break;
			case '九江市':
				window.open('http://www.jjmuseum.cn', "_blank");
				break;
			case '上饶市':
				window.open('http://www.srjzy.cn', "_blank");
				break;
			case '吉安市':
				window.open('http://h.jgsu.edu.cn/', "_blank");
				break;
			case '景德镇':
				window.open('http://www.jdzminyao.cn', "_blank");
				break;
			case '新余市':
				window.open('http://www.xysmuseum.com', "_blank");
				break;
			case '宁波市':
				window.open('http://www.nbmuseum.cn', "_blank");
				break;
			case '温州市':
				window.open('http://www.wzmuseum.cn', "_blank");
				break;
			case '嘉兴市':
				window.open('http://www.jiaxingmuseum.com', "_blank");
				break;
			case '湖州市':
				window.open('http://www.huzhoumuseum.com', "_blank");
				break;
			case '衢州市':
				window.open('http://www.quzhoubowuguan.com', "_blank");
				break;
			case '舟山市':
				window.open('http://www.zsbwg.com', "_blank");
				break;
			case '丽水市':
				window.open('http://www.clspm.com', "_blank");
				break;
			case '台州市':
				window.open('http://www.hybwg.com.cn', "_blank");
				break;
			case '福州市':
				window.open('http://www.fjbwy.com', "_blank");
				break;
			case '泉州市':
				window.open('http://www.mtybwg.org.cn', "_blank");
				break;
			case '莆田市':
				window.open('http://www.putianbwg.cn', "_blank");
				break;
			case '厦门市':
				window.open('http://www.xmmuseum.com', "_blank");
				break;
			case '漳州市':
				window.open('http://www.fjzzmuseum.com', "_blank");
				break;
			case '龙岩市':
				window.open('http://www.lybwg.cn', "_blank");
				break;
			case '三明市':
				window.open('http://www.smsbwg.cn', "_blank");
				break;
			case '南平市':
				window.open('http://www.npbwg.org.cn', "_blank");
				break;
			case '南宁市':
				window.open('http://www.gxmuseum.cn', "_blank");
				break;
			case '柳州市':
				window.open('http://www.lzbwg.org.cn', "_blank");
				break;
			case '桂林市':
				window.open('http://www.guilinmuseum.org', "_blank");
				break;
			case '贺州市':
				window.open('http://www.gxhzsbwg.com', "_blank");
				break;
			case '崇左市':
				window.open('http://bwg.gxcznews.com', "_blank");
				break;
			case '来宾市':
				window.open('http://www.gxlbbwg.com', "_blank");
				break;
			case '梧州市':
				window.open('http://www.wzsmuseum.cn', "_blank");
				break;
			case '玉林市':
				window.open('http://www.ylmuseum.org', "_blank");
				break;
			case '贵港市':
				window.open('http://www.ggbowuguan.com', "_blank");
				break;
			case '防城港市':
				window.open('http://www.fcgmuseum.cn', "_blank");
				break;
			case '珠海市':
				window.open('http://www.zhmuseum.org.cn', "_blank");
				break;
			case '汕头市':
				window.open('http://www.shantoumuseum.com', "_blank");
				break;
			case '佛山市':
				window.open('http://www.foshanmuseum.com', "_blank");
				break;
			case '韶关市':
				window.open('http://www.shaoguanmuseum.com', "_blank");
				break;
			case '湛江市':
				window.open('http://www.zjsbwg.com', "_blank");
				break;
			case '茂名市':
				window.open('http://mmsbwg.com', "_blank");
				break;
			case '肇庆市':
				window.open('http://www.zqsbwg.com', "_blank");
				break;
			case '清远市':
				window.open('http://www.qybwg.com.cn', "_blank");
				break;
			case '揭阳市':
				window.open('http://www.jysbwg.com', "_blank");
				break;
			case '香港':
				window.open('http://hk.history.museum', "_blank");
				break;
			case '澳门':
				window.open('http://www.mam.gov.mo', "_blank");
				break;
			case '温州市':
				window.open('http://www.wzmuseum.cn', "_blank");
				break;
		};
		if (params.data != null && params.data.value != 199 && params.data.value != 50 && params.data.value != 49) {
			option.series[1] = null;
			chart.clear();
			chart.setOption(option);
		};

	});
