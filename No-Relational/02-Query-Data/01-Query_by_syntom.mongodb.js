use("mongo_demo");
db.consult_info.find({ "symptoms.description": "Cough" });
