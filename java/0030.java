import java.util.*;

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> out = new ArrayList<>();
        int w = words[0].length(), total = words.length;
        Map<String, Integer> need = new HashMap<>();
        for (String x : words) {
            need.merge(x, 1, Integer::sum);
        }
        for (int off = 0; off < w; off++) {
            Map<String, Integer> have = new HashMap<>();
            int left = off, count = 0;
            for (int right = off; right + w <= s.length(); right += w) {
                String x = s.substring(right, right + w);
                if (!need.containsKey(x)) {
                    have.clear();
                    count = 0;
                    left = right + w;
                    continue;
                }
                have.merge(x, 1, Integer::sum);
                count++;
                while (have.get(x) > need.get(x)) {
                    String y = s.substring(left, left + w);
                    have.put(y, have.get(y) - 1);
                    left += w;
                    count--;
                }
                if (count == total) {
                    out.add(left);
                    String y = s.substring(left, left + w);
                    have.put(y, have.get(y) - 1);
                    left += w;
                    count--;
                }
            }
        }
        return out;
    }
}
