/**
 * 获取数据：var str = localstorage.getItem(key)
 * 添加和设置数据：localstorage.setItem(key,value)
 * 移除数据：localstorage.removeItem(key)
 */
/** 1.设置常量 */
export const KEY = 'goodsInfoData';
export var itemObj = { goodsId: 0, count: 0 };

/** 2.实现数据增加 */
export function setItem(dataStr) {
    var jsonStr = localStorage.getItem(KEY);
    jsonStr = jsonStr || '[]';
    var arr = JSON.parse(jsonStr);
    arr.push(dataStr);
    localStorage.setItem(KEY, JSON.stringify(arr));
}

/** 3.获取数据 */
export function getItem() {
    var jsonStr = localStorage.getItem(KEY);
    jsonStr = jsonStr || '[]';
    return JSON.parse(jsonStr);
}

/** 4.移除数据 */
export function removeItem() {
    localStorage.removeItem(KEY);
}

/**
 * 5.
 */
export function getGoodsObject() {
    var resObj = {}
    var arr = getItem();
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (!resObj[item.goodsId]) {
            resObj[item.goodsId] = item.count;
        } else {
            var count = resObj[item.goodsId];
            resObj[item.goodsId] = count + item.count;
        }
    }
    return resObj;
}