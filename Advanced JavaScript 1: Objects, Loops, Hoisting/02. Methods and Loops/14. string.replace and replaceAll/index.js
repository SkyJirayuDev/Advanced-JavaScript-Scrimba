const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

/*
Challenge:
    1. Use replaceAll and regex to ensure the first 
       character of each sentence is uppercase.
       You will need to use a string method which converts 
       characters to uppercase.
*/

console.log(paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function(match){
    return match.toUpperCase()
}))

//JavaScript is the backbone of the internet. It was created in 1995. Before JS, websites were so boring

