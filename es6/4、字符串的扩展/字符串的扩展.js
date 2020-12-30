var s = 'aa';

s.charCodeAt(0)
console.log(s.length,s.charAt(0),s.charAt(1),s.charCodeAt(0),s.charCodeAt(1).toString(16))
console.log(String.fromCodePoint(0x20BB7),String.fromCodePoint(97))
let a = 'hello world!';
console.log(a.includes('o'),a.startsWith('hello'),a.endsWith('d!'))
console.log(a.includes('hello',6),a.startsWith('hello',6),a.endsWith('hello',5))
console.log('x'.padEnd(5,'ab'));
console.log('x'.padEnd(4,'ab'));
console.log('x'.padStart(4,'ab'));
console.log('x'.padStart(5,'ab'));
console.log('xxx'.padStart(2,'ab'));
console.log('xxx'.padStart(5));
let aa = 21,b=2;
console.log(String.raw`hi${2+3}!`)
