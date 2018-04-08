var answers = document.getElementsByClassName('feed_item inline_expand_item')

setInterval(()=>{answers[answers.length-1].scrollIntoView();

fun();

},10);


var fun = ()=>{


var count = 0;

var answers = document.getElementsByClassName('feed_item inline_expand_item')

for(let i=0;i<answers.length-1;i++){

var upvoteString = answers[i].getElementsByClassName('icon_action_bar-count')[0].innerText.replace(' ·','').replace('k','000');



count+=Number.parseInt(upvoteString)




}

console.log("Upvote count of  "+ answers.length +" questions are " +count);

}
