{
    "colors": ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
    "symbols": ["circle", "diamond", "square", "triangle", "triangle-down"],
    "lang": {
        "loading": "Loading...",
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "weekdays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "decimalPoint": ".",
        "numericSymbols": ["k", "M", "G", "T", "P", "E"],
        "resetZoom": "Reset zoom",
        "resetZoomTitle": "Reset zoom level 1:1",
        "thousandsSep": " ",
        "printChart": "Print chart",
        "downloadPNG": "Download PNG image",
        "downloadJPEG": "Download JPEG image",
        "downloadPDF": "Download PDF document",
        "downloadSVG": "Download SVG vector image",
        "contextButtonTitle": "Chart context menu"
    },
    "global": {
        "useUTC": true,
        "VMLRadialGradientURL": "http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png"
    },
    "chart": {
        "borderRadius": 0,
        "defaultSeriesType": "line",
        "ignoreHiddenSeries": true,
        "spacing": [10, 10, 15, 10],
        "resetZoomButton": {
            "theme": {
                "zIndex": 20
            },
            "position": {
                "align": "right",
                "x": -10,
                "y": 10
            }
        },
        "width": null,
        "height": null,
        "borderColor": "#335cad",
        "backgroundColor": {
            "linearGradient": {
                "x1": 0,
                "y1": 0,
                "x2": 1,
                "y2": 1
            },
            "stops": [
                [0, "#2a2a2b"],
                [1, "#3e3e40"]
            ]
        },
        "plotBorderColor": "#606063",
        "style": {
            "fontFamily": "'Unica One', sans-serif"
        }
    },
    "title": {
        "text": "不同城市的月平均气温",
        "align": "center",
        "margin": 15,
        "widthAdjust": -44,
        "style": {
            "color": "#E0E0E3",
            "textTransform": "uppercase",
            "fontSize": "20px"
        },
        "x": -20
    },
    "subtitle": {
        "text": "数据来源: WorldClimate.com",
        "align": "center",
        "widthAdjust": -44,
        "style": {
            "color": "#E0E0E3",
            "textTransform": "uppercase"
        },
        "x": -20
    },
    "plotOptions": {
        "line": {
            "lineWidth": 2,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": {
                "lineWidth": 0,
                "lineColor": "#ffffff",
                "radius": 4,
                "states": {
                    "hover": {
                        "animation": {
                            "duration": 50
                        },
                        "enabled": true,
                        "radiusPlus": 2,
                        "lineWidthPlus": 1
                    },
                    "select": {
                        "fillColor": "#cccccc",
                        "lineColor": "#000000",
                        "lineWidth": 2
                    }
                }
            },
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": "center",
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": "bottom",
                "x": 0,
                "y": 0,
                "padding": 5
            },
            "cropThreshold": 300,
            "pointRange": 0,
            "softThreshold": true,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": {
                        "size": 10,
                        "opacity": 0.25
                    }
                },
                "select": {
                    "marker": {}
                }
            },
            "stickyTracking": true,
            "turboThreshold": 1000,
            "findNearestPointBy": "x"
        },
        "area": {
            "lineWidth": 2,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": {
                "lineWidth": 0,
                "lineColor": "#ffffff",
                "radius": 4,
                "states": {
                    "hover": {
                        "animation": {
                            "duration": 50
                        },
                        "enabled": true,
                        "radiusPlus": 2,
                        "lineWidthPlus": 1
                    },
                    "select": {
                        "fillColor": "#cccccc",
                        "lineColor": "#000000",
                        "lineWidth": 2
                    }
                }
            },
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": "center",
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": "bottom",
                "x": 0,
                "y": 0,
                "padding": 5
            },
            "cropThreshold": 300,
            "pointRange": 0,
            "softThreshold": false,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": {
                        "size": 10,
                        "opacity": 0.25
                    }
                },
                "select": {
                    "marker": {}
                }
            },
            "stickyTracking": true,
            "turboThreshold": 1000,
            "findNearestPointBy": "x",
            "threshold": 0
        },
        "spline": {
            "lineWidth": 2,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": {
                "lineWidth": 0,
                "lineColor": "#ffffff",
                "radius": 4,
                "states": {
                    "hover": {
                        "animation": {
                            "duration": 50
                        },
                        "enabled": true,
                        "radiusPlus": 2,
                        "lineWidthPlus": 1
                    },
                    "select": {
                        "fillColor": "#cccccc",
                        "lineColor": "#000000",
                        "lineWidth": 2
                    }
                }
            },
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": "center",
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": "bottom",
                "x": 0,
                "y": 0,
                "padding": 5
            },
            "cropThreshold": 300,
            "pointRange": 0,
            "softThreshold": true,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": {
                        "size": 10,
                        "opacity": 0.25
                    }
                },
                "select": {
                    "marker": {}
                }
            },
            "stickyTracking": true,
            "turboThreshold": 1000,
            "findNearestPointBy": "x"
        },
        "areaspline": {
            "lineWidth": 2,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": {
                "lineWidth": 0,
                "lineColor": "#ffffff",
                "radius": 4,
                "states": {
                    "hover": {
                        "animation": {
                            "duration": 50
                        },
                        "enabled": true,
                        "radiusPlus": 2,
                        "lineWidthPlus": 1
                    },
                    "select": {
                        "fillColor": "#cccccc",
                        "lineColor": "#000000",
                        "lineWidth": 2
                    }
                }
            },
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": "center",
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": "bottom",
                "x": 0,
                "y": 0,
                "padding": 5
            },
            "cropThreshold": 300,
            "pointRange": 0,
            "softThreshold": false,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": {
                        "size": 10,
                        "opacity": 0.25
                    }
                },
                "select": {
                    "marker": {}
                }
            },
            "stickyTracking": true,
            "turboThreshold": 1000,
            "findNearestPointBy": "x",
            "threshold": 0
        },
        "column": {
            "lineWidth": 2,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": null,
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": null,
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": null,
                "x": 0,
                "y": null,
                "padding": 5
            },
            "cropThreshold": 50,
            "pointRange": null,
            "softThreshold": false,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": false,
                    "brightness": 0.1,
                    "shadow": false
                },
                "select": {
                    "marker": {},
                    "color": "#cccccc",
                    "borderColor": "#000000",
                    "shadow": false
                }
            },
            "stickyTracking": false,
            "turboThreshold": 1000,
            "findNearestPointBy": "x",
            "borderRadius": 0,
            "crisp": true,
            "groupPadding": 0.2,
            "pointPadding": 0.1,
            "minPointLength": 0,
            "startFromThreshold": true,
            "threshold": 0,
            "borderColor": "#ffffff"
        },
        "bar": {
            "lineWidth": 2,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": null,
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": null,
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": null,
                "x": 0,
                "y": null,
                "padding": 5
            },
            "cropThreshold": 50,
            "pointRange": null,
            "softThreshold": false,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": false,
                    "brightness": 0.1,
                    "shadow": false
                },
                "select": {
                    "marker": {},
                    "color": "#cccccc",
                    "borderColor": "#000000",
                    "shadow": false
                }
            },
            "stickyTracking": false,
            "turboThreshold": 1000,
            "findNearestPointBy": "x",
            "borderRadius": 0,
            "crisp": true,
            "groupPadding": 0.2,
            "pointPadding": 0.1,
            "minPointLength": 0,
            "startFromThreshold": true,
            "threshold": 0,
            "borderColor": "#ffffff"
        },
        "scatter": {
            "lineWidth": 0,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": {
                "lineWidth": 0,
                "lineColor": "#ffffff",
                "radius": 4,
                "states": {
                    "hover": {
                        "animation": {
                            "duration": 50
                        },
                        "enabled": true,
                        "radiusPlus": 2,
                        "lineWidthPlus": 1
                    },
                    "select": {
                        "fillColor": "#cccccc",
                        "lineColor": "#000000",
                        "lineWidth": 2
                    }
                },
                "enabled": true
            },
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": "center",
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": "bottom",
                "x": 0,
                "y": 0,
                "padding": 5
            },
            "cropThreshold": 300,
            "pointRange": 0,
            "softThreshold": true,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": {
                        "size": 10,
                        "opacity": 0.25
                    }
                },
                "select": {
                    "marker": {}
                }
            },
            "stickyTracking": true,
            "turboThreshold": 1000,
            "findNearestPointBy": "xy"
        },
        "pie": {
            "lineWidth": 2,
            "allowPointSelect": false,
            "showCheckbox": false,
            "animation": {
                "duration": 1000
            },
            "events": {},
            "marker": null,
            "point": {
                "events": {}
            },
            "dataLabels": {
                "align": "center",
                "style": {
                    "fontSize": "11px",
                    "fontWeight": "bold",
                    "color": "contrast",
                    "textOutline": "1px contrast"
                },
                "verticalAlign": "bottom",
                "x": 0,
                "y": 0,
                "padding": 5,
                "distance": 30,
                "enabled": true
            },
            "cropThreshold": 300,
            "pointRange": 0,
            "softThreshold": true,
            "states": {
                "hover": {
                    "animation": {
                        "duration": 50
                    },
                    "lineWidthPlus": 1,
                    "marker": {},
                    "halo": {
                        "size": 10,
                        "opacity": 0.25
                    },
                    "brightness": 0.1,
                    "shadow": false
                },
                "select": {
                    "marker": {}
                }
            },
            "stickyTracking": false,
            "turboThreshold": 1000,
            "findNearestPointBy": "x",
            "center": [null, null],
            "clip": false,
            "colorByPoint": true,
            "ignoreHiddenPoint": true,
            "legendType": "point",
            "size": null,
            "showInLegend": false,
            "slicedOffset": 10,
            "borderColor": "#ffffff",
            "borderWidth": 1
        },
        "series": {
            "dataLabels": {
                "color": "#B0B0B3"
            },
            "marker": {
                "lineColor": "#333"
            }
        },
        "boxplot": {
            "fillColor": "#505053"
        },
        "candlestick": {
            "lineColor": "white"
        },
        "errorbar": {
            "color": "white"
        }
    },
    "labels": {
        "style": {
            "position": "absolute",
            "color": "#707073"
        }
    },
    "legend": {
        "enabled": true,
        "align": "right",
        "layout": "vertical",
        "borderColor": "#999999",
        "borderRadius": 0,
        "navigation": {
            "activeColor": "#003399",
            "inactiveColor": "#cccccc"
        },
        "itemStyle": {
            "color": "#E0E0E3",
            "fontSize": "12px",
            "fontWeight": "bold",
            "textOverflow": "ellipsis",
            "cursor": "pointer"
        },
        "itemHoverStyle": {
            "color": "#FFF"
        },
        "itemHiddenStyle": {
            "color": "#606063"
        },
        "shadow": false,
        "itemCheckboxStyle": {
            "position": "absolute",
            "width": "13px",
            "height": "13px"
        },
        "squareSymbol": true,
        "symbolPadding": 5,
        "verticalAlign": "middle",
        "x": 0,
        "y": 0,
        "title": {
            "style": {
                "fontWeight": "bold"
            }
        },
        "borderWidth": 0
    },
    "loading": {
        "labelStyle": {
            "fontWeight": "bold",
            "position": "relative",
            "top": "45%"
        },
        "style": {
            "position": "absolute",
            "backgroundColor": "#ffffff",
            "opacity": 0.5,
            "textAlign": "center"
        }
    },
    "tooltip": {
        "enabled": true,
        "animation": true,
        "borderRadius": 3,
        "dateTimeLabelFormats": {
            "millisecond": "%A, %b %e, %H:%M:%S.%L",
            "second": "%A, %b %e, %H:%M:%S",
            "minute": "%A, %b %e, %H:%M",
            "hour": "%A, %b %e, %H:%M",
            "day": "%A, %b %e, %Y",
            "week": "Week from %A, %b %e, %Y",
            "month": "%B %Y",
            "year": "%Y"
        },
        "footerFormat": "",
        "padding": 8,
        "snap": 10,
        "backgroundColor": "rgba(0, 0, 0, 0.85)",
        "borderWidth": 1,
        "headerFormat": "<span style=\"font-size: 10px\">{point.key}</span><br/>",
        "pointFormat": "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.y}</b><br/>",
        "shadow": true,
        "style": {
            "color": "#F0F0F0",
            "cursor": "default",
            "fontSize": "12px",
            "pointerEvents": "none",
            "whiteSpace": "nowrap"
        },
        "valueSuffix": "°C",
        "userOptions": {
            "valueSuffix": "°C"
        }
    },
    "credits": {
        "enabled": true,
        "href": "http://www.highcharts.com",
        "position": {
            "align": "right",
            "x": -10,
            "verticalAlign": "bottom",
            "y": -5
        },
        "style": {
            "cursor": "pointer",
            "color": "#666",
            "fontSize": "9px"
        },
        "text": "Highcharts.com"
    },
    "navigation": {
        "buttonOptions": {
            "theme": {
                "fill": "#505053",
                "stroke": "none",
                "padding": 5
            },
            "symbolSize": 14,
            "symbolX": 12.5,
            "symbolY": 10.5,
            "align": "right",
            "buttonSpacing": 3,
            "height": 22,
            "verticalAlign": "top",
            "width": 24,
            "symbolFill": "#666666",
            "symbolStroke": "#DDDDDD",
            "symbolStrokeWidth": 3
        },
        "menuStyle": {
            "border": "1px solid #999999",
            "background": "#ffffff",
            "padding": "5px 0"
        },
        "menuItemStyle": {
            "padding": "0.5em 1em",
            "background": "none",
            "color": "#333333",
            "fontSize": "11px",
            "transition": "background 250ms, color 250ms"
        },
        "menuItemHoverStyle": {
            "background": "#335cad",
            "color": "#ffffff"
        }
    },
    "exporting": {
        "type": "image/png",
        "url": "https://export.highcharts.com/",
        "printMaxWidth": 780,
        "scale": 2,
        "buttons": {
            "contextButton": {
                "className": "highcharts-contextbutton",
                "menuClassName": "highcharts-contextmenu",
                "symbol": "menu",
                "_titleKey": "contextButtonTitle",
                "menuItems": [{
                    "textKey": "printChart"
                }, {
                    "separator": true
                }, {
                    "textKey": "downloadPNG"
                }, {
                    "textKey": "downloadJPEG"
                }, {
                    "textKey": "downloadPDF"
                }, {
                    "textKey": "downloadSVG"
                }]
            }
        }
    },
    "xAxis": {
        "gridLineColor": "#707073",
        "labels": {
            "style": {
                "color": "#E0E0E3"
            }
        },
        "lineColor": "#707073",
        "minorGridLineColor": "#505053",
        "tickColor": "#707073",
        "title": {
            "style": {
                "color": "#A0A0A3"
            }
        },
        "categories": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    },
    "yAxis": {
        "gridLineColor": "#707073",
        "labels": {
            "style": {
                "color": "#E0E0E3"
            }
        },
        "lineColor": "#707073",
        "minorGridLineColor": "#505053",
        "tickColor": "#707073",
        "tickWidth": 1,
        "title": {
            "style": {
                "color": "#A0A0A3"
            },
            "text": "温度 (°C)"
        },
        "plotLines": [{
            "value": 0,
            "width": 1,
            "color": "#808080"
        }]
    },
    "drilldown": {
        "activeAxisLabelStyle": {
            "color": "#F0F0F3"
        },
        "activeDataLabelStyle": {
            "color": "#F0F0F3"
        }
    },
    "rangeSelector": {
        "buttonTheme": {
            "fill": "#505053",
            "stroke": "#000000",
            "style": {
                "color": "#CCC"
            },
            "states": {
                "hover": {
                    "fill": "#707073",
                    "stroke": "#000000",
                    "style": {
                        "color": "white"
                    }
                },
                "select": {
                    "fill": "#000003",
                    "stroke": "#000000",
                    "style": {
                        "color": "white"
                    }
                }
            }
        },
        "inputBoxBorderColor": "#505053",
        "inputStyle": {
            "backgroundColor": "#333",
            "color": "silver"
        },
        "labelStyle": {
            "color": "silver"
        }
    },
    "navigator": {
        "handles": {
            "backgroundColor": "#666",
            "borderColor": "#AAA"
        },
        "outlineColor": "#CCC",
        "maskFill": "rgba(255,255,255,0.1)",
        "series": {
            "color": "#7798BF",
            "lineColor": "#A6C7ED"
        },
        "xAxis": {
            "gridLineColor": "#505053"
        }
    },
    "scrollbar": {
        "barBackgroundColor": "#808083",
        "barBorderColor": "#808083",
        "buttonArrowColor": "#CCC",
        "buttonBackgroundColor": "#606063",
        "buttonBorderColor": "#606063",
        "rifleColor": "#FFF",
        "trackBackgroundColor": "#404043",
        "trackBorderColor": "#404043"
    },
    "legendBackgroundColor": "rgba(0, 0, 0, 0.5)",
    "background2": "#505053",
    "dataLabelsColor": "#B0B0B3",
    "textColor": "#C0C0C0",
    "contrastTextColor": "#F0F0F3",
    "maskColor": "rgba(255,255,255,0.3)",
    "series": "表格中需要的数据"
}