---
layout: sfml
title: Time
---

Time is handled by `sf::Time`.
It can be seen as some sort of abstract data type that is interacted with through our ususal units of time.
For example, `sf::Time` can be created from a number of builtin functions such as:

```cpp
sf::Time sf::Time::Time();              // Creates time with value 0
sf::Time sf::Time::seconds(float);      // Creates time from seconds
sf::Time sf::Time::milliseconds(Int32); // Creates time from milliseconds
sf::Time sf::Time::microseconds(Int64); // Creates time from microseconds
```

Similarily, `sf::Time` can be converted back into a numeric value:

```cpp
float sf::Time::asSeconds();      // Converts a Time to seconds
Int32 sf::Time::asMilliseconds(); // Converts a Time to milliseconds
Int64 sf::Time::asMicroseconds(); // Converts a Time to microseconds
```

`sf::Time` also has overloads for all the typical binary operators (comparison, math, math assignment)

----

Measuring time is handled by `sf::Clock`.
Rather than a clock, `sf::Clock` acts more like a stopwatch.
When created, it immediately starts running.
Then, the elapsed time can be seen at any moment.
Then, the `sf::Clock` can also be reset to 0 at any time.

```cpp
sf::Clock sf::Clock();                 // Starts a clock
sf::Time  sf::Clock::getElapsedTime(); // Returns the elapsed time
sf::Time  sf::Clock::restart();        // Returns the elapsed time then resets the clock
```