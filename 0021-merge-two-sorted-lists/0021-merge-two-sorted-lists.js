/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 1    >  2  > 4
   // curr1
    // 1     > 3  > 4
   // curr2

   const dummyHead = new ListNode();
   let appendPoint = dummyHead;
   let curr1 = list1;
   let curr2 = list2; 

   while(curr1 !== null && curr2 !== null){
       if(curr1.val <= curr2.val){
        appendPoint.next = curr1;
        curr1 = curr1.next;
       } else {
        appendPoint.next = curr2;
        curr2 = curr2.next;
       } 

       appendPoint = appendPoint.next;
   } 

   if(curr1 !== null){
    appendPoint.next = curr1;
   }
   if(curr2 !== null){
    appendPoint.next = curr2;
   }

   return dummyHead.next;
};