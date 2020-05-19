const tableName = "transactiontbl";

exports.createTransactionTable = () => {
  return `CREATE TABLE IF NOT EXISTS ${tableName}(id VARCHAR(60), type VARCHAR(20), description VARCHAR(20), 
        amount INT, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
};

exports.insertTransaction = (data) => {
  return `INSERT INTO ${tableName} (id, type, description, amount) VALUES 
        ('${data.id}','${data.type}','${data.description}',${data.amount})`;
};

exports.getTransaction = (id) => {
  return `SELECT * FROM ${tableName} WHERE id='${id}'`;
};

exports.getAll = () => {
  return `SELECT * FROM ${tableName}`;
};
