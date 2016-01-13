My result going through the [Building A Wiki with React and Firebase](https://code.tutsplus.com/courses/building-a-wiki-with-react-and-firebase) tuts+ tutorial. The finished exercise is [here](https://github.com/tutsplus/build-a-wiki-with-react-and-firebase). 

I had one road bump in part 1 or the tutorial. The author has a .bowerrc file that configures his bower to add components to a directory called /public rather than the default /bower_compents directory. Without this configuration all the paths in my code were wrong. I fixed this in my exercise by making a /bowerrc file that simply defined

```
{
	"directory": "public"
}
```

And suddenly I was generating an all.js file in a /public folder just like the author.
