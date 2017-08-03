var a = {
    name: {
        first: "leo"
    }
}





attached = function(attr, value, bool) {

    bool = (bool === void 0) ? true : bool;

    if (!bool) return false;


    if (eval(attr) !== void 0) {

        // 当传入属性不为空的时
        eval(attr) = value;
    } else {

        // 当传入属性未空
        var arr = attr.split('.');

    }
}