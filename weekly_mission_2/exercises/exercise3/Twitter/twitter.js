class User {
    constructor(user, username, bio, age) {
      this.user = user;
      this.username = username;
      this.bio = bio;
      this.age = age;
    }
    getUser() {
      return `El usuario ${this.user} usa ${this.username} como su username`
    }
    getBio() {
      return `Esta es la biografia de ${this.username}: ${this.bio}`
    }
  }
  const myUser = new User("Daniel Hernandez", "iamDaniHdz", "Hola a todos, tengo 20 años, estoy estudiando en la Universidad Virtual del Estado de Guanajuato, mis pasatiempos favoritos son escuchar musica, tocar la guitarra, pintar y ver peliculas", 20)
  console.log("\n")
  console.log(myUser)
  console.log(myUser.getUser())
  console.log(myUser.getBio())
  
  class TrendingTopic {
    constructor(title, label, ranking) {
      this.title = title;
      this.label = label;
      this.ranking = ranking;
    }
    getTrendingTopic() {
      return `${this.title} es trending topic en el rango ${this.ranking} sobre la tematica ${this.label}`
    }
  }
  const myTrendingTopic = new TrendingTopic("QATAR 2022", "deportes", 30)
  console.log("\n")
  console.log(myTrendingTopic)
  console.log(myTrendingTopic.getTrendingTopic())
  
  class Hashtag {
    constructor(title, amount_of_tweets) {
      this.title = title;
      this.amount_of_tweets = amount_of_tweets;
    }
    getHashtagInfo() {
      return `El hashtag ${this.title} tiene ${this.amount_of_tweets} tweets`
    }
  }
  const myHashtag = new Hashtag("#noticias", 345)
  console.log("\n")
  console.log(myHashtag)
  console.log(myHashtag.getHashtagInfo())