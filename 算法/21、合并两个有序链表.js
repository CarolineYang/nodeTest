// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
//暴力解法   也可以转换成数组做
var mergeTwoLists = function(l1, l2) {
    let a = l1,b=l2;
    let pr = new ListNode(-1);
    let prev = pr;
    while(a && b){
        if(a.val<b.val){
            prev.next = new ListNode(a.val);
            prev = prev.next;
            a = a.next;
        }else{
            prev.next = new ListNode(b.val);
            prev = prev.next;
            b=b.next;
        }
    }
    if(a){
        prev.next = a;
    }
    if(b){
        prev.next = b;
    }
    return pr.next;
};
//递归
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    if(l1.val<l2.val){
        l1.next =  mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
};
