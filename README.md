# blog
A blog for Apisit Lee.

It is designed like a `terminal` that you input commands to do something. There are some basic commands and grammar for you to use it.

address: [小白Lee爱喝大白梨](http://hxlee.github.io/blog)

## BASIC GRAMMAR
Let prefix equals to `geeky`. Then:

There are several styles of command rows: 

> * geeky keyword
> * geeky keyword mark(s)
> * geeky set keyword status

### geeky keyword
```
Commands without arguments. Such as __geeky -version__, it's only a command row that returns the version of the site.
```

### geeky keyword mark(s)
```
Commands with arguments. Such as __geeky -help 'menu'__, it will return the help document for 'menu'; Well, like **help**, some keywords has two using styles: with mark(s) or without marks.

For example, with `geeky help 'menu'` you can get help document about 'menu'; with `geeky help` you can get a summary of help.
```

### geeky set keyword status
```
You could set status of some certain object. For example, you could set an article named 'hello world' `readonly` or `writable`, with `geeky set 'hello world' readonly` or `geeky set 'hello world' writable`; N.B. Once you set an object to a `readonly` or `writable` status, it will treate the object as an article title by default.
```