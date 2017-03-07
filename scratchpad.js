function fib(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'fib');
  if (n < 2)
  {
    if (n === 0) {
      value = 0;
    } 
    else {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'n = ' + n + ', Fib = ' + value + ';';
    div.appendChild(p)
  } 
  else {
    //left
    var left = fib(n - 1);
    var c = left.html.getAttribute('class');
    left.html.setAttribute('class', 'fib-left');
    //right
    var right = fib(n - 2);
    c = right.html.getAttribute('class');
    right.html.setAttribute('class', 'fib-right');
    //add it up
    value = left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'n = ' + n + ', Fib = ' + value + ';';
    div.appendChild(p)
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return {
    'value': value,
    'html': div
  };
}
function pell(n)
{
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'pell');
  if (n < 2)
  {
    if (n === 0)
    {
      value = 0;
    } 
    else
    {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'n = ' + n + ', Pell = ' + value + ';';
    div.appendChild(p)
  } 
  else {
    //value = 2 * pell(n - 1) + pell(n - 2);
    var left = pell(n - 1);
    var c = left.html.getAttribute('class');
    left.html.setAttribute('class', c + 'pellleft');
    var right = pell(n - 2);
    c = right.html.getAttribute('class');
    right.html.setAttribute('class', c + 'pellright');
    value = (2 * left.value) + right.value;
    var p = document.createElement('p');
    p.textContent = 'n = ' + n + ', Pell = ' + value + ';';
    div.appendChild(p)
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return {
    'value': value,
    'html': div
  };
}
function trib(n)
{
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'pell');
  if (n < 3)
  {
    if (n === 0 || n === 1) {
      value = 0;
    } 
    else
    {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'n = ' + n + ', Trib = ' + value + ';';
    div.appendChild(p)
  } 
  else {
    //value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    
    var left = trib(n - 1);
    var c = left.html.getAttribute('class');
    left.html.setAttribute('class', c + 'tribleft');
    
    var middle = trib(n - 2);
    var c = middle.html.getAttribute('class');
    middle.html.setAttribute('class', c + 'tribmiddle');
    
    var right = trib(n - 3);
    c = right.html.getAttribute('class');
    right.html.setAttribute('class', c + 'tribright');
    
    value = left.value + middle.value + right.value;
    
    var p = document.createElement('p');
    p.textContent = 'n = ' + n + ', Trib = ' + value + ';';
    div.appendChild(p)
    div.appendChild(left.html);
    div.appendChild(right.html);
    div.appendChild(right.html);
  }
  return {
    'value': value,
    'html': div
  };
}
function fib1(n, node)
{
  var tree = fib(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'fib');
}
function pell1(n, node)
{
  var tree = pell(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'pell');
}
function trib1(n, node)
{
  var tree = trib(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'trib');
}
document.title = 'Recursive Functions';
var heading = document.createElement('h1');
heading.textContent = 'Recursive Functions';
document.querySelector('body').appendChild(heading);
var fibnode = document.createElement('div');
document.querySelector('body').appendChild(fibnode);
var pellnode = document.createElement('div');
document.querySelector('body').appendChild(pellnode);
var tribnode = document.createElement('div');
document.querySelector('body').appendChild(tribnode);
fib1(5, fibnode);
pell1(5, pellnode);
trib1(7, tribnode);