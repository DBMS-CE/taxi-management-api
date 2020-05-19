const tableName = "ordertbl";

exports.createOrdertbl = () => {
  return `CREATE TABLE IF NOT EXISTS ${tableName}(id VARCHAR(60), pickupAdd VARCHAR(50), destinationAdd VARCHAR(50), 
            customerid VARCHAR(60), amount DOUBLE, transactionid VARCHAR(60),createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
};

exports.insertOrder = (data) => {
  return `INSERT INTO ${tableName} (id, destinationAdd, pickupAdd, customerid, amount, transactionid) VALUES 
        ('${data.id}','${data.destinationAdd}','${data.pickupAdd}','${data.customerid}',${data.amount},'${data.transactionid}')`;
};

exports.getOrder = (id) => {
  return `SELECT * FROM ${tableName} WHERE id='${id}'`;
};

exports.getAll = () => {
  return `SELECT * FROM ${tableName}`;
};
