// 1、两数之和
// 三数之和 岛屿的最大面积 搜索旋转排序数组 最长连续递增序列  数组中的第K个最大元素 最长连续序列 dik个排列 朋友圈 合并区间 接雨水
let set = new Set([1,2,3]);
set.add('1');
set.add(2);
console.log(set,set.size)

set.forEach(function (value,key,ownerSet) {
    console.log(value);
    console.log(key);
})
let ass = [1,2];
console.log([...set],ass)
let map = new Map();
map.set('title','hello world');
map.set('year','2018');

console.log(map); //2
let maps = new Map([['title','hello world'],['year','2018']]);
maps.forEach((value,key,ownerMap)=>{
    console.log(value);
    console.log(key);
});
let visit = new Array(5).fill(0);
console.log(visit)
