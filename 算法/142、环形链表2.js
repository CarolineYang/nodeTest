// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。
//快慢指针 计算入环的位置
var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast) {
        if (fast.next == null) { // fast.next走出链表了，说明无环
            return null;
        }
        slow = slow.next;        // 慢指针走一步
        fast = fast.next.next;   // 慢指针走一步
        if (slow == fast) {      // 首次相遇
            fast = head;           // 让快指针回到头节点
            while (true) {         // 开启循环，让快慢指针相遇
                if (slow == fast) {  // 相遇，在入环处
                    return slow;
                }
                slow = slow.next;
                fast = fast.next;    // 快慢指针都走一步
            }
        }
    }
    return null;
};
//哈希表  计算入环的位置
var detectCycle = function(head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null
};
