impl Solution {
    pub fn multiply(num1: String, num2: String) -> String {
        if num1=="0" || num2=="0" {
            return "0".into();
        }
        let (a,b)=(num1.as_bytes(),num2.as_bytes());
        let mut digits=vec![0i32;a.len()+b.len()];
        for i in (0..a.len()).rev() {
            for j in (0..b.len()).rev() {
                let sum=digits[i+j+1]+(a[i]-b'0') as i32*(b[j]-b'0') as i32;
                digits[i+j+1]=sum%10;
                digits[i+j]+=sum/10;
            }
        }
        digits.into_iter().skip_while(|&d|d==0).map(|d|(b'0'+d as u8) as char).collect()
    }
}
