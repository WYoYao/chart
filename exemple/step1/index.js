var data = {
    title: {
        text: '不同城市的月平均气温',
    },
    subtitle: {
        text: '数据来源: WorldClimate.com',
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '温度 (°C)'
        },
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
};


/**
 * Highcharts 在 4.2.0 开始已经不依赖 jQuery 了，直接用其构造函数既可创建图表
 **/
//var chart = new Highcharts.Chart('container', data);

// var chart = new Highcharts.Chart('container1', {
//     chart: {
//         type: 'line'
//     },
//     title: {
//         text: '不同城市的月平均气温',
//     },
//     subtitle: {
//         text: '数据来源: WorldClimate.com',
//     },
//     xAxis: {
//         categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
//     },
//     yAxis: {
//         title: {
//             text: '气温 (°C)'
//         }
//     },
//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle',
//         borderWidth: 0
//     },
//     plotOptions: {
//         line: {
//             dataLabels: {
//                 enabled: true // 开启数据标签
//             },
//             enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
//         }
//     },
//     series: [{
//         name: '东京',
//         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//     }, {
//         name: '纽约',
//         data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
//     }, {
//         name: '柏林',
//         data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
//     }, {
//         name: '伦敦',
//         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//     }]
// });


/**
 * {
 *       name: {    // 用户输入的属性名名称
 *           type: [],// 图表的类型       如果是数组的情况代表里面满足的类型，如果为true 代表所有的类型
 *           value: function(argu) {    // 根据用户输入的属性的值计算出对应的hchart的参数
 *               return
 *           }
 *       }
 *   }
 */


var Config = {
    // name: {
    //     type: {},
    //     value: [function(argu) {
    //         return 'hello World';
    //     }]
    // }
}


/**
 * 
 * 
 * @param {图表渲染容器的 HTML 元素的 id 或对象引用} elm 
 * @param {渲染图标中需要的配置参数} setting 
 * @param {图标的类型} type 
 * @returns 
 */
var Pchart = function(elm, setting, type) {

    this.config = {};

    // 初始化
    this.init();

    var options = {};

    for (var key in setting) {
        if (object.hasOwnProperty(key)) {

            var value = setting[key];
            // 预防配置文件中没有                     预防的这种的表格与参数不对应
            if (this.config[key] === undefined || !this.config[key].type.hasOwnProperty(type)) {

                console.error('初始化hchart参数中的，属性' + key + '未生效');
            } else {


                var argu, index, result;
                argu = this.config[key];
                index = argu.type[type];
                result = argu.value[index](value);

                // 循环替换所对应的配置参数
                options = that.copy({}, options, result)

            }
        }
    }

    console.log(options);

    return;


    // 设置图标的类型和渲染DOM
    // var options = Object.assign({}, {
    //     chart: {
    //         type: type,
    //         renderTo: elm
    //     }
    // }, setting);

    // 返回对应的图标内容
    return new Highcharts.Chart({
        options
    })
}


Pchart.prototype.copy = Copy();

// 方法初始化
Pchart.prototype.init = function() {
    var that = this;

    // 设置title
    that.setConfig('title', function(title) {
        return {
            title: {
                text: title
            }
        }
    })

}

// 向控件中的写入的对应的配置文件转换工具
Pchart.prototype.setConfig = function(key, func, type) {

    var that = this,
        obj;
    type = !type || true; //默认全部都有

    that.config_push(key, func, type)
}

/**
 * @param {String} key 
 * @param {Function} func 
 * @param {String or Array} type 
 */
Pchart.prototype.config_push = function(key, func, type) {
    // 新建类型
    this.config.key = this.config.key || {};
    this.config.key.type = this.config.key.type || {};
    this.config.key.value = this.config.key.value || [];

    // 将所有对应的类型转换成为的key
    type = Object.prototype.toString.call(type).slice(8, -1) === 'Array' || [type];

    var index = this.config.key.value,
        that = this;
    this.config.key.value.push(func);

    //  将对应的图标更新为对应的参数返回方法
    type.forEach(function(key) {
        that.config.key.type[key] = index;
    })

    return this;
}


/**
 * 通过深度Copy将多个Object类型合并到一个Object 中从前向后执行 
 */
function Copy() {

    if (!(this instanceof Copy)) {
        return new Copy;
    }

    // 判断数据类型
    function _valiteType(value) {
        return {
            '[object Object]': 'Object',
            '[object Array]': 'Array',
            '[object Base]': 'Base',
        }[Object.prototype.toString.call(value)]
    }
    // 执行复制动作
    function _copy(content, item) {
        var type = _valiteType(item);
        if (type == 'Object' || type == 'Array') {
            if (_valiteType(content) != type) {
                // 如果类型不是对应的需要以后面需要copy的类型为准
                if (type == 'Array') {
                    content = [];
                } else {
                    content = {};
                }
            }
            return _exec(content, item, type);
        } else {
            return item;
        }
    }

    // 复制返回的对应的引用类型
    function _exec(content, obj) {
        var key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                content[key] = _copy(content[key], obj[key]);
            }
        }
        return content;
    }

    this.copy = function() {
        var argu = Array.prototype.slice.call(arguments);

        argu.forEach(function(item) {
                if (Object.prototype.toString.call(item) != '[object Object]') throw new Error('Arguments Error');
            })
            // 循环执行所有的参数
        return argu.reduce(function(content, item) {
            return _copy(content, item);
        }, {})
    }

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


var leo = new Pchart(1, {
    title: "hello World"
}, 2)