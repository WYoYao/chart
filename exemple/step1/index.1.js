;
(function(window) {


    /*
     * elm 用于挂载表格的element
     * set 设置属性
     */
    function Pchart(elm, set) {
        // this.elm = document.querySelector(elm);

        var that = this,
            option,
            chart;



        // 循环创建绑定实例时需用的属性
        Object
            .keys(option)
            .map(function(key, index, content) {
                content['_' + key] = content[key];
                return key;
            })


        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                option['_' + key] = option[key];
            }
        }

        Object.defineProperty(that, "elm", {

            get: function() {

                return that._elm;
            },

            set: function(newElm) {

                // 验证是否是有效的Elment
                if (!that._isElm(newElm)) throw new TypeError('Elm Error');

                that._elm = newElm;
            }
        });



        this.elm = document.querySelector(elm);


        // 创建对应的表实例的
        chart = new Highcharts.Chart('container', {
            // 标题属性
            title: {
                text: '不同城市的月平均气温',
            },
            // 子标题属性
              subtitle: {
                text: '数据来源: WorldClimate.com',
            },
              xAxis: {
                categories: ['一2月', '二3月', '三4月', '四5月', '五6月', '六7月', '七8月', '八9月', '九0月', '十1月', '十一2月', '十二3月']
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
        });

    }






    /*
     * 验证是否是有效的Elm
     */
    Pchart.prototype._isElm = function(Elm) {

        console.log('isElm');

        if (!Elm) return false;

        if (Elm.nodeType !== 1) return false;

        return true;
    }

    /**
     * Object.assign Polyfill
     */
    if (typeof Object.assign != 'function') {

        Object.defineProperty(Object, "assign", {
            value: function assign(target, varArgs) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource != null) { // Skip over if undefined or null
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            },
            writable: true,
            configurable: true
        });
    }


    window.Pchart = Pchart;

})(window);

var aa = new Pchart('body');













































































// debugger;
var chart = new Highcharts.Chart('container', {
    // 标题属性
    title: {
        text: '不同城市的月平均气温',
    },
    // 子标题属性
      subtitle: {
        text: '数据来源: WorldClimate.com',
    },
      xAxis: {
        categories: ['一2月', '二3月', '三4月', '四5月', '五6月', '六7月', '七8月', '八9月', '九0月', '十1月', '十一2月', '十二3月']
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
});

setTimeout(function() {
    chart.setTitle({
        text: '马上就要变天了',
    }, true)
}, 10000)