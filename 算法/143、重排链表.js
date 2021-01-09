// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
var reorderList = function(head, s = [], tmp) {
    while (head) {
        tmp = head.next,
            head.next = null,
            s.push(head),
            head = tmp
    }

    var i = -1, j = s.length
    while (++i < --j) {
        s[i].next = s[j]
        if(j !== i + 1 ){
            s[j].next = s[i + 1]
        }
    }
    return s[0]

};
