export default {
  "openapi": "3.0.3",
  "info": {
    "title": "Characters API",
    "description": "This is a sample of my characters API and this is a description\n\nSome useful links:\n- [The FSPT2022 repository](https://github.com/JonaTheBridge/FSPT2022)\n- [Swagger editor](https://editor.swagger.io/)",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.11"
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "https://localhost:3000/api/docs"
    }
  ],
  "tags": [
    {
      "name": "user",
      "description": "Everything about the users",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://swagger.io"
      }
    }
  ],
  "paths": {
    "/users": {
      "put": {
        "tags": [
          "users"
        ],
        "summary": "Update an existing character",
        "description": "Update an existing character by Id",
        "operationId": "updateCharacter",
        "requestBody": {
          "description": "Update an existent character in the store",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Pet not found"
          },
          "405": {
            "description": "Validation exception"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "username": {
            "type": "string",
            "example": "jhidalgo"
          },
          "password": {
            "type": "string",
            "example": "myPassword"
          }
        }
      }
    }
  }
};
