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