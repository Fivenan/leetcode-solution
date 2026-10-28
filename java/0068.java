import java.util.*;

class Solution {
    public List<String> fullJustify(String[] words, int width) {
        List<String> out = new ArrayList<>();
        int i = 0;
        while (i < words.length) {
            int j = i + 1, letters = words[i].length();
            while (j < words.length && letters + words[j].length() + j - i <= width) {
                letters += words[j++].length();
            }
            int gaps = j - i - 1;
            boolean left = j == words.length || gaps == 0;
            StringBuilder b = new StringBuilder();
            for (int k = i; k < j; k++) {
                b.append(words[k]);
                if (k < j - 1) {
                    int spaces = left ? 1 : (width - letters) / gaps + (k - i <(width - letters) % gaps ? 1 : 0);
                    b.append(" ".repeat(spaces));
                }
            }
            b.append(" ".repeat(width - b.length()));
            out.add(b.toString());
            i = j;
        }
        return out;
    }
}
