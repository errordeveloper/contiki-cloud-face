# The Cloud Face for Wireless Smart Objects
-------------------------------------------

_This repository is intended to hold all dependencies for any code that is required
to build robust services and interfaces to what's now called "the cloud", also known
as the WWW. The "Smart Objects" are refered to what is often title "wireless sensor
nodes" that leads to the term "Internet of Things". This said to explain why have I
picked such a title - "The Cloud Face for Wireless Smart Objects"._

In terms of what exactly is here, I have started by creating a separate
repository for some of the things that have started to take shape in my
`contiki-projects` repository. So I needed a separate place to put the
JavaScript and Node.js stuff into, as I am intending to work on something
which would integrate with my Contiki projects, however it's probably going
to be a collection of different things.

### Directories:
- `node_modules` -- contain all packages required for Node.js parts

### Installation:

This repository is currently intended to be installed as submodule of
`git://github.com/errordeveloper/contiki-projects.git` as `cloud-face`
in the top-level directory, while `contiki-projects` is intended as
submodule of Contiki tree (as `projects` in top-level directory).
To fetch all of the dependencies, please run `make update`.

### Notes:

I might remove the word Contiki from the title, but it is currently
my favourite OS for those "Smart Objects". Well, if I or anyone else
gets around porting TinyOS to [MC1322x] platform, I could probably
switch over.


[MC1322x]: http://mc1322x.devl.org/

## Parts
--------

### `lib_ui.js`

A small JavaScript to use with tiny web servers, the idea is to pass
a minimum size of HTML code to the browser, point it to a short URL
with JavaScript source and call just one function that will pass a
piece of JSON-formated data to the client which will generate a pretty
page with extra features if desired.


