---
layout: post
title: 'Building thejakeharding.com'
description: "An overview on why I built thejakeharding.com and the technology behind it."
keywords: 'thejakeharding.com, Jekyll, Bootstrap, RYB'
---

### Why I Built thejakeharding.com

It's been a while since I've had a personal site/blog. I built a custom WordPress site for myself 4ish years ago when I was just getting started with web development, but after forgetting to renew my domain name (That was a bad decision, I want jakeharding.com back.), I took the site down as it wasn't doing much for me. Fast-forward to today and I keep finding myself wanting to write about the side-projects I'm working on and different ideas I have. In order to scratch that itch, I needed somewhere I could blog and that's how thejakeharding.com came about.

A big reason why I created thejakeharding.com is to [increase my luck surface area](http://www.codusoperandi.com/posts/increasing-your-luck-surface-area). I'm hoping that every once in a while I'll write a compelling blog post that will ring the bell on Hacker News. In my opinion, that's a great way for me to make new connections, promote my side-projects, and in general, just get my name out there. Ringing the bell on Hacker News won't be easy and I don't expect to do it often, if ever. I have nothing to lose though, so expect to see submissions from me on Hacker News every now and then.

### How thejakeharding.com was Built

When I decided to build a personal site a few weeks back, I knew right away I wanted it to be static. I hate complexity and I wanted to keep this site as simple as possible. That meant no WordPress or any other traditional CMS. I decided to build this site using a static site generator and initially I was leaning towards using [Blacksmith](http://blacksmith.jit.su/all-pages). However, after reading up on the different static site generators out there, [Jekyll](https://github.com/mojombo/jekyll) stood out as the best option for me. It was a very mature project and being able to host my site for free on GitHub was a big plus.

Following the [GitHub Pages Documentation](http://help.github.com/pages/), I created [jharding.github.com](https://github.com/jharding/jharding.github.com) and used [Jekyll Bootstrap](http://jekyllbootstrap.com/) to give me some boilerplate code to work with. I quickly figured out that Jekyll was simple enough to the point where I didn't need to any boilerplate code, so I ditched Jekyll Bootstrap and started from scratch.

After ditching the boilerplate code, it only took me about 12 hours to design and implement the entire site (Hopefully it doesn't show.). I used [Bootstrap](http://twitter.github.com/bootstrap/) for my baseline styles, but I made sure I added enough personal touch so that it didn't look like a generic Bootstrap site. Too many sites I see nowadays just use the default styling provided by Bootstrap and they don't do anything to separate themselves from the pack (If you're going to use the navbar, at least change the colors.). Needless to say I can't stand those sites. I think I actually prefer the days before Bootstrap where, while there were a lot of ugly sites, at least they were unique.

Whenever I'm working on a project, choosing colors is usually the part I struggle with the most somehow. Luckily, a few months back I ran across a neat little utility named [RYB](http://afriggeri.github.com/RYB/) on GitHub. Using RYB, I was able to generate a whole bunch of unique colors and then I picked the ones that stood out to me. I'll most likely play with the colors for the foreseeable future, but I'm happy with the initial colors I've chosen. 

All-in-all I'm pretty happy with how the site turned out. I'll definitely be tweaking the site over the next few weeks, but even so, this initial version has exceeded my (albeit low) expectations. It'll be a good home for my random musings and will hopefully lead to some exposure for my projects. I have a few ideas for blog posts that I'll write over the upcoming months and while they might not be front page of Hacker News worthy, they should be interesting nonetheless. Stay tuned.
