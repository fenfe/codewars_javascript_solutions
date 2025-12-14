//You can print your name on a billboard ad.
//Find out how much it will cost you.
//Each character has a default price of 30pounds.
// But that can be different if given 2 parameters instead of 1.

//You cannot use multiply operator.
//If your name would be jeong-wu-anhasenchi, ad would cost 600pounds
// 20 chracters * 30


//Solution without using the multiply operator
function billboard(str, price = 30){
    str = str.split('')
    let billboard = 0
    for(let i = 0; i < str.length; i++){
        billboard += price
    }
    return billboard
}

//soloution using the multiply operator
function billboard2(str2, price2 = 30){
    str2 = str2.split('')
    let billboard = price2 * str2.length
    return billboard
};
billboard2('refilwe dikutle')
billboard2('zakhele tinga')


















