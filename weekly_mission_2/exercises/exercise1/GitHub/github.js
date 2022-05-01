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