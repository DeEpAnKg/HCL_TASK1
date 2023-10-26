export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "$id": "https://example.com/employee.schema.json",
    "title": "Record of employee",
    "description": "This document records the details of an employee",
    "type": "object",
    "properties": {
      "id": {
        "description": "A unique identifier for an employee",
        "type": "number"
      },
      "name": {
        "description": "Full name of the employee",
        "type": "string"
      },
      "contactNumber": {
        "description": "Contact number",
        "type": "string",
        "pattern": "^(0|91)?[6-9][0-9]{9}$",
        "$errorMessage": "Contact number contains invalid characters"
      },
      "email": {
        "description": "Email",
        "type": "string",
        "pattern": "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
        "$errorMessage": "Email contains invalid characters"
      },
      "age": {
        "description": "Age of the employee",
        "type": "number"
      },
      "hobbies": {
        "description": "Hobbies of the employee",
        "type": "object",
        "properties": {
          "indoor": {
            "type": "array",
            "minItems": 1,
            "maxItems": 5,
            "items": {
              "description": "List of indoor hobbies",
              "type": "string",
              "optional": true
            }
          },
          "outdoor": {
            "type": "array",
            "minItems": 1,
            "maxItems": 5,
            "items": {
              "description": "List of outdoor hobbies",
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  };
  