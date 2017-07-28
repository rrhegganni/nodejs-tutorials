## Node.js
+ [Introduction](#what-is-nodejs)
+ [Environment set-up](#environment-set-up)
+ [REPL Terminal](#repl-terminal)
+ [Callbacks](#callbacks)
+ [Event loop](#event-loop)
+ [Buffers](#buffers)
+ [Streams and File system](#streas-and-file-system)

### What is Node.js?

  Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v8.1.3

  Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

### Features of Node.js

1. Asynchronous and event driven
2. Very Fast
3. Single Threaded but highly scalable
4. No Buffering

### Where to Use Node.js?

1. I/O bound Applications
2. Data Streaming Applications
3. Real-time Applications
4. JSON APIs based Applications
5. Single Page Applications

***
## Environment set-up
https://nodejs.org/en/

***
## REPL Terminal
+ **Read** − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
+ **Eval** − Takes and evaluates the data structure.
+ **Print** − Prints the result.
+ **Loop** − Loops the above command until the user presses ctrl-c twice.

### REPL Commands
+ **ctrl + c** − terminate the current command.
+ **ctrl + c twice** − terminate the Node REPL.
+ **ctrl + d** − terminate the Node REPL.
+ **Up/Down Keys** − see command history and modify previous commands.
+ **tab Keys** − list of current commands.
+ **.help** − list of all commands.
+ **.save filename** − save the current Node REPL session to a file.
+ **.load filename**
+  − load file content in current Node REPL session.

***
## Callbacks
+ A callback function is called at the completion of a given task.
+ A callback function, also known as a higher-order function, is a function that is passed to another function as a parameter, and the callback function is called (or executed) inside the another function.

***
## Event loop
Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

### EventEmitter Class methods
```javascript
emitter.addListener(event, listener)/emitter.on(event, listener)
emitter.once(event, listener)
emitter.removeListener(event, listener)
emitter.removeAllListeners([event])
emitter.setMaxListeners(n)
emitter.listeners(event)
emitter.emit(event, [arg1], [arg2], [...])
```

***
### Buffers
+ Pure JavaScript is Unicode friendly, does not handle straight binary data very well. (TCP and File system).
+ Buffers are designed to handle raw binary data, each buffer corresponds to some raw memory allocated outside V8. 
+ Buffers act somewhat like arrays of integers, but aren't resizable and integer values are limited to values from 0 to 255
```javascript
var buffer = new Buffer(8);
var buffer = new Buffer([ 8, 6, 7, 5, 3, 0, 9]);
var buffer = new Buffer("I'm a string!", "utf-8")
```
Different Encoding: ascii, ucs2, utf-8, base64

### Buffer Methods
```javascript
var json = buf.toJSON(buf);
var buffer3 = Buffer.concat([buffer1,buffer2]);
var result = buffer1.compare(buffer2);
buffer1.copy(buffer2);
var buffer2 = buffer1.slice(0,9);
buf.length;
Buffer.isEncoding(encoding)
Buffer.isBuffer(obj)
Buffer.byteLength(string[, encoding])
```
***
## Streams and File system
Streams are objects that let you read data from a source or write data to a destination in continuous fashion
1. Readable
2. Writable
3. Duplex
4. Transform

Each type of Stream is an EventEmitter instance,  throws several events at different instance of times
1. Data
2. End
3. Error
4. Finish

### Streams methods
```javascript
Read Stream: fs.createReadStream('input.txt');
Write Stream: fs.createWriteStream('output.txt');
Piping the Streams: readerStream.pipe(writerStream);
```
### File System fs module
```javascript
fs.readFile()
fs.readFileSync()
fs.open(path, flags[, mode], callback)
fs.stat(path, callback)
fs.writeFile(filename, data[, options], callback)
fs.unlink(path, callback)
fs.mkdir(path[, mode], callback)
fs.rmdir(path, callback)
```
***
