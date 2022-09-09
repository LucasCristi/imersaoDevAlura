let listaDeFilmes = ["https://i.pinimg.com/564x/04/40/8f/04408fbd3b331dd1ede8cd1de7280840.jpg",
   "https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg",
   "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/47/20224867.jpg",
   "https://i.pinimg.com/564x/11/db/01/11db017418d081c89e3b396204e12f09.jpg",
   "https://i.pinimg.com/564x/53/8c/56/538c56de7726c6109640f410e55b2a30.jpg",
   "https://i.pinimg.com/564x/b3/21/61/b32161a774c9abffb99e47a5eda374d6.jpg",
   "https://i.pinimg.com/564x/ab/b6/b4/abb6b4ab67c373d430fa13a7979a2774.jpg",
   "https://i.pinimg.com/564x/3b/5c/31/3b5c314ae9f7ba99b20b451bf2aeb81b.jpg",
   "https://i.pinimg.com/564x/cd/5e/28/cd5e286a0af2cf3a2a82a04d37bfd575.jpg",
   "https://i.pinimg.com/564x/51/a1/bb/51a1bb23404715bd23ba9440977fc98a.jpg",
   "https://i.pinimg.com/564x/75/8d/54/758d542bbdaabc02a5da530d460be0f5.jpg",
   "https://i.pinimg.com/564x/e2/eb/59/e2eb59d7a2cba139933ed45cc862e201.jpg",
   "https://i.pinimg.com/564x/a7/7b/f2/a77bf28fb4751ea810882393d74d81da.jpg",
   "https://i.pinimg.com/564x/4d/ab/cf/4dabcf824a00ebb9093127d1179a794c.jpg",
   "https://i.pinimg.com/564x/68/87/94/68879499d5de4a907f0d568048c23e87.jpg"

]

let listaDeTrailers = ["https://www.youtube.com/watch?v=-xg-FkPtLag",
   "https://www.youtube.com/watch?v=2y1Jwwbo1r4",
   "https://www.youtube.com/watch?v=Q1e2oDAJIIk",
   "https://www.youtube.com/watch?v=SDnYMbYB-nU",
   "https://www.youtube.com/watch?v=OPVWy1tFXuc",
   "https://www.youtube.com/watch?v=iVAgTiBrrDA",
   "https://www.youtube.com/watch?v=m-CvfthZ4zg",
   "https://www.youtube.com/watch?v=9fIObnIGMlI",
   "https://www.youtube.com/watch?v=7ZBh_-Aa0Bk",
   "https://www.youtube.com/watch?v=ge_KJc0Ghsk",
   "https://www.youtube.com/watch?v=0aYv3taYoro",
   "https://www.youtube.com/watch?v=Tbv2Al6LGW8",
   "https://www.youtube.com/watch?v=wgkHfUaG1nI",
   "https://www.youtube.com/watch?v=cWM4ybHYox4&list=PLqiCl1NMF6G6gyuInkG1Anb_5YQFF3Qok",
   "https://www.youtube.com/watch?v=XS3fRKaapKY"

]



for (let indice = 0; indice < listaDeTrailers.length; indice++) {
   
   for (let indice = 0; indice < listaDeFilmes.length; indice++) {
      document.write("<a href=" + listaDeTrailers[indice] + ">")
      document.write(" <img src=" + listaDeFilmes[indice] + "></a>")
      
   }
   break;
} 



