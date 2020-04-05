---
path: "/blog/so-i-tried-styled-components"
date: "December 17, 2019"
title: "So I tried styled-components"
tags: "CSS in JS"
---

Hello world,

Some time ago, I wanted an excuse to try a `CSS in JS` solution. I settled on [styled-components](https://www.styled-components.com/). Previously my go-to approach was CSS Modules, mostly because that's what the documentation of Create React App mentions when the topic shifts to styling.
And ... I liked them fine. I understand the appeal of having your styles scoped to your component, but to be honest, style conflicts were never my main issue with CSS. I guess that's because when I got started, BEM and Sass were already a thing. And that really is the main problem that CSS Modules solve. One of the major problems that it created, at least in my experience, was dynamically changing styles based on the application's state. I ended up using solutions like this:

```javascript
const isHighlighted = true;

className={`${styles.description} ${isHighlighted ? styles.yellow : ''}`}
```

Sorry for the awfully contrived example.

The verbosity of such an approach really rubbed me the wrong way. Granted, this may well be my own ignorance (there might be a much better solution for this in CSS Modules), but since I was looking to try something new anyway, I decided to branch out.

## My choice, styled-components

I wanted to better understand the ways in which you can use CSS in your React components. This had been a very daunting topic for me since there seem to be so many different choices. So many I won't even bother listing them! It's like Sass vs SCSS vs LESS all over again. In the end, I chose styled-components because I read a blog post from David Gilbertson discussing them and even though he didn't end up using them in his project, I decided to give them a go. I don't know who David Gilbertson even is, but I read one of his posts and it made me laugh. So there you go!

This is how people make decisions. It's scary.

Apart from some initial difficulties with the syntax, I found styled-components to be super-easy and convenient to use, mostly because they reminded me of using SCSS (Welcome back, nested selectors for pseudo-elements!). Although you might have to do some digging in the documentation, rest assured you can do everything with `styled-components` that you could with regular CSS (such as keyframes, media queries). This was very exciting and I was feeling quite blessed.

## The dark middle chapter

So `styled-components` are definitely very cool, but after working with them in even a very small project, I quickly realized that they make me do something that I fundamentally hate: **name things**. `styled-components` make _everything_ into a component. That includes your `div` tags, your `p` tags, and what have you. All these things need names!!

And for what! To have you styles scoped to a component! Need I remind you that BEM exists?

Thats a wrap!
That's it folks! I will post again once I get more familiar with styled-components and discover it's more advanced features. For the moment, they are seving me just fine with their clear and familiar syntax.
