//Write a function to convert a name into initials.
// This kata takes strictly 2 words with 1 space in between them.
// Output should be 2 letters with dot in between
// Input = Refilwe Dikutle
// Output = R.D

function abbreviateNames(str){
    str = str.split(' ')

 let abbrN = str[0][0].toUpperCase() + '.' + str[1][0].toUpperCase() 
    console.log(abbrN)
    // or return abbrN
}

abbreviateNames('refilwe Dikutle')
abbreviateNames('kaboentle dikutle')
abbreviateNames('mamiki dikutle')