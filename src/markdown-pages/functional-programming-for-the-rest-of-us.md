---
path: "/blog/functional-programming-for-the-rest-of-us"
date: "December 12, 2019"
title: "Functional programming for the rest of us"
tags: "JavaScript;CodeWars;Functional Programming"
---

I don't quite remember when I first heard about functional programming. I do remember when I understood why it's useful. That was on ... oh wait, that has not happened yet. But I think I maybe a tad bit closer to understanding its usefulness than I was a few months ago.

<!-- end -->

So if you - like I used to - think that functional programming is elitist, obtuse bullshit, strap in as I try to explain some (like 0.00001%) aspects of it that might help you become better. Full disclosure, this is _from_ a beginner, to _other beginners_.

## Rethinking what is state

So ... let's talk about state. [The root of all evil](https://www.reddit.com/r/programming/comments/1s8m6d/why_shared_mutable_state_is_the_root_of_all_evil/). If you have worked on the front-end, you probably have had to manage some kind of state at some point. It doesn't have to be React or Redux or anything else fancy, it might have been something super simple. Like a slide-out navigation menu. You would have some button in your UI that opens it when its closed and closes it when its open. To know what you need to do when, you need to keep track of state.
To do this, maybe you have a global variable. Something like this:

```javascript
var menuIsOpen = false
var buttonDOMElement = document.querySelector(".js-button")
buttonDOMElement.addEventListener("click", function(e) {
  if (menuIsOpen) {
    // Open menu
    menuIsOpen = true
  } else {
    // Close menu
    menuIsOpen = false
  }
})
```

There is a good chance that at some point you forgot to change the state manually (or shall we say, _imperatively_) when some action was triggered or typed the state value wrong updating it. When you found the error, you probably didn't think much of it. I certainly didn't when I was building stuff this way. I just thought that it was an isolated case, blamed myself for being stupid, and moved on.
If you have had to build more complex state, however, you know that the variables and exceptions and edge cases involved can very quickly grow out of control. This is pain, but this pain is important. It leads to growth.

## A different kind of state

To demonstrate what I mean, I will use this CodeWars Kata, [Count letters in string](https://www.codewars.com/kata/count-letters-in-string/javascript). Basically, you need to find the _unique lowercase_ letters in a string and return an object where each of those letters is a key and its value is how many times it occurs.

Official example:

```
letter_count('arithmetics') #=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
```

Let's think about what we need to do. We need to:

```
make sure string is all lowercase
for each letter in string:
  add a key in an object for that letter
  check how many occurences of that letter there are in the strin
```

A few months, I would've solved it like this:

```javascript
function letter_count(str) {
  var lowercasedStr = str.toLowerCase()
  var strAsArray = lowercasedStr.split("")
  var result = {}
  strAsArray.forEach(function(letter) {
    if (result[letter]) {
      result[letter] += 1
    } else {
      reuslt[letter] = 1
    }
  })
  return result
}
```

I take the string, lowercase it, and make it an array. Then, for each letter, I check if I already have an appropriate key. If I do, I increment its value by one. Otherwise, I set its value to 1.

This is all well and good, but notice how much _state_ there is. What state, you say? I certainly would have. I never considered variables like `result`, `lowercasedStr`, and `strAsArray` as state. In this example, its manageable, but imagine you need more steps. The more code you write, the likelier it is you make a mistake. Plus! My god, the names! All of these variables need **names**. And naming is _hard_. So let's try and do our best to eliminate as much state as we can. This is the best that I can at the moment:

```javascript
function letterCount(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((result, currentLetter) => {
      return {
        ...result,
        [currentLetter]: str
          .toLowerCase()
          .split("")
          .filter(char => char === currentLetter).length,
      }
    }, {})
}
```

Note that on CodeWars, I have written it as follows, because the spread operator is not supported:

```javascript
function letterCount(s) {
  return s
    .toLowerCase()
    .split("")
    .reduce((result, currentLetter) => {
      result[currentLetter] = s
        .split("")
        .filter(char => char === currentLetter).length
      return result
    }, {})
}
```

Turns out that JavaScript has a lot of useful array methods that let you do lots cool stuff like this. This could probably be written in a way that uses even less state, but this is good enough for me at the moment. I hope that you found this useful and will think about how you can be more efficient or clear when you need to do some kind of data transformation. Maybe next time I'll write about [Ramda, an awesome library with loads of functions for when vanilla JS isn't enough](https://ramdajs.com/).
