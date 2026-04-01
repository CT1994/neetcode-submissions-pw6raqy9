class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let counts = [0, 0];

        for (const s of students) {
            counts[s] += 1
        }

        for (const s of sandwiches) {
            if (counts[s] === 0) {
                break;
            }
            else {
                counts[s] -= 1
            }
        }

        return counts[0] + counts[1]
    }
}
