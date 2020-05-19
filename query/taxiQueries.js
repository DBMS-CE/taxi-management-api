const tableName = "taxitbl";

exports.createTaxitbl = () => {
  return `CREATE TABLE IF NOT EXISTS ${tableName}(id VARCHAR(60), ownerid VARCHAR(60), number VARCHAR(20), 
            model VARCHAR(20), overview VARCHAR(20), seatingCapacity INT,driverid VARCHAR(60))`;
};

exports.insertTaxi = (data) => {
  return `INSERT INTO ${tableName} (id, ownerid, number, model, overview, seatingCapacity, driverid) VALUES 
        ('${data.id}','${data.ownerid}','${data.number}','${data.model}','${data.overview}',${data.seatingCapacity},'${data.driverid}')`;
};

exports.getTaxi = (id) => {
  return `SELECT * FROM ${tableName} WHERE id='${id}'`;
};

exports.getByOwner = (id) => {
  return `SELECT * FROM ${tableName} WHERE ownerid='${id}'`;
};

exports.getByDriver = (id) => {
  return `SELECT * FROM ${tableName} WHERE driverid='${id}'`;
};

exports.getAll = () => {
  return `SELECT * FROM ${tableName}`;
};
