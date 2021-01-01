var oddEvenList = function(head) {
    if(!head)return head;
    let evenHead = head.next;
    let odd = head;
    let even = evenHead;
    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head
};
a = 10;
console.log(a)
var a;
console.log(a)
