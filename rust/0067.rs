impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
        let (a,b)=(a.as_bytes(),b.as_bytes());
        let (mut i,mut j)=(a.len(),b.len());
        let mut carry=0u8;
        let mut reversed=Vec::new();
        while i>0 || j>0 || carry>0 {
            let mut sum=carry;
            if i>0 {
                i-=1;
                sum+=a[i]-b'0';
            }
            if j>0 {
                j-=1;
                sum+=b[j]-b'0';
            }
            reversed.push(b'0'+sum%2);
            carry=sum/2;
        }
        reversed.into_iter().rev().map(char::from).collect()
    }
}
