var groupAnagrams = function(strs) {
    var h = {};
    for (var str of strs) {
        console.log(Array.from(str).sort().join())
        var key = Array.from(str).sort().join()
        h[key] ? h[key].push(str) : h[key] = [str]
    }
    return Object.values(h)
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


var hh = [1,2,3,4,6,7,6];
console.log(hh.filter((res)=>{
    return res == 6
}));
var jj = new Set();
jj.add(5);
console.log(Array.from(jj).length);
