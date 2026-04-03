/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let result = null;

        for (let i = 0; i < lists.length; i++) {
            result = this.merge(result, lists[i]);
        }

        return result;
    }

    merge(list1, list2) {
        let result = new ListNode();
        let prev = result;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                prev.next = list1;
                prev = prev.next;
                list1 = list1.next;
            }
            else {
                prev.next = list2;
                prev = prev.next;
                list2 = list2.next;
            }
        }

        while (list1) {
            prev.next = list1;
            prev = prev.next;
            list1 = list1.next
        }

        while (list2) {
            prev.next = list2;
            prev = prev.next;
            list2 = list2.next;
        }

        return result.next;
    }
}
