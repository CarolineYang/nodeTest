//下一个搬到前面 迭代
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur){
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev
};
//递归
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList(next);
    head.next = null; // 裁减 head
    next.next = head; // 尾接
    return reverseHead;
};

