function upvote()
{
  let votes = document.getElementById('votes');
  let count = parseInt(votes.innerHTML);
  count++;  //1000 ->1001
  votes.innerHTML = count;
}

function downote()
{
  let votes = document.getElementById('votes');
  let count = parseInt(votes.innerHTML);
  count--;  //1000 ->999
  votes.innerHTML = count;
}
