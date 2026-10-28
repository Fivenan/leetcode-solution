import java.util.*;

class Solution {
    public int largestRectangleArea(int[] h) {
        int[] st = new int[h.length + 1];
        int top = - 1, best = 0;
        for (int i = 0; i <= h.length; i++) {
            int cur = i == h.length ? 0 : h[i];
            while (top >= 0 && h[st[top]] > cur) {
                int height = h[st[top--]], left = top < 0 ? - 1 : st[top];
                best = Math.max(best, height * (i - left - 1));
            }
            st[++top] = i;
        }
        return best;
    }
}
