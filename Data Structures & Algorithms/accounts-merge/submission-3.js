class UnionFind {
    constructor(n) {
        this.par = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(0)
    }

    find(x) {
        let p = this.par[x];

        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];
            p = this.par[p]
        }

        return p
    }

    union(x, y) {
        let p1 = this.find(x)
        let p2 = this.find(y)
        
        if (p1 === p2) {
            return false;
        }

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1
        }
        else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2
        }
        else {
            this.par[p2] = p1;
            this.rank[p1] += 1
        }

        return true
    }
}

class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const uf = new UnionFind(accounts.length);
        const emailToAcc = new Map();

        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                if (emailToAcc.has(accounts[i][j])) {
                    uf.union(emailToAcc.get(accounts[i][j]), i)
                }
                else {
                    emailToAcc.set(accounts[i][j], i)
                }
            }
        }

        const groupEmail = new Map();

        for (const [email, index] of emailToAcc) {
            const par = uf.find(index);
            if (!groupEmail.has(par)) {
                groupEmail.set(par, [])
            }
            groupEmail.get(par).push(email);
        }

        const res = [];

        for (const [i, emails] of groupEmail) {
            const name = accounts[i][0];
            res.push([name, ...emails]);
        }

        return res
    }
}
