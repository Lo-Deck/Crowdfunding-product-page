# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked


### Screenshot

![screenshot desktop](https://github.com/Lo-Deck/Crowdfunding-product-page/blob/main/screenshot/Crowdfunding%20product%20page-desktop.png).
![screenshot desktop-menu](https://github.com/Lo-Deck/Crowdfunding-product-page/blob/main/screenshot/Crowdfunding%20product%20page-desktop-menu.png).
![screenshot desktop-confirm](https://github.com/Lo-Deck/Crowdfunding-product-page/blob/main/screenshot/Crowdfunding%20product%20page-desktop-confirm.png).
![screenshot mobile](https://github.com/Lo-Deck/Crowdfunding-product-page/blob/main/screenshot/Crowdfunding%20product%20page-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Crowdfunding-product-page/blob/main/screenshot/Crowdfunding%20product%20page-mobile-menu.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Crowdfunding-product-page).
- Live Site URL: [Website](https://lo-deck.github.io/Crowdfunding-product-page/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to switch between two menu using `:target`, display different page with `classList.toggle('hidden') and transfer information to modificate the data.

Modificate `<svg>` when you click on it with `innerHTML`.

Finally reach parent and child nodes.


```js

arraySelect[i].firstElementChild.firstElementChild.classList.add('button-project-click');

arraySelect[i].firstElementChild.childNodes[3].style.color = '#3CB3AB';

arraySelect[i].parentElement.style.border = '0.15rem #3CB3AB solid';

```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
