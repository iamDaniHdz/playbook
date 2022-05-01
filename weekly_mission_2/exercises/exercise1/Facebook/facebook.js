const user = {
    user: "Daniel Hernandez",
    username: "daniHdz",
    getUserName: function () {
        return `El usuario ${this.user} usa ${this.username} como username`
    }
}
console.log("\n")
console.log(user.getUserName())

const post = {
    title: "Primer post en Facebook",
    text: "Hola a todos, este es mi primer post en Facebook",
    getTitlePost: function () {
        return `Titulo del post: ${this.title}`
    },
    getTextPost: function () {
        return `Texto del post: ${this.text}`
    }
}
console.log("\n")
console.log(post.getTitlePost())
console.log(post.getTextPost())

const biography = {
    age: 20,
    friends: 450,
    birthday: "18-04-2002",
    getBiography: function () {
        return `${user.user} tiene ${this.age} años, su cumpleaños es el ${this.birthday} y tiene ${this.friends} amigos en Facebook`
    },
}
console.log("\n")
console.log(biography.getBiography())