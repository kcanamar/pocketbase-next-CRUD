migrate((db) => {
  const collection = new Collection({
    "id": "ingjdwg14l2qmpr",
    "created": "2023-05-19 16:28:42.522Z",
    "updated": "2023-05-19 16:28:42.522Z",
    "name": "fireship",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tjw0l5z9",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ye3t0xrl",
        "name": "content",
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
  const collection = dao.findCollectionByNameOrId("ingjdwg14l2qmpr");

  return dao.deleteCollection(collection);
})
