# blog-template

## Installation

* `sudo apt-get install ruby-full rubygems-integration` 
* `sudo gem install jekyll`
* `sudo apt-get install nodejs npm`
* `sudo npm install -g coffee-script`
* `sudo npm install -g grunt-cli`
* `sudo npm install -g bower`
 
You may need to run the command `ln -s /usr/bin/nodejs /usr/bin/node` if you have the error `/usr/bin/env: node: No such file or directory` when running grunt or bower.
https://github.com/nodejs/node-v0.x-archive/issues/3911

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

### Build

`npm install`

When you add new dependencies :
`grunt build:dev`

To build for publishing :
`grunt build:dist --force` and then check the result at http://127.0.0.1:8282/

### Local test
`jekyll serve` and then go to http://127.0.0.1:4000/
