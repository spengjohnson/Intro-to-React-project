//Consuming APIs

/* ####Questions

>Explain the difference between the request/response cycle.

A: Every time you click on a link, submit a form or enter a new URL you are starting
a new cycle. For example, when you enter a URL for a webpage, you are sending a request.
the browser then parses the URL into the protocol- https, the domain name, and the resource.
The browser then communicated with your ISP and looks up the DNS for the IP address that hosts
that web page. Your ISP will receive teh IP address, and then send it over to your browswer.
Your browser will use the IP address it received and the given port number from the URL and opens a TCP
socket connection, and at this point the browser and server are now connected. Your browser sends an HTTP
request to the web server for the main HTML web page for the website you're trying to access.
The web server receives your request and then looks for the HTML page. If it exists, the web server will
prepare to send a response and then send it back to your browser. If it can't find it, then you'll get an error.

>List common response codes and their groupings.

A:
200s means the request went through ok and there was success.
300s means the request was received, but was redirected elsewhere.
400s means the requestor made a mistake and asked for a resource that didn't exist.
500s means the server made a mistake; the server could be down or some code on the
server threw an error.

>Explain the common HTTP verbs: GET, POST, PATCH, PUT AND DELETE.

A: These verbs allow a user to send a request to the same URL but get very different results.
GET is the most common and used to get a web page from a server. It occurs by default when you put a URL
into a browswer or click on a link.

POST creates a new object on a server

PATCH updates an existing object on a server, for example a password.

PUT replaces an existing object on the server. Often used interchangeable with PATCH but
should be a complete replacement only.

DELETE deletes an object from the server.

>Explain the difference between synchronous and asynchronous code.

A: Synchronous code waits for each task to finish before moving on to another one.
Most code runs synchronously. Asynchronous code continues to move on before the
current task finishes, which can create race conditions. With several processes running
at the same time, the time it will take to complete any of them is unknown. The finish and
outcome depends much on the order in which the processes complete. Asynchronous code
usually indicates that there is an intermittent bug.

>Explain what the JavaScript promise is.

A: A promise is an object that may produce a single value some time in the future.
It is like a placeholder where the successful result will go or the reason for failure will go.
It can either be a resolved one or a reason it's not resolved. It will be in 3 possible states: fulfilled (will be called- resolved),
rejected (will be called), or pending (not yet fulfilled or rejected). These can be returned synchronously
but from an asynchronous function. A promise is settled if it's not pending, i.e. it's been resolved or rejected.

>Explain why CORS exists and how we can work around it.

A: CORS is cross-origin resource sharing. It allows resources on a web page to be requested from
a site outside the domain of the original page. All modern browsers don't allow CORS
by default as it can lead to viruses or malicious JS. To work around it, you can use a
proxy site: https://cors-anywhere.herokuapp.com/. The server at this site will allow us to call out to
our requested site and then grab the data without making changes to it, and it'll be returned back as it is.

>Create a fetch request in JavaScript. */

A:
let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=0084127a34224dbcad9d93f567150050";

fetch(url)
  .then(r => {
    return r.json();
})
  .then(data => {
  console.log(data)
    let results = data.articles;
    let newsList = document.createElement("ul");
    let body = document.querySelector("body");
    body.appendChild(newsList);
    results.map(article => {
       console.log(article);
       let articleItem = document.createElement("li");
       articleItem.innerHTML =
         '<a href="' + article.url + '">' + article.title + "</a>";
      newsList.appendChild(articleItem); 
    });
})
  .catch(e => {
  console.log("An error occurred: ${e}");
});
