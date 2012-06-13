---
layout: post
category: tutorial
title: 'How to Center Bar Buttons in a Toolbar'
description: 'An iPhone development tutorial displaying how to center bar buttons in a toolbar by using flexible space bar button items.'
keywords: 'iPhone Development, toolbar, buttons, center'
---

### Introduction

I'm currently working on my first iPhone app and I was having trouble figuring out how to center bar buttons in a toolbar. Most things in Interface Builder are straightforward, however I had to do some googling to figure out how to get my bar buttons centered.

### How to Center Bar Buttons in a Toolbar

It turns out centering bar buttons in a toolbar is very simple. All you need to do is add your bar buttons and then use flexible space bar button items to center them.

#### Step 1: Add Bar Buttons to Your Toolbar

Assuming you've already added a toolbar to the view you're working with, drag however many bar buttons you want to that toolbar from the utility area.

<figure>
    <img src='/public/img/posts/2012-6-11-center-bar-buttons-in-toolbar/uncentered.png'>
    <figcaption>Toolbar with uncentered bar buttons.</figcaption>
</figure>

#### Step 2: Add Flexible Space Bar Button Items

Now you need to center the bar buttons you've added. Add 2 flexible space bar button items to your toolbar. Place one before your first bar button and place the other after your last bar button. The bar buttons in your toolbar should now be centered.

<figure>
    <img src='/public/img/posts/2012-6-11-center-bar-buttons-in-toolbar/centered.png'>
    <figcaption>Toolbar using flexible space bar button items to center bar buttons.</figcaption>
</figure>

### Comments

Like I mentioned earlier in this post, I'm new to iOS development. If there is a better way to do this, leave a comment or contact me and I'll update this post accordingly.
