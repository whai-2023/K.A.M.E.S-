exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('whatever')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('whatever').insert([
        { 
          id: 1, 
          name: 'Turtle', 
          power: 0.0001,
          image: 'https://i.makeagif.com/media/3-24-2019/iWrPAL.gif',
        },
        { 
          id: 2, 
          name: 'Random farmer', 
          power: 5,
          image: 'https://derpicdn.net/img/2018/7/17/1782692/full.gif',
        },
        { 
          id: 3, 
          name: 'Krillin', 
          power: 206,
          image: 'https://media.tenor.com/FMwxkFJ8GrsAAAAC/dragon-ball-z-krillin.gif',
        },
        { 
          id: 4, 
          name: 'Yajirobe', 
          power: 970,
          image: 'https://i.gifer.com/6qi3.gif',
        },
        { 
          id: 5, 
          name: 'Raditz', 
          power: 1200,
          image: 'https://i.gifer.com/8SO9.gif',
        },
        { 
          id: 6, 
          name: 'Yamcha', 
          power: 1480,
          image: 'https://media.tenor.com/NID_xjW_4f4AAAAC/yamcha-dragon-ball.gif',
        },
        { 
          id: 7, 
          name: 'Gohan', 
          power: 1500,
          image: 'https://media.tenor.com/9mgyJNYD0asAAAAM/masenko-gohan.gif',
        },
        { 
          id: 8, 
          name: 'Piccolo', 
          power: 8000,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD4QjTw7HsTN_Fn_qkzfRYJVxrD3Sd2gXqu1cwxZO&s',
        },
        { 
          id: 9, 
          name: 'Vegeta', 
          power: 15000,
          image: 'https://media0.giphy.com/media/thZQwkCyXSmelSTWru/giphy.gif',
        },
        { 
          id: 10, 
          name: 'Freeza', 
          power: 27000,
          image: 'https://media.tenor.com/CS1j5a0zdoYAAAAC/dragon-ball-super-frieza.gif',
        },
        { 
          id: 11, 
          name: 'Cell', 
          power: 35000,
          image: 'https://media.tenor.com/kSG6wADyT64AAAAd/cell-dragon-ball.gif',
        },
        { 
          id: 12, 
          name: 'Majun Buu', 
          power: 40000,
          image: 'https://media1.giphy.com/media/X7AyECOiI0ds4/200w.gif?cid=6c09b952k7utdlnbdx3m1z7uz8ec10t7fthyc0aunhy2i2l5&ep=v1_gifs_search&rid=200w.gif&ct=g',
        },
        { 
          id: 13, 
          name: 'Goku', 
          power: 45000,
          image: 'https://gifdb.com/images/high/dragon-ball-z-goku-warm-up-piunlli97jndx6wg.gif',
        },
      ])
    })
}
