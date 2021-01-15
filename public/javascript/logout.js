//logout function
function idleTimer(){
  var t;
  //window.onload = resetTimer;
  window.onmousemove = resetTimer; // catches mouse movements
  window.onmousedown = resetTimer; // catches mouse movements
  window.onclick = resetTimer;     // catches mouse clicks
  window.onscroll = resetTimer;    // catches scrolling
  window.onkeypress = resetTimer;  //catches keyboard actions

  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(logout, 1800000);  // time is in milliseconds (1000 is 1 second)
  }
}
async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

idleTimer();
document.querySelector('#logout').addEventListener('click', logout);

