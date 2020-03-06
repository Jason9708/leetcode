/*
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
    - 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
    - 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:
    你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:
    LRUCache cache = new LRUCache(2);   - 参数为缓存容量

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // 返回  1
    cache.put(3, 3);    // 该操作会使得密钥 2 作废
    cache.get(2);       // 返回 -1 (未找到)
    cache.put(4, 4);    // 该操作会使得密钥 1 作废
    cache.get(1);       // 返回 -1 (未找到)
    cache.get(3);       // 返回  3
    cache.get(4);       // 返回  4
*/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // 实例属性
    this.cache = new Map() // Map对象在迭代时会根据对象中元素的插入顺序来进行
    this.capacity = capacity
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 原型方法
    let cache = this.cache
    if (cache.has(key)) {
        // 如果元素存在，先删除Map存在的元素，再set进去，保证元素被置为最新使用（即最近最少使用的数据值永远在第一位）
        let temp = cache.get(key)
        cache.delete(key)
        cache.set(key, temp)
        return temp
    } else {
        return -1
    }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let cache = this.cache
    if (cache.has(key)) {
        // 若存在则先删除
        cache.delete(key)
    } else if (cache.size >= this.capacity) {
        cache.delete(cache.keys().next().value) // 获取最近最少使用的元素值并删除
    }

    cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache(2);
console.log(cache.put(1, 1))
console.log(cache.put(2, 2))
console.log(cache.get(1)) // 返回  1
console.log(cache.put(3, 3)) // 该操作会使得密钥 2 作废
console.log(cache.get(2)) // 返回 -1 (未找到)
console.log(cache.put(4, 4)) // 该操作会使得密钥 1 作废
console.log(cache.get(1)) // 返回 -1 (未找到)
console.log(cache.get(3)) // 返回  3
console.log(cache.get(4)) // 返回  4