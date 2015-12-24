Savage Camera
=============

**Important note**: this is beta software, and the API is subject to change without warning. We will try to maintain semantic versioning when function calls change, so your code should remain functional, but the library itself is expected to rapidly evolve as we improve it. This code is written in ES2015, and you may need Babel or another transpiler to run it in your browser.

Savage Camera is a simple module for manipulating the ``viewBox`` attribute of an embedded SVG element. The module returns the ``Camera`` constructor, which takes the target SVG as its argument. Once constructed, a Camera instance has the following methods:

* ``pan(to, duration = 1000, [callback], [done])`` - Animates a camera movement to coordinates specified by the ``to`` argument, in the form of an object with "x", "y", "width", and "height" properties. The ``callback`` parameter will be called on each step, if you need to hook into the animation. ``done`` will be called once the pan completes.
* ``zoomTo(element, padding = 20, duration = 1000, [callback], [done])`` - Wrapper for ``pan`` that takes an element (or query string for an element) as its target, and can add padding to the resulting view box.

Savage
------

Other utilities in the Savage family include:

* `Savage Query <https://github.com/seattletimes/savage-query>`_ - a jQuery-like abstraction layer for dealing with SVG DOM.

