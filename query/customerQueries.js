const tableName = "customertbl";

exports.createCustomertbl = () => {
  return `CREATE TABLE IF NOT EXISTS ${tableName}(id VARCHAR(60), name VARCHAR(20), contactno VARCHAR(20), 
            address VARCHAR(20), age INT,createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
};

exports.insertCustomer = (data) => {
  return `INSERT INTO ${tableName} (id, name, contactno, address, age) VALUES 
        ('${data.id}','${data.name}','${data.contactno}','${data.address}',${data.age})`;
};

exports.getCustomer = (id) => {
  return `SELECT * FROM ${tableName} WHERE id='${id}'`;
};

exports.getAll = () => {
  return `SELECT * FROM ${tableName}`;
};
