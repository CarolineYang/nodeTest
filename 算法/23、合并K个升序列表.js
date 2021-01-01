// 给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//     1->4->5,
//     1->3->4,
//     2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6
// 递归 分别对比  也可以转化成数组排序做
var mergeKLists = function(lists) {
    if(lists.length==0){
        return null;
    }
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
    let kk = new ListNode(-1);
    let aa = kk;
    aa.next = lists[0];
    for(let i=0;i<lists.length-1;i++){
        aa.next = mergeTwoLists(aa.next,lists[i+1]);
    }
    return kk.next
};
// 也可以转化成数组排序做
var mergeKLists = function(lists) {
    let hh = [];
    for(let a of lists){
        while(a){
            hh.push(a.val);
            a = a.next
        }
    }
    hh = hh.sort((a,b)=>a-b)
    let a = new ListNode(-1);
    let b = a;
    hh.map(function(item){
        b.next = new ListNode(item);
        b=b.next;
    })
    return a.next
};
