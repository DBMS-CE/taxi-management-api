const tableName = "drivertbl";

exports.createDrivertbl = () => {
  return `CREATE TABLE IF NOT EXISTS ${tableName}(id VARCHAR(60), name VARCHAR(20), contactno VARCHAR(20), 
            address VARCHAR(20), age INT, drivingLicense BOOLEAN,createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
};

exports.insertDriver = (data) => {
  return `INSERT INTO ${tableName} (id, name, contactno, address, age, drivingLicense) VALUES 
        ('${data.id}','${data.name}','${data.contactno}','${data.address}',${data.age},${data.drivingLicense})`;
};

exports.getDriver = (id) => {
  return `SELECT * FROM ${tableName} WHERE id='${id}'`;
};

exports.getAll = () => {
  return `SELECT * FROM ${tableName}`;
};
