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
    div.appendChild(p);
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
    div.appendChild(p);
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
  div.setAttribute('class', 'trib');
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
  var fibTree = node.querySelector('div.fib');
  if (fibTree)
  {
    node.removeChild(fibTree);
  }
  n = parseInt(n);
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

function createDiv()
{
  var divName = document.createElement('div');
  document.querySelector('body').appendChild(divName);
  return divName;
}



/*var fibnode = createDiv();
var pellnode = createDiv();
var tribnode = createDiv();

fib1(11, fibnode);
pell1(11, pellnode);
trib1(11, tribnode);*/

var linkListDiv = document.createElement('div');
document.querySelector('body').appendChild(linkListDiv);

var paragraph = document.createElement('p');
paragraph.textContent="For more information on our number sequences:";
document.querySelector('body').appendChild(paragraph);


var linkList = document.createElement('ul');
document.querySelector('body').appendChild(linkList);

var list1 = document.createElement('li');
var list2 = document.createElement('li');
var list3 = document.createElement('li');

linkList.appendChild(list1);
linkList.appendChild(list2);
linkList.appendChild(list3);

var link = document.createElement('a');
link.setAttribute('href', 'https://oeis.org/A000045');
link.textContent='Fibonacci';
list1.appendChild(link);

var link2 = document.createElement('a');
link2.setAttribute('href', 'https://oeis.org/A000129');
link2.textContent='Pell';
list2.appendChild(link2);

var link3 = document.createElement('a');
link3.setAttribute('href', 'https://oeis.org/A000073');
link3.textContent='Tribbonacci';
list3.appendChild(link3);

function fibButton(me){
  var value = me.parentNode.querySelector('input').value;
  fib1(value, me.parentNode.parentNode);
}

function fibSlider(me)
{
  var form = me.parentNode;
  var button = form.querySelector('button');
  button.textContent = "Fib("+me.value+")";
}
