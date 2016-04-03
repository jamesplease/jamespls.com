# jmeas.com

This is the source code of my personal site,
[http://jmeas.com](http://www.jmeas.com).

### Technical Details

It's hosted for free on [GitHub Pages](https://pages.github.com/). The
domain was registered through [Namecheap](http://www.namecheap.com/).

The tools used for this site are:

- [Jekyll](https://jekyllrb.com/) for HTML templating
- [Stylus](http://stylus-lang.com/) for (very minimal) CSS preprocessing
- [Gulp](http://gulpjs.com/) for (very minimal) tasks, like building the CSS
- [npm](https://www.npmjs.com/) for managing most dependencies

### Developing

#### Initial Set Up

You'll only need to do these steps a single time.

Make sure that you have all of the [prerequisites](#prerequisites) installed.

Once you do, clone the repository. Then, run `npm install` from the root
directory.

#### Running the Site

Run `npm run jekyll` to start the Jekyll server. Changes made to the site
will automatically cause the Jekyll server to reboot.

Open a new terminal and run `npm run work`. This will build the Stylus, then
start a watcher that will automatically build the stylus for you when you
make changes. Note that the page **will not** automatically refresh once
the stylus builds. You will need to manually refresh (for now).

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/)
- [Jekyll](https://jekyllrb.com/)
- [npm](https://www.npmjs.com/)
