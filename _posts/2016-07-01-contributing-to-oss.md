---
layout: post
title:  "Contributing to OSS While Remaining Productive"
author: James Smith
date:   2016-07-01 10:00:00
categories: javascript
share_text: "jmeas.com – Contributing to OSS While Remaining Productive"
---

Sometimes when I'm considering using an open source library in a web app, I realize
it doesn't support my specific use case. I don't always know how to fix the
problem, but when I do I like to contribute back to improve the project. However, contributing
to open source takes time, which often conflicts with the need to meet deadlines.

This happened to me recently with the library
[react-waypoint](https://github.com/brigade/react-waypoint). I wanted to use it
in an application at work, but it needed a slight tweak.

I felt confident that I knew how to make the change, but I didn't know if it would
land in a stable version of the library in a week, or a month. I also just wanted to finish the feature that
I needed the library for.

In this case, I forked the project on GitHub and made the update to the code. Through [a
brief conversation](https://github.com/brigade/react-waypoint/issues/77) in the
issues, I knew the maintainer would be interested in
merging it into the project. So I opened
[a PR](https://github.com/brigade/react-waypoint/pull/94), which kicked off what
ended up being a 3 week long review process.

But I didn't wait 3 weeks to use the code in my app. The moment I had a working
version ready, I pushed it to GitHub. Then, I copy and pasted the built source from my commit into my app. To explain
the file, I included a big comment at the
top that had:

1. a link to the original project
2. why the app wasn't able to use a stable release, with a link to the issue explaining the feature that was missing
3. a link to my open PR on the project
4. a reference to the commit that the copy + pasted file came from

If you're using an issue tracker, opening an issue there is a good idea, too.

Providing context around why you're using a non-stable release is
important. It can be difficult to move away from it without any reason as to
why an arbitrary commit was used in the first place. I like to think that if I
hadn't been able to follow through with moving to a stable release, that another
developer after me would have had the information she needed to do so.

If copy and pasting feels too gross to you, well, I completely understand. In the past, I've also installed
[from GitHub URLs](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies),
referencing a specific SHA.
The reason I went with the copy and paste approach in this situation is that SHAs, to me, are
questions. When I see them, I ask myself: can I upgrade the SHA to a stable
release at this time? If not, under what conditions can I upgrade? SHA URLs
don't answer these on their own, and package.json files [don't really support comments](http://stackoverflow.com/questions/14221579/how-do-i-add-comments-to-package-json-for-npm-install/14221781#14221781).

Anyway, once the react-waypoint PR eventually got merged, a quick commit to
my app got rid of the copy and pasted version.

In this situation, everything went fairly smoothly, but it doesn't
always go that way. If the library maintainer never responds,
or if they decide to not merge the changes, then I consider maintaining
a fork of the library. This is a last resort solution, as I prefer to avoid
fragmentation, but occasionally it's the best way forward.

One thing to keep in mind is it can be easy to deprioritize moving off of an arbitrary
commit of a library, especially when the feature your app needs is working. But it's
worthwhile to follow through and migrate to a stable release to get all of the
benefits of using a package
manager.

In summary, I try not to feel blocked by getting changes released in an
upstream dependency. If I put in the time to make the change, then I do what I
can to get the code in my app so that I can keep working.
