/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("77v6ifndaefkae6")

  collection.name = "note"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("77v6ifndaefkae6")

  collection.name = "Note"

  return dao.saveCollection(collection)
})
