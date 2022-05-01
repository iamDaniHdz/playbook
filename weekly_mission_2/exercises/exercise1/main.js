/* Repositorio */
const repo = {
    name: "LaunchX - Weekly Mission 2",
    author: "Daniel Hernandez",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `El repositorio ${this.name} fue creado por: ${this.author}`
    }
}
console.log("\n")
console.log("Nombre del Repositorio: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

/* Issue */
const issue = {
    title: "Datos erroneos",
    repositoryNameAssociated: repo.name,
    status: "error",
    numberOfComments: 100,
    labels: 15,
    author: repo.author,
    dateCreated: "18-04-2022",
    lastUpdated: "20-04-2022",
    getTitleAndAuthor: function () {
        return `El autor del Issue ${this.title} es: ${this.author}`
    },
    getGeneralInfo: function () {
        return `El issue ${this.title} es sobre el repositorio: ${this.repositoryNameAssociated}`
    }
}
console.log("\n")
console.log("Nombre del Issue: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

/* Pull Request */
const pullRequest = {
    title: "Actualizando exercise 1",
    branchName: "main",
    dateCreated: "20-04-2022",
    status: "update",
    repositoryNameAssociated: "playbook",
    getStatus: function () {
        return `El status del Pull Request es: ${this.status}`
    },
    getTitleAndAutor: function () {
        return `El autor del Pull Request ${this.title} es: ${repo.author}`
    }
}
console.log("\n")
console.log("Nombre del Pull Request: " + pullRequest.title)
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())

/* Twitter */
const user_Tw = {
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
console.log(user_Tw.getUser())
console.log(user_Tw.getBio())

const trending_topic_Tw = {
    title: "QATAR 2022",
    label: "deportes",
    ranking: 30,
    getTrendingTopic: function () {
        return `${this.title} es trending topic en el rango ${this.ranking} sobre la tematica ${this.label}`
    }
}
console.log("\n")
console.log(trending_topic_Tw.getTrendingTopic())

const hashtag_Tw = {
    title: "#noticias",
    amount_of_tweets: 345,
    getHashtagInfo: function () {
        return `El hashtag ${this.title} tiene ${this.amount_of_tweets} tweets`
    }
}
console.log("\n")
console.log(hashtag_Tw.getHashtagInfo())

/* Facebook */
const user_Fb = {
    user: "Daniel Hernandez",
    username: "daniHdz",
    getUserName: function () {
        return `El usuario ${this.user} usa ${this.username} como username`
    }
}
console.log("\n")
console.log(user_Fb.getUserName())

const post_Fb = {
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
console.log(post_Fb.getTitlePost())
console.log(post_Fb.getTextPost())

const biography_Fb = {
    age: 20,
    friends: 450,
    birthday: "18-04-2002",
    getBiography: function () {
        return `${user_Fb.user} tiene ${this.age} años, su cumpleaños es el ${this.birthday} y tiene ${this.friends} amigos en Facebook`
    },
}
console.log("\n")
console.log(biography_Fb.getBiography())

/* Uber */
const profile_Ub = {
    name: "Daniel Hernandez",
    phone: 9999999999,
    estate: "Yucatan",
    city: "Merida",
    getLocation: function () {
        return `El usuario ${this.name} vive en ${this.city}, ${this.estate}`
    },
    getNumber: function () {
        return `Su numero telefonico es ${this.phone}`
    }
}
console.log("\n")
console.log(profile_Ub.getLocation())
console.log(profile_Ub.getNumber())

const travel_Ub = {
    origin: "Hogar",
    destination: "Centro comercial",
    cost: 70,
    paymentMethod: "Efectivo",
    timeOfTravel: 14,
    getTravelDetails: function () {
        return `El usuario ${profile_Ub.name} viajo desde ${this.origin} hasta ${this.destination} en un total de ${this.timeOfTravel} minutos`
    },
    getPaymentDetails: function () {
        return `Pago un total de $${this.cost} y su metodo de pago fue ${this.paymentMethod}`
    }
}
console.log("\n")
console.log(travel_Ub.getTravelDetails())
console.log(travel_Ub.getPaymentDetails())