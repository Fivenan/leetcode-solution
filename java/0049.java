import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] a) {
        Map<String, List<String>> groups = new HashMap<>();
        for (String s : a) {
            char[] counts = new char[26];
            for (int i = 0; i < s.length(); i++) {
                counts[s.charAt(i) - 'a']++;
            }
            String key = new String(counts);
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(groups.values());
    }
}
