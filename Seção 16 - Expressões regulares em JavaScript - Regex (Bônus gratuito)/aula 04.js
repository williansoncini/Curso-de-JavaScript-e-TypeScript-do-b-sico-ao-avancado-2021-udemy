const html = '<p>Olá mundo!</p> <p>Olá denovo</p>'

console.log(html.match(/<.+>.+<\/.+>/g)) //greedy - ['<p>Olá mundo!</p> <p>Olá denovo</p>']
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy - ['<p>Olá mundo!</p>', '<p>Olá denovo</p>']