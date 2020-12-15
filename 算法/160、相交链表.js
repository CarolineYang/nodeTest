// 编写一个程序，找到两个单链表相交的起始节点。
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
// 输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，
// 相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
//双指针 爱他就走他走过的路终会相遇
var getIntersectionNode = function(headA, headB) {
    let A = headA,B = headB;
    while(A || B){
        if(A==B){
            return A;
        }
        if(A){
            A = A.next;
        }else{
            A = headB;
        }
        if(B){
            B = B.next;
        }else{
            B = headA;
        }

    }
    return null;
};
//哈希
var getIntersectionNode = function(headA, headB) {
    let A = headA;
    let bb = new Set();
    bb.add(A);
    while(A){
        A = A.next;
        bb.add(A)
    }
    while(headB){
        if(bb.has(headB)){
            return headB
        }
        headB = headB.next;
    }
    return null;
};
