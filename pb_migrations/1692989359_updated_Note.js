/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("77v6ifndaefkae6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gj1l6exd",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("77v6ifndaefkae6")

  // remove
  collection.schema.removeField("gj1l6exd")

  return dao.saveCollection(collection)
})
