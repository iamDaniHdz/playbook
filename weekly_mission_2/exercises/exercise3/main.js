/* Repo */
class Repo {
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close
  }
  getGeneralInfo() {
    return `El repositorio ${this.name} fue creado por: ${this.author}`
  }
}
const myRepo = new Repo("LaunchX - Weekly Mission 2", "Daniel Hernandez", "JavaScript", 100, 199, 299, 10, 10)
console.log("\n")
console.log(myRepo)
console.log("Nombre del Repositorio: " + myRepo.name)
console.log("Issues totales: " + myRepo.getTotalIssues())
console.log(myRepo.getGeneralInfo())

/* Issue */
class Issue {
  constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }
  getTitleAndAuthor() {
    return `El autor del Issue ${this.title} es: ${myRepo.author}`
  }
  getGeneralInfo() {
    return `El issue ${this.title} es sobre el repositorio: ${myRepo.name}`
  }
}
const myIssue = new Issue("Datos erroneos", myRepo.name, "error", 100, 15, myRepo.author, "18-04-2022", "20-04-2022")
console.log("\n")
console.log(myIssue)
console.log("Nombre del Issue: " + myIssue.title)
console.log(myIssue.getTitleAndAuthor())
console.log(myIssue.getGeneralInfo())

/* Pull Request */
class PullRequest {
  constructor(title, branchName, dateCreated, status, repositoryNameAssociated) {
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
  }
  getStatus() {
    return `El status del Pull Request es: ${this.status}`
  }
  getTitleAndAutor() {
    return `El autor del Pull Request ${this.title} es: ${myRepo.author}`
  }
}
const myPullRequest = new PullRequest("Actualizando exercise 1", "main", "20-04-2022", "update", "playbook")
console.log("\n")
console.log(myPullRequest)
console.log("Nombre del Pull Request: " + myPullRequest.title)
console.log(myPullRequest.getStatus())
console.log(myPullRequest.getTitleAndAutor())

/* Twitter */
class UserTw {
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
const myUserTw = new UserTw("Daniel Hernandez", "iamDaniHdz", "Hola a todos, tengo 20 años, estoy estudiando en la Universidad Virtual del Estado de Guanajuato, mis pasatiempos favoritos son escuchar musica, tocar la guitarra, pintar y ver peliculas", 20)
console.log("\n")
console.log(myUserTw)
console.log(myUserTw.getUser())
console.log(myUserTw.getBio())

class TrendingTopicTw {
  constructor(title, label, ranking) {
    this.title = title;
    this.label = label;
    this.ranking = ranking;
  }
  getTrendingTopic() {
    return `${this.title} es trending topic en el rango ${this.ranking} sobre la tematica ${this.label}`
  }
}
const myTrendingTopicTw = new TrendingTopicTw("QATAR 2022", "deportes", 30)
console.log("\n")
console.log(myTrendingTopicTw)
console.log(myTrendingTopicTw.getTrendingTopic())

class HashtagTw {
  constructor(title, amount_of_tweets) {
    this.title = title;
    this.amount_of_tweets = amount_of_tweets;
  }
  getHashtagInfo() {
    return `El hashtag ${this.title} tiene ${this.amount_of_tweets} tweets`
  }
}
const myHashtagTw = new HashtagTw("#noticias", 345)
console.log("\n")
console.log(myHashtagTw)
console.log(myHashtagTw.getHashtagInfo())

/* Facebook */
class UserFb {
  constructor(user, username) {
    this.user = user;
    this.username = username;
  }
  getUserName() {
    return `El usuario ${this.user} usa ${this.username} como username`
  }
}
const myUserFb = new UserFb("Daniel Hernandez", "daniHdz")
console.log("\n")
console.log(myUserFb)
console.log(myUserFb.getUserName())

class PostFb {
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
const myPostFb = new PostFb("Primer post en Facebook", "Hola a todos, este es mi primer post en Facebook")
console.log("\n")
console.log(myPostFb)
console.log(myPostFb.getTitlePost())
console.log(myPostFb.getTextPost())

class BiographyFb {
  constructor(age, friends, birthday) {
    this.age = age;
    this.friends = friends;
    this.birthday = birthday;
  }
  getBiography() {
    return `${myUserFb.user} tiene ${this.age} años, su cumpleaños es el ${this.birthday} y tiene ${this.friends} amigos en Facebook`
  }
}
const myBiographyFb = new BiographyFb(20, 450, "18-04-2002")
console.log("\n")
console.log(myBiographyFb)
console.log(myBiographyFb.getBiography())

/* Uber */
class ProfileUb {
  constructor(name, phone, estate, city) {
    this.name = name;
    this.phone = phone;
    this.estate = estate;
    this.city = city;
  }
  getLocation(){
    return `El usuario ${this.name} vive en ${this.city}, ${this.estate}`
  }
  getNumber(){
    return `Su numero telefonico es ${this.phone}`
  }
}
const myProfileUb = new ProfileUb("Daniel Hernandez", 9999999999, "Yucatan", "Merida")
console.log("\n")
console.log(myProfileUb)
console.log(myProfileUb.getLocation())
console.log(myProfileUb.getNumber())

class TravelUb{
  constructor(origin, destination, cost, paymentMethod, timeOfTravel){
    this.origin = origin;
    this.destination = destination;
    this.cost = cost;
    this.paymentMethod = paymentMethod;
    this.timeOfTravel = timeOfTravel;
  }
  getTravelDetails(){
    return `El usuario ${myProfileUb.name} viajo desde ${this.origin} hasta ${this.destination} en un total de ${this.timeOfTravel} minutos`
  }
  getPaymentDetails(){
    return `Pago un total de $${this.cost} y su metodo de pago fue ${this.paymentMethod}`
  }
}
const myTravelUb = new TravelUb("Hogar", "Centro comercial", 70, "Efectivo", 14)
console.log("\n")
console.log(myTravelUb)
console.log(myTravelUb.getTravelDetails())
console.log(myTravelUb.getPaymentDetails())