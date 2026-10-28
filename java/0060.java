import java.util.*;

class Solution {
    public String getPermutation(int n, int k) {
        int[] fact = new int[n + 1];
        fact[0] = 1;
        List<Integer> digits = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            fact[i] = fact[i - 1] * i;
            digits.add(i);
        }
        k--;
        StringBuilder out = new StringBuilder();
        for (int left = n; left > 0; left--) {
            int block = fact[left - 1];
            out.append(digits.remove(k / block));
            k %= block;
        }
        return out.toString();
    }
}
