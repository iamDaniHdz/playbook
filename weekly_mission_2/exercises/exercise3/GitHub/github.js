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