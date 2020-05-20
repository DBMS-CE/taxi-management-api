const graphql = require("graphql");

const objectType = require("./objectType");

const controller = require("../controller/taxiController");

const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

const connection = require("../mysql");

const expenseQueries = require("../query/expenseQueries");
const ownerQueries = require("../query/ownerQueries");
const driverQueries = require("../query/driverQueries");
const orderQueries = require("../query/orderQueries");
const taxiQueries = require("../query/taxiQueries");
const customerQueries = require("../query/customerQueries");
const transactionQueries = require("../query/transactionQueries");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTaxi: {
      type: objectType.TaxiType,
      args: {
        ownerid: { type: new GraphQLNonNull(GraphQLString) },
        number: { type: new GraphQLNonNull(GraphQLString) },
        model: { type: new GraphQLNonNull(GraphQLString) },
        overview: { type: new GraphQLNonNull(GraphQLString) },
        seatingCapacity: { type: new GraphQLNonNull(GraphQLInt) },
        driverid: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const data = await controller.createTaxi(args);
        return data;
      },
    },
    addDriver: {
      type: objectType.DriverType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        contactno: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        drivingLicense: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      async resolve(parent, args) {
        const data = await controller.createDriver(args);
        return data;
      },
    },
    addOwner: {
      type: objectType.OwnerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        contactno: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parent, args) {
        const data = await controller.createOwner(args);
        return data;
      },
    },
    addTransaction: {
      type: objectType.TransactionType,
      args: {
        type: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parent, args) {
        const data = await controller.createTransaction(args);
        return data;
      },
    },
    addCustomer: {
      type: objectType.CustomerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        contactno: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const data = await controller.createCustomer(args);
        return data;
      },
    },
    addOrder: {
      type: objectType.CustomerType,
      args: {
        pickupAdd: { type: new GraphQLNonNull(GraphQLString) },
        destinationAdd: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLInt) },
        transactionid: { type: new GraphQLNonNull(GraphQLString) },
        customerid: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const data = await controller.createOrder(args);
        return data;
      },
    },
    addExpense: {
      type: objectType.CustomerType,
      args: {
        driverid: { type: new GraphQLNonNull(GraphQLString) },
        transactionid: { type: new GraphQLNonNull(GraphQLString) },
        taxiid: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parent, args) {
        const data = await controller.createExpense(args);
        return data;
      },
    },
    updateExpense: {
      type: objectType.ExpenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        amount: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        try {
          const data = await connection(expenseQueries.updateExpense(args));
          return data;
        } catch (er) {
          console.log(er);
        }
      },
    },
    updateOrder: {
      type: objectType.ExpenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        pickupAdd: { type: GraphQLString },
        destinationAdd: { type: GraphQLString },
        amount: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        try {
          const data = await connection(orderQueries.updateOrder(args));
          return data;
        } catch (er) {
          console.log(er);
        }
      },
    },
    updateOwner: {
      type: objectType.ExpenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        contactno: { type: GraphQLString },
        address: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        try {
          const data = await connection(ownerQueries.updateOwner(args));
          return data;
        } catch (er) {
          console.log(er);
        }
      },
    },
    updateTransaction: {
      type: objectType.ExpenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLString },
        description: { type: GraphQLString },
        amount: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        try {
          const data = await connection(
            transactionQueries.updateTransaction(args)
          );
          return data;
        } catch (er) {
          console.log(er);
        }
      },
    },
    updateCustomer: {
      type: objectType.CustomerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        contactno: { type: GraphQLString },
        address: { type: GraphQLString },
      },
      async resolve(parent, args) {
        try {
          const data = await connection(customerQueries.updateCustomer(args));
          return data;
        } catch (er) {
          console.log(er);
        }
      },
    },
    updateDriver: {
      type: objectType.ExpenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        contactno: { type: GraphQLString },
        address: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        try {
          const data = await connection(driverQueries.updateDriver(args));
          return data;
        } catch (er) {
          console.log(er);
        }
      },
    },
    updateTaxi: {
      type: objectType.ExpenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        number: { type: GraphQLString },
        model: { type: GraphQLString },
        overview: { type: GraphQLString },
        seatingCapacity: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        try {
          const data = await connection(taxiQueries.updateTaxi(args));
          return data;
        } catch (er) {
          console.log(er);
        }
      },
    },
  },
});

module.exports = Mutation;
