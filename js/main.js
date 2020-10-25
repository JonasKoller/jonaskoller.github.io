document.addEventListener("DOMContentLoaded", function(){
  setTimeout(() =>  {
    writeWithDelay("", "Jonas Koller", document.getElementById('title'), 170);
  }, 1000);
});

function writeWithDelay(before, text, element, timeout) {
  if (text && text.length > 0) {
    setTimeout(() =>  {
      before += text.charAt(0);
      element.innerText = before;
      writeWithDelay(before, text.slice(1), element, timeout)
    }, timeout);
  }
}
