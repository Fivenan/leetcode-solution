import java.util.*;

class Solution {
    public List<Integer> grayCode(int n) {
        List<Integer> out = new ArrayList<>(1 << n);
        for (int i = 0; i <(1 << n); i++) {
            out.add(i ^(i >>> 1));
        }
        return out;
    }
}
