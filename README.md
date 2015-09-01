# blog-template

## Installation

* `sudo apt-get install ruby-full rubygems-integration` 
* `gem install jekyll`
* `sudo npm install -g bower`

## Git

* `git clone git@github.com:<username>/blog-template.git blog`
* `git clone -b gh-pages git@github.com:<username>/blog-template.git blog-gh-pages`

### To save the blog
* `cd blog`
* `git add -A`
* `git commit -m "Blog save"`
* `git push`

### To publish the blog
* `cd blog-gh-pages`
* `git add -A`
* `git commit -m "Blog pusblish"`
* `git push`


## Jekyll and grunt
All of this is from the blog folder.

### Local test
`jekyll serve` and then go to http://127.0.0.1:4000/

### Build 
When you add new dependencies :
`grunt build:dev`

To build for publishing :
`grunt build:dist --force` and then check the result at http://127.0.0.1:8282/
