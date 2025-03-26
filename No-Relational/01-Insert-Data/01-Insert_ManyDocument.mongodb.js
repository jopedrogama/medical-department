use("mongo_demo");

db.consult_info.insertMany([
    {
        "consult_id": 2,
        "notes": "Patient is being treated for a broken arm",
        "symptoms": [
            {
                "description": "Paint in the arm",
                "notes": "X Ray shows a fracture"
            }
        ],    
    },
    {
        "consult_id": 3,
        "notes": "Investiganting a possible case of COVID-19",
        "symptoms": [
            {
                "description": "Cough",
                "severity": 2,
                "notes": "It stops at night"
            },
            {
                "description": "Pain in the chest",
                "severity": 3,
                "notes": "It started today"
            }
        ],
        "prescription": [
            {
                "medicine_id": 3,
                "quantity": 4,
                "dosage": "50mg",
                "duration": 14,
                "interval_hours": 12,
                "prescription_mandatory": true
            },
        ]
    },
    {
        "consult_id": 4,
        "notes": "Investiganting a possible case of COVID-19",
        "symptoms": [
            {
                "description": "Cough",
                "severity": 5,
                "notes": "It is persistent"
            },
            {
                "description": "Pain in the chest",
                "severity": 3,
                "notes": "It started today"
            }
        ],
        "prescription": [
            {
                "medicine_id": 3,
                "quantity": 4,
                "dosage": "50mg",
                "duration": 14,
                "interval_hours": 12,
                "prescription_mandatory": true
            },
        ]
    },
    {
        "consult_id": 5,
        "notes": "Routine checkup for a healthy patient",
    },
    {
        "consult_id": 6,
        "notes": "Investigating potential brain damage",
        "symptoms": [
            {
                "description": "Severe headache",
                "severity": 4,
                "notes": "Pain is constant, but worsens in bright light"
            },
            {
                "description": "Nausea",
                "severity": 2,
            }
        ],
        "prescription": [
            {
                "medicine_id": 2,
                "quantity": 10,
                "dosage": "25mg",
                "duration": 7,
                "interval_hours": 6,
                "prescription_mandatory": true
            }
        ]
    },
    {
        "consult_id": 7,
        "notes": "Follow-up for diabetes management",
        "symptoms": [
            {
                "description": "Fatigue",
                "severity": 3,
                "notes": "Feeling fatigued after meals"
            },
            {
                "description": "Increased thirst",
                "severity": 2,
                "notes": "Thirsty throughout the day"
            }
        ],
        "prescription": [
            {
                "medicine_id": 5,
                "quantity": 15,
                "dosage": "500mg",
                "duration": 30,
                "interval_hours": 8,
                "prescription_mandatory": true
            }
        ]
    },
    {
        "consult_id": 8,
        "notes": "Routine checkup and blood work",
    },
    {
        "consult_id": 9,
        "notes": "Treatment for seasonal allergies",
        "symptoms": [
            {
                "description": "Sneezing",
                "severity": 3,
                "notes": "Occurs multiple times a day, especially outdoors"
            },
            {
                "description": "Itchy eyes",
                "severity": 2,
                "notes": "Symptoms worsen during the evening"
            }
        ],
        "prescription": [
            {
                "medicine_id": 7,
                "quantity": 10,
                "dosage": "10mg",
                "duration": 7,
                "interval_hours": 12,
                "prescription_mandatory": true
            }
        ]
    }
]);