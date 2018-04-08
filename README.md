# QuoraUpvoteCount
JavaScript Script to count upvotes of any person

# Steps 
1. Open persons quora profile in the chrome browser
2. Paste the below code in the console window of the browser tab. (press CTRL+SHIFT+I)

# You are done. Now you can see the upvotes count of the person in the console. 



``` 
var answers = document.getElementsByClassName('feed_item inline_expand_item')

setInterval(()=>{answers[answers.length-1].scrollIntoView();

fun();

},1000);


var fun = ()=>{


var count = 0;

var answers = document.getElementsByClassName('feed_item inline_expand_item')

for(let i=0;i<answers.length-1;i++){

var upvoteString = answers[i].getElementsByClassName('icon_action_bar-count')[0].innerText.replace(' ·','').replace('k','000');



count+=Number.parseInt(upvoteString)




}

console.log("Upvote count of  "+ answers.length +" questions are " +count);

}
