# Coding Style Overview

## Directory Structure
I like to have my directory structure broken out by files type. See below for the breakout and descriptions:

<pre>
<h3>Components:</h3>This directory contains any reusable components to be used inside of pages. Some React projects have two types of components: composed and complex. Typically, my components directory consist of composed components, and anything simpler are components usually from Bootcamp or Material UI. Any components that get's reused over and over again as the project grows will be moved into a homegrown external library

<h3>Constants:</h3>Any and all static text is contained inside of the constants directory

<h3>Contexts:</h3>All state data that is applicable to all components is store inside of this directory. Typically, I try to avoid so much usage of context unless necessary. A good use of context would be switching between light/dark themes

<h3>Hooks:</h3>Any hooks outside of the react library are stored here

<h3>Pages:</h3>Pages are simply the screens inside of your application. It consists of data, composed, and simple components which makes up the entirety of the frontend experience

<h3>Services:</h3>All functionality related to fetching/mutating data from an external data store is kept in this directory. I like to further break it down by domain, and inside each domain are files for queries, mutations, fetch/axios calls, and a top level index file.

<h3>Styles:</h3>All top level styles are stored in this directory. Anything component specific or small will either be inline css or included in the components folder. I try to keep styles as simple as possible by leverage existing ui frameworks such as Material-UI or Bootstrap, and in some cases, a home grown UI library.

<h3>Tests:</h3>This ones self-explanatory! All tests, whether they are snapshot or unit test should go in this directory.

<h3>Types:</h3>All Typescript interfaces and types belong in this directory. It is a recent pivot of mine to store types at a higher level outside of the components, but I'm liking it so far!

<h3>Utils:</h3>Any specialty functionality unrelated to rendering a component, and not directly hitting an api is stored here.
</pre>

