//Advanced DOM Manipulation

/* ####Questions
>What is the difference between document.querySelector() and document.querySelectorAll()?

A: querySelector selects the first element that matches your query while querySelectorAll
selects ALL of the elements that match your query- it could return an array like object,
all of which meet your search criteria. So if you're searching/querying for elements that
are bold and red, it will return all elements that contain these two. If you were use
querySelector and search for these 2 items, it would just return the first element it
finds that are bold and red.

>What is the difference between getElement(s)By and querySelector(All)?

A: getElementsBy is an old school, tried and true method of querying for elements. It does
tend to return and work faster than the "new school" querySelector(All). querySelector(All)
can allow for more flexbility if needed if deciding to use one of the two. You can pass through
multiple search criteria as compared to getElement(s)By, which can only have one argument
passed through.

>What do JavaScript event handlers do and what is an example of one?

A: These are a set of functions that help handle what happens when an event is triggered,
such as a click, key press, etc. A good example where this might be used is on a site that
contains a long news article. You might see a "Read more" button at the bottom
of the page, so once you click that button it would show you the rest of the article.
The code used for such an action is the 'onclick' handler. The "Read more" button is
assigned to this type of handler.
*/

/* ####Code
Using the code from the prior checkpoint, add an Event Handler to the <li> element
and console.log() the name of the shirt they selected. */

const firstShirt = document. getElementsByTagName('li')[0];
firstShirt.onclick = () => {
  console.log(firstShirt.innerHTML);
}
