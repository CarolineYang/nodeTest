var groupAnagrams = function(strs) {
    var h = {};
    for (var str of strs) {
        var key = Array.from(str).sort().join();
        h[key] ? h[key].push(str) : h[key] = [str]
    }
    return Object.values(h)
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(Array.from('asabs').sort())

