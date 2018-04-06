/* ####Questions
>What does the acronym DOM stand for and explain in your own words what it is.

A: DOM stands for Document Object Model. It is a single object that has many nested HTML elements in it. These many nested HTML elements allow for us to manipulate
the HTML without having to touch the HTML, and instead just use JavaScript built in functions.From a broader perspective, the DOM defines the logical structure of documents.
It also defines the way it is accessed and manipulated.

>How does the DOM make web programming more efficient?

A: From this checkpoint's reading, it seems that using the DOM can make programming
more efficient. You have the ability to manipulate HTML without having to touch the HTML.
By using the JavaScript built -in functions, you can call up the elements you
want to work with by ID, tag, class, etc. and utilize that in order to make
modifications or changes. It can be much faster since you don't have to manipulate the
HTML itself. There might be multiple classes or tags you want to manipulate, and
by using the new or old school ways to select the specific elements you want,
it can be more efficient.*/

/* ####Code
Using createElement and getElementById. Add a new Shirt to the ul. Set the
innerText equal to 'Mens T-shirt'.*/
```
const newShirt = document.getElementById('list')
const newBullet = document.createElement('li');
newBullet.textContent = 'Mens T-Shirt';
newShirt.appendChild(newBullet)
```
