function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;   
        arrayPrimes.push(i) // push i ลงไปตรวจสอบที่ array
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) 
        return false;
    }
    return true;
}
const arrayPrimes = []
while(true) {
    var number_str = Number(prompt("Enter a positive integer")) // แปลง String to int
    if(!setInt(number_str)) 
        continue;
    if(number_str < 0) 
         continue;
    showPrimes(number_str);
    alert('For n = ' + number_str + ' prime numbers are ' + arrayPrimes)
    break;
}
function setInt(n) {
    return n % 1 == 0; //set จำนวนเต็มมากว่า0 ไม่เป็นทศนิยม
}