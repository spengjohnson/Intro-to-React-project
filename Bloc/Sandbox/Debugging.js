//DEBUGGING

/* ####Questions
>Open your browser. Open up the Chrome DevTools. Click on the Network tab on the DevTools.
Go to your bloc roadmap page. What Request Url is being used to get your information
from the API?

A: https://www.bloc.io/api/v1/message_threads/unread_count

>Where can I find the cookies being used on the webpage using the Chrome DevTools?

A: Open the Developer Tools in the chrome browser. Then click on the Application tab.
From there you can expand the "Cookies" list, and click on any item from that list
to see more detail.

document.cookie in the console is another way, but it's not as well organized and
all the text is clumped together.

>Where can you execute JavaScript in the DevTools?

A: You can execute JavaScript in the console of the dev tools.

>How can you modify existing CSS on your webpage using the DevTools?

A: You can use the element inspector to help click on the particular part of the
page that you want to modify. In the Styles tab of DevTools, you will find the CSS that
applies for that part of the page you've clicked on. This helps narrow down and find
the CSS that applies. Under the element.style {} at the top of this section, you can add
whatever styling you'd like to the selected element. For example, if I click on a
text element, I can change the color, font, colors, or add decoration.

>What happens to code you have modified through the DevTools when you refresh the
page?

A: It is important to know that DevTools doesn't save any of the changes you make, so
all your changes will disappear when you refresh!

>What are different ways you can add breakpoints to your JavaScript for
debugging?

A: Breakpoints pause Javascript code and can help you debug faster (compared to the console.log() method).
Event listener breakpoints allow you to pause the code around the time that an event happens, such as a
click. The line-of-code allows you to break on an exact region of code, so you'll
need to find the line first, but once you do you can simply click on the line number to break. There are other
breakpoints, such as function that will allow you to pause whenever a specific function is called.
You can insert 'debug' in front of that function in order to pinpoint the issue. 'debug' is like the line-of-code breakpoint.
