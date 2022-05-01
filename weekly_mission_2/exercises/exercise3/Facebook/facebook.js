class User {
    constructor(user, username) {
      this.user = user;
      this.username = username;
    }
    getUserName() {
      return `El usuario ${this.user} usa ${this.username} como username`
    }
  }
  const myUser = new User("Daniel Hernandez", "daniHdz")
  console.log("\n")
  console.log(myUser)
  console.log(myUser.getUserName())
  
  class Post {
    constructor(title, text) {
      this.title = title;
      this.text = text;
    }
    getTitlePost() {
      return `Titulo del post: ${this.title}`
    }
    getTextPost() {
      return `Texto del post: ${this.text}`
    }
  }
  const myPost = new Post("Primer post en Facebook", "Hola a todos, este es mi primer post en Facebook")
  console.log("\n")
  console.log(myPost)
  console.log(myPost.getTitlePost())
  console.log(myPost.getTextPost())
  
  class Biography {
    constructor(age, friends, birthday) {
      this.age = age;
      this.friends = friends;
      this.birthday = birthday;
    }
    getBiography() {
      return `${myUser.user} tiene ${this.age} años, su cumpleaños es el ${this.birthday} y tiene ${this.friends} amigos en Facebook`
    }
  }
  const myBiography = new Biography(20, 450, "18-04-2002")
  console.log("\n")
  console.log(myBiography)
  console.log(myBiography.getBiography())