//CRESTE BY ZTS
//防抖
export const debounce = function (func = () => { }, delay = 0) {
    let isWaiting = true;
    let timerId = -1;
    return function (...rest) {
        clearTimeout(timerId);
        if (!isWaiting) {
            isWaiting = true;
            return func(...rest);
        } else {
            timerId = setTimeout(() => {
                isWaiting = false;
            }, delay);
        }

    }
}
//节流
export const throttl = function (func, delay) {
    let preTime = Number.MIN_VALUE;
    return function (...rest) {
        const nowTime = Date.now();
        if (nowTime - preTime > delay) {
            preTime = nowTime;
            return func(rest);
        }
    }
}
//设置基础字体大小
export const setBasicFontSize = () => {
    if (document) {
        const dcm = document.documentElement;
        const baseWidth = 375;
        const baseFontSize = (document.documentElement.getBoundingClientRect().width / baseWidth * 10) / 10000 * 10000;
        dcm.style.fontSize = baseFontSize + 'px';
    } else {
        throw new Error("请在浏览器环境执行该代码");
    }
}

//重置浏览器的baseFontSize
export const reComputedFontSize = () => {
    window.onresize = throttl(() => {
        setBasicFontSize();
    }, 200);
}

//将字符串转换为 "Y-M-D" 和 "Y:M:D"两种格式，不传入默认返回当前时间 的 "Y-M-D"格式
export const formateDate = (format, str) => {
    str = str || new Date().toString();
    format = format || "yyyy-mm-dd";
    const getzf = (num) => {
        if (parseInt(num) < 10) {
            num = '0' + num;
        }
        return num;
    }
    let oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSec = oDate.getSeconds();
    let oTime = "";
    if (format == 'yyyy-mm-dd') {
        oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay);//
    } else if (format == 'yyyy/mm/dd') {
        oTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay);//
    }
    return oTime;
};
