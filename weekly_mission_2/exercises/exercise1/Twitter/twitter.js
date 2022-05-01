const user = {
    user: "Daniel Hernandez",
    username: "iamDaniHdz",
    bio: "Hola a todos, tengo 20 años, estoy estudiando en la Universidad Virtual del Estado de Guanajuato, mis pasatiempos favoritos son escuchar musica, tocar la guitarra, pintar y ver peliculas",
    age: 20,
    getUser: function () {
        return `El usuario ${this.user} usa ${this.username} como su username`
    },
    getBio: function () {
        return `Esta es la biografia de ${this.username}: ${this.bio}`
    }
}
console.log("\n")
console.log(user.getUser())
console.log(user.getBio())

const trending_topic = {
    title: "QATAR 2022",
    label: "deportes",
    ranking: 30,
    getTrendingTopic: function () {
        return `${this.title} es trending topic en el rango ${this.ranking} sobre la tematica ${this.label}`
    }
}
console.log("\n")
console.log(trending_topic.getTrendingTopic())

const hashtag = {
    title: "#noticias",
    amount_of_tweets: 345,
    getHashtagInfo: function () {
        return `El hashtag ${this.title} tiene ${this.amount_of_tweets} tweets`
    }
}
console.log("\n")
console.log(hashtag.getHashtagInfo())