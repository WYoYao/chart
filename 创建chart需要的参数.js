// 基础折现
var baseLine = {
    title: {
        text: '不同城市的月平均气温',
        x: -20
    },
    subtitle: {
        text: '数据来源: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '温度 (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '纽约',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: '柏林',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: '伦敦',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
}

// 显示点的折现
var obj = {
    chart: {
        type: 'line'
    },
    title: {
        text: '月平均气温'
    },
    subtitle: {
        text: '数据来源: WorldClimate.com'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '气温 (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '伦敦',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
};

// 坐标轴反转曲线图
var base = {
    chart: {
        type: 'line'
    },
    title: {
        text: '月平均气温'
    },
    subtitle: {
        text: '数据来源: WorldClimate.com'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '气温 (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '伦敦',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
};

// 带标识的曲线图
var base = {
    chart: {
        type: 'spline'
    },
    title: {
        text: '两地月平均温度'
    },
    subtitle: {
        text: '数据来源: WorldClimate.com'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月',
            '七月', '八月', '九月', '十月', '十一月', '十二月'
        ]
    },
    yAxis: {
        title: {
            text: '温度'
        },
        labels: {
            formatter: "function"
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '东京',
        marker: {
            symbol: 'square'
        },
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
            y: 26.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/demo/gfx/sun.png)'
            }
        }, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '伦敦',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 3.9,
            marker: {
                symbol: 'url(https://www.highcharts.com/demo/gfx/snow.png)'
            }
        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
};

// 时间不连续的曲线图
var base = {
    chart: {
        type: 'spline'
    },
    title: {
        text: '某地积雪厚度监测'
    },
    subtitle: {
        text: '非规律性时间内的变化'
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: null
        }
    },
    yAxis: {
        title: {
            text: '积雪 厚度 (m)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },
    series: [{
        name: '2007-2008 冬',
        data: [
            ["Date.UTC(1970, 9, 27), 0"],
            ["Date.UTC(1970, 10, 10), 0.6"],
            ["Date.UTC(1970, 10, 18), 0.7"],
            ["Date.UTC(1970, 11, 2), 0.8"],
            ["Date.UTC(1970, 11, 9), 0.6"],
            ["Date.UTC(1970, 11, 16), 0.6"],
            ["Date.UTC(1970, 11, 28), 0.67"],
            ["Date.UTC(1971, 0, 1), 0.81"],
            ["Date.UTC(1971, 0, 8), 0.78"],
            ["Date.UTC(1971, 0, 12), 0.98"],
            ["Date.UTC(1971, 0, 27), 1.84"],
            ["Date.UTC(1971, 1, 10), 1.80"],
            ["Date.UTC(1971, 1, 18), 1.80"],
            ["Date.UTC(1971, 1, 24), 1.92"],
            ["Date.UTC(1971, 2, 4), 2.49"],
            ["Date.UTC(1971, 2, 11), 2.79"],
            ["Date.UTC(1971, 2, 15), 2.73"],
            ["Date.UTC(1971, 2, 25), 2.61"],
            ["Date.UTC(1971, 3, 2), 2.76"],
            ["Date.UTC(1971, 3, 6), 2.82"],
            ["Date.UTC(1971, 3, 13), 2.8"],
            ["Date.UTC(1971, 4, 3), 2.1"],
            ["Date.UTC(1971, 4, 26), 1.1"],
            ["Date.UTC(1971, 5, 9), 0.25"],
            ["Date.UTC(1971, 5, 12), 0"]
        ]
    }]
};

// 对数折线
var base = {
    title: {
        text: '对数折线图'
    },
    xAxis: {
        tickInterval: 1
    },
    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
    },
    series: [{
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        pointStart: 1
    }]
};