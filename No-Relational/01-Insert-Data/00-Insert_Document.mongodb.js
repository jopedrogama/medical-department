use("mongo_demo");

db.consult_info.insertOne({
    "consult_id": 1,
    "notes": "Patient has a cold",
    "symptoms": [
        {
            "description": "Cough",
            "severity": 2,
            "notes": "It stops at night"
        },
        {
            "description": "Fever",
            "notes": "It started 3 days ago, 39 degrees"
        }
    ],
    "prescription": [
        {
            "medicine_id": 1,
            "quantity": 1,
            "dosage": "300mg",
            "duration": 5,
            "interval_hours": 8,
            "prescription_mandatory": true
        },
        {
            "medicine_id": 2,
            "quantity": 1,
            "dosage": "1 pill",
            "duration": 10,
            "notes": "Take before bed",
            "interval_hours": 8,
            "prescription_mandatory": false
        }
    ]

});

db.consult_info.findOne({ "consult_id":1 })

