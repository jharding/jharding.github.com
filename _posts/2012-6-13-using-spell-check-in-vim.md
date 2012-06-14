---
layout: post
category: tutorial
title: 'Using Spell Check in Vim'
description: 'A quick guide on how to use spell check in Vim.'
keywords: 'Vim, spell, spell check, dropbox, spellfile'
---

### Introduction

Vim has been my editor of choice for almost 4 years and yet I'm still constantly learning about new features. A feature I've recently stumbled across is spell check and I recommend learning how to use it. Using spell check within Vim is a great way to ensure your comments are high quality and it's a killer feature if you do a lot of your writing in Vim like I do. The goal if this post is to provide a simple guide for getting started with spell check in Vim.

### Configuring Spell Check

Before you start using spell check, you'll want to configure some options in your .vimrc.

{% highlight vim %}
set spelllang=en
set spellfile=$HOME/Dropbox/vim/spell/en.utf-8.add
{% endhighlight %}

The way Vim does spell checking is by cross-referencing the words in the file you're editing with different word lists. You'll want to configure what word lists Vim uses in order to get the most out of spell check. The `spelllang` option should be set to the names of the word lists you want Vim to use. Since I speak English, I set it to `en`. If you're curious as to how Vim figures out the path of the word list that corresponds to `en`, read the [spell-load section](http://vimdoc.sourceforge.net/htmldoc/spell.html#spell-load) from the [spell check documentation](http://vimdoc.sourceforge.net/htmldoc/spell.html). 

The `spellfile` option should be set to the path of your spellfile. I'll explain what a spellfile is in the next section, but for now you should know that you don't actually need to configure this option. The only reason I configure it is so I can keep my spellfile in sync across the different machines I work on. I'll also touch on this again in a later section.

### Using Spell Check

By default, spell check will be off. If you want to turn it on, run `setlocal spell` in the Vim command line (if you want spell check to always be on, add `set spell` to your .vimrc). After turning spell check on, misspelled words will now be highlighted. To move your cursor to the next misspelled word, enter `]s`. To move your cursor to the previous misspelled word, enter `[s`.

Most likely, the word lists you configure with the `spelllang` option won't contain some common words you use, thus causing them to be marked as misspelled. Luckily, you can mitigate this issue by adding these words to your spellfile. Your spellfile is a personal word list you can add words to on the fly. To mark a word as good and add it to your spellfile, move your cursor to the word and enter `zg`. 
### Syncing Your Spellfile Across Multiple Machines

In the code snippet I provided for configuring spell check, you might have noticed that I set `spellfile` to a path in my Dropbox folder. The reason I do this is because I like to keep my spellfile synced across all of the machines I work on. If I add a word to my spellfile on my work machine, I want that to be reflected on my personal machine. If you do work on more than one machine, I highly recommend using Dropbox to keep your spellfile synced across them all.

Note that the name of your spellfile must end in `.{encoding}.add` where `{encoding}` is the character encoding of the file.

### Further Reading 

There are plenty of other neat things you can do with spell check, but they fall outside the scope of this post. If you're interested in learning about what else you can do, give the [spell check documentation](http://vimdoc.sourceforge.net/htmldoc/spell.html) a read. 
