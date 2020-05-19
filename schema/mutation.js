const graphql = require("graphql");

const objectType = require("./objectType");

const controller = require("../controller/taxiController");

const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
} = graphql;

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTaxi: {
      type: objectType.TaxiType,
      args: {
        ownerid: { type: GraphQLString },
        number: { type: GraphQLString },
        model: { type: GraphQLString },
        overview: { type: GraphQLString },
        seatingCapacity: { type: GraphQLInt },
        driverid: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await controller.createTaxi(args);
        return data;
      },
    },
    addDriver: {
      type: objectType.DriverType,
      args: {
        name: { type: GraphQLString },
        contactno: { type: GraphQLString },
        address: { type: GraphQLString },
        age: { type: GraphQLInt },
        drivingLicense: { type: GraphQLBoolean },
      },
      async resolve(parent, args) {
        const data = await controller.createDriver(args);
        return data;
      },
    },
    addOwner: {
      type: objectType.OwnerType,
      args: {
        name: { type: GraphQLString },
        contactno: { type: GraphQLString },
        address: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const data = await controller.createOwner(args);
        return data;
      },
    },
    addTransaction: {
      type: objectType.TransactionType,
      args: {
        type: { type: GraphQLString },
        description: { type: GraphQLString },
        amount: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const data = await controller.createTransaction(args);
        return data;
      },
    },
    addCustomer: {
      type: objectType.CustomerType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        contactno: { type: GraphQLString },
        address: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await controller.createCustomer(args);
        return data;
      },
    },
    addOrder: {
      type: objectType.CustomerType,
      args: {
        pickupAdd: { type: GraphQLString },
        destinationAdd: { type: GraphQLString },
        amount: { type: GraphQLInt },
        transactionid: { type: GraphQLString },
        customerid: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await controller.createOrder(args);
        return data;
      },
    },
    addExpense: {
      type: objectType.CustomerType,
      args: {
        driverid: { type: GraphQLString },
        transactionid: { type: GraphQLString },
        taxiid: { type: GraphQLString },
        description: { type: GraphQLString },
        amount: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const data = await controller.createExpense(args);
        return data;
      },
    },
  },
});

module.exports = Mutation;
