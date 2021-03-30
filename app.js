let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //remove last string

secretMessage.push('to', 'Program'); //add two 'to' and 'Program' at the end

var index = secretMessage.indexOf('easily'); //find the index of easily  and replace with right

secretMessage[index] = 'right';

secretMessage.shift(); //remove first string
   
secretMessage.unshift('Programming') //add string at the begging
   
secretMessage.splice(6, 5, 'know'); //replace multiple strings with new one

console.log(secretMessage);


