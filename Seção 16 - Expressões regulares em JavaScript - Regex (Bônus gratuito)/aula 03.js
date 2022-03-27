const arquivos = [
    'arquivo.jpg',
    'arquivo.JPG',
    'arquivo.jpeg',
    'arquivo.JPEG',
  ]
  
  const expReg = /\.(jpe?g)/gi
  
  arquivos.map(arquivo => console.log(arquivo.match(expReg)))