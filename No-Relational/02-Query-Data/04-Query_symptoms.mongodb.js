use("mongo_demo");
db.consult_info.find({ "symptoms.severity": { $gt: 3 } });
