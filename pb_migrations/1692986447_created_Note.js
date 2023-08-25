/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "77v6ifndaefkae6",
    "created": "2023-08-25 18:00:47.224Z",
    "updated": "2023-08-25 18:00:47.224Z",
    "name": "Note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "id5toxna",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("77v6ifndaefkae6");

  return dao.deleteCollection(collection);
})
