# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

1. Your browser contacts a DNS server translating the URL into an IP address
2. Your browser uses the IP address to try and connect with the web server hosting the site you're trying to visit
3. When connection is established, your browser retrieves the code of the page requested
4. Your browser renders the code received on page

## From start to finish how does that data reach you to be rendered in the browser?

1. Process HTML markup and build the DOM tree
2. Process CSS markup and build the CSSOM tree
3. Combine the DOM and CSSOM into a render tree
4. Run the layout on the render tree to compute the geometry of each node
5. Paint the individual nodes to the screen

## What code is rendered in the browser?

HTML

## What is the server-side code’s main function?

Server-side code's main function is to interact with permanent storage like databases and files.

## What is the client-side code’s main function?

Client-side code's main function is UI and displaying content to the user.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

2

## How many instances of the server-side code are available at any given time?

1

## What is runtime?

Runtime refers to any library, framework, or platform that your code runs on.

## How many instances of the databases connected to the server application are created?

1
