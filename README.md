# IP Adress Tracker

## Overview

This is a little challenge from [Frontend Mentor](__https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0__), but I have modified this project and done it on my own.

IP Address Tracker is a very simple and clear web-app, which will help you find the location of your Internet provider.
Moreover, there's also a little map with a pin to show the location. 

## Usage

Usage is very simple. You only need to fill out a field with the address and then click a black button (or just press enter).
**Only IPv4 addresses are accepted!** If an address is invalid you will see the error.

**There are some examples of IPv4 and IPv6 IP addresses:**
 * IPv4: 01.102.103.104 
 * IPv6: 2001:db8:3333:4444:5555:6666:7777:8888


## Components and functions


# helpers folder:

There are some files with js modules. Here you can find an async request (__get_adress.mjs__), a validation module (__validationIp.mjs__), and two modules with leaflet.js modifications: __add_offset.mjs__ help with the stabilization of the location pin. __add_tile_layers.mjs__ adds map with coordinate and set zoom. There also is
an index.js file, which connects all modules to one file by using a facade pattern.

# css and scss folder + gulpfile.js:

This trio helps with the compilation scss to css. It works with gulp. You can use `gulp sass-compile` and `gulp watch` commands in your console. The first one starts the compilation and the second one makes the compilation continuous.
You can learn how `gulp-sass` works in its documentation, just by following this link: __https://www.npmjs.com/package/gulp-sass__

# design folder:

There you can find a template with a mobile adaptive version.

# script.js:

The main script starts with an import declaration from __helpers/index.mjs__. Next, there are declarations of the global variables, and event listeners adding. After these, you can see two functions that set an opacity and point-events to error modal windows.

After that, we have to deal with IP address verification and if it's valid, with function, which gets info about our IP address [from geoapify](https://www.geoapify.com) (function with fetch is in get_adress module). Then, in the `handleKey()` function we add the "enter" key as a search button.

In the `updateData()` function we have our IP information fields updated with data we got from the server (there are some DOM manipulations). 

Lastly, we have some functions that set a custom pin from the "images" folder offset for our map to center this pin.


