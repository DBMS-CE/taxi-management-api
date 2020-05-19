const tableName = "expensetbl";

exports.createExpensetbl = () => {
  return `CREATE TABLE IF NOT EXISTS ${tableName}(id VARCHAR(60), descritpion VARCHAR(30), taxiid VARCHAR(60), 
            transactionid VARCHAR(60), amount INT, driverid VARCHAR(60),createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
};

exports.insertExpense = (data) => {
  return `INSERT INTO ${tableName} (id, descritpion, taxiid, transactionid, amount, driverid) VALUES 
        ('${data.id}','${data.descritpion}','${data.taxiid}','${data.transactionid}',${data.amount},'${data.driverid}')`;
};

exports.getExpense = (id) => {
  return `SELECT * FROM ${tableName} WHERE id='${id}'`;
};

exports.getAll = () => {
  return `SELECT * FROM ${tableName}`;
};
