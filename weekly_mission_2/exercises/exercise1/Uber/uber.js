const profile = {
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
console.log(profile.getLocation())
console.log(profile.getNumber())

const travel = {
    origin: "Hogar",
    destination: "Centro comercial",
    cost: 70,
    paymentMethod: "Efectivo",
    timeOfTravel: 14,
    getTravelDetails: function () {
        return `El usuario ${profile.name} viajo desde ${this.origin} hasta ${this.destination} en un total de ${this.timeOfTravel} minutos`
    },
    getPaymentDetails: function () {
        return `Pago un total de $${this.cost} y su metodo de pago fue ${this.paymentMethod}`
    }
}
console.log("\n")
console.log(travel.getTravelDetails())
console.log(travel.getPaymentDetails())