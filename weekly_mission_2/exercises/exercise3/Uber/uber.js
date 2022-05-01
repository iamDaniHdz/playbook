class Profile {
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
  const myProfile = new Profile("Daniel Hernandez", 9999999999, "Yucatan", "Merida")
  console.log("\n")
  console.log(myProfile)
  console.log(myProfile.getLocation())
  console.log(myProfile.getNumber())
  
  class Travel{
    constructor(origin, destination, cost, paymentMethod, timeOfTravel){
      this.origin = origin;
      this.destination = destination;
      this.cost = cost;
      this.paymentMethod = paymentMethod;
      this.timeOfTravel = timeOfTravel;
    }
    getTravelDetails(){
      return `El usuario ${myProfile.name} viajo desde ${this.origin} hasta ${this.destination} en un total de ${this.timeOfTravel} minutos`
    }
    getPaymentDetails(){
      return `Pago un total de $${this.cost} y su metodo de pago fue ${this.paymentMethod}`
    }
  }
  const myTravel = new Travel("Hogar", "Centro comercial", 70, "Efectivo", 14)
  console.log("\n")
  console.log(myTravel)
  console.log(myTravel.getTravelDetails())
  console.log(myTravel.getPaymentDetails())