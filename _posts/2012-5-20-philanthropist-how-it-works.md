---
layout: post
title: 'Philanthropist: How it Works'
description: 'A detailed look at how my Chrome extension, Philanthropist, works.'
---

### Background

First, some background. A few months ago, [The Film Vault](http://tfvpodcast.wordpress.com/), a podcast I listen to regularly, started to use [Amazon Associates](https://affiliate-program.amazon.com/) to generate revenue. In every episode, they'd have a short segment where they asked listeners to click through the Amazon referral link on their site before making any purchases on Amazon. With The Film Vault being a podcast I get much enjoyment out of, I wanted to do my part and comply with their request. However, I quickly realized just about every purchase I make on Amazon is impromptu. A typical scenario for me is to read about an interesting book, google said book, click the result for the Amazon page, and then make my purchase. When things happen that fast, it was very easy for me to forget to click through The Film Vault's referral link before making my purchase.

After a few weeks of this happening over and over again, it dawned on me that I'm a developer and that I could build something to solve this problem. I took a look at how Amazon Associates worked, went through the [developer's guide for Chrome extensions](http://code.google.com/chrome/extensions/devguide.html), and got working on Philanthropist.

### How Amazon Tracks Referrals

A typical URL of an Amazon Associates referral link looks something like `http://www.amazon.com/?_encoding=UTF8&tag=jakehard-20&linkCode=ur2&camp=1789&creative=390957`. It's a URL to an Amazon page (in this case the homepage) that contains some additional GET parameters: `_encoding`, `tag`, `linkCode`, `camp`, `creative`. According to the [Associates Program Link Requirements](https://affiliate-program.amazon.com/gp/associates/help/operating/linking?ie=UTF8&pf_rd_t=501&ref_=amb_link_353005802_6&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=&pf_rd_s=assoc-center-1&pf_rd_r=&pf_rd_i=assoc_operating), the only parameter that is actually needed in order for an associate to receive credit is the `tag` parameter. So for all intents and purposes, a compliant URL could be as simple as `http://www.amazon.com/?tag=jakehard-20`.

After a user clicks through a referral link, if they make a "Qualifying Purchase", the referrer will receive some kickback. What is a "Qualifying Purchase"? Well according to section 7 of the [Associates Program Operating Agreement](https://affiliate-program.amazon.com/gp/associates/agreement?ie=UTF8&pf_rd_t=501&ref_=amb_link_84018271_7&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=&pf_rd_s=assoc-right-1&pf_rd_r=&pf_rd_i=assoc_join_menu):

> ...a “Qualifying Purchase” occurs when (a) a customer clicks through a Special Link on your site to the Amazon Site; (b) during a single Session that customer either (i) adds a Product to his or her shopping cart and places the order for that Product no later than 89 days following the customer’s initial click-through, (ii) purchases a Product via our 1-Click feature, or (iii) streams or downloads a Product from the Amazon Site if the Product is a Digital Product; and (c) the Product is shipped to or streamed or downloaded by, and paid for by, the customer.

### How Philanthropist Works

Whenever you visit a page under the `amazon.com` domain, Philanthropist checks to see if your current session is affiliated with an associate. If it turns out your current session isn't affiliated with an associate, Philanthropist will affiliate your session by adding the `tag` parameter to the URL you are accessing and setting the value of that parameter to the tag ID of the associate you've configured. This will ensure that every time you visit Amazon, any purchase you end up making will result in some kickback being sent to your favorite associate.

The way Philanthropist determines whether or not your session is affiliated is based on the URL you're accessing and the value of the `session-id` cookie for the `amazon.com` domain. If you are accessing Amazon through a URL that contains the `tag` parameter, then obviously your session is affiliated. When you access Amazon through a URL that is missing the `tag` parameter, that's when things get interesting. 

While you have Chrome running and Philanthropist installed, Philanthropist will keep track of all of your Amazon sessions. The way Philanthropist identifies sessions is based on the value of the aforementioned `session-id` cookie. If Philanthropist doesn't recognize the value of the `session-id` cookie, it'll affiliate your session by the means mentioned previously. If Philanthropist recognizes the value of the `session-id` cookie, it'll check to see when your last visit was with this `session-id` and if the last visit was longer than 12 hours ago, Philanthropist will affiliate your session.

A few things to note here. I don't actually know what Amazon uses the `session-id` cookie for. For obvious reasons, I'm assuming they do indeed use it for identifying sessions. It could be the case that they use it for something else, I really have no way of knowing. Either way, it serves its purpose well enough for Philanthropist.

Also, when I say that Philanthropist keeps track of your Amazon sessions, rest assure that there are no privacy issues here. The only information that Philanthropist stores is the session ID (based on the value of the `session-id` cookie), the time of the last visit, and the tag ID of the associate the session is currently affiliated with. Also, none of this information leaves your local machine. Feel free to check the source code available on [GitHub](https://github.com/jharding/philanthropist) if for whatever reason you have privacy concerns.

### Interested in Philanthropist?

If Philanthropist sounds useful to you, you can install it from its [project page](http://thejakeharding.com/philanthropist) or from the [Chrome Web Store](https://chrome.google.com/webstore/detail/gpkiioplcncneimghhimiicknclmlodp).
