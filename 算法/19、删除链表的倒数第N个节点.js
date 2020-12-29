// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：给定的 n 保证是有效的。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var removeNthFromEnd = function(head, n) {
    let preHead = new ListNode(-1);
    preHead.next = head;
    let len = 0;
    let first = head;
    while(first){
        len++;
        first = first.next;
    }
    len -= n;
    first = preHead;
    while(len != 0){
        len--;
        first = first.next;
    }
    first.next = first.next.next;
    return preHead.next;
};
//双指针

var removeNthFromEnd = function(head, n) {
    let preHead = new ListNode(-1);
    preHead.next = head;
    let offset = n+1;
    let low = preHead;
    let fast = preHead;
    while(offset!=0){
        offset--;
        fast = fast.next;
    }
    while(fast){
        low=low.next;
        fast = fast.next;
    }
    low.next = low.next.next;
    return preHead.next
};
