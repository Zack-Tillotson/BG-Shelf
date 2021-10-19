export default {
  "acquisition" : {
    "date" : {
      "copy" : "Date",
      "type" : "string",
      "unique" : true
    },
    "id" : {
      "hidden" : true,
      "type" : "string",
      "unique" : true
    },
    "price" : {
      "copy" : "Price",
      "type" : "string",
      "unique" : true
    }
  },
  "club" : {
    "id" : {
      "hidden" : true,
      "type" : "string",
      "unique" : true
    },
    "name" : {
      "copy" : "Club name",
      "position" : "none",
      "type" : "string",
      "unique" : true
    }
  },
  "item" : {
    "canonicalImage" : {
      "bggName" : "image",
      "copy" : "Box Image",
      "order" : 5,
      "position" : "none",
      "type" : "image",
      "unique" : false
    },
    "description" : {
      "bggName" : "description",
      "copy" : "Description",
      "position" : "full",
      "type" : "string",
      "unique" : true
    },
    "designer" : {
      "bggName" : "boardgamedesigner[]",
      "copy" : "Designer",
      "order" : 4,
      "position" : "secondary",
      "type" : "string",
      "unique" : false
    },
    "id" : {
      "hidden" : true,
      "position" : "none",
      "type" : "string",
      "unique" : true
    },
    "maxPlayers" : {
      "bggName" : "maxplayers",
      "copy" : "Maximum player count",
      "order" : 7,
      "position" : "full",
      "type" : "number",
      "unique" : true
    },
    "minPlayers" : {
      "bggName" : "minplayers",
      "copy" : "Minimum player count",
      "order" : 6,
      "position" : "full",
      "type" : "number",
      "unique" : true
    },
    "name" : {
      "bggName" : "name",
      "copy" : "Name",
      "order" : 1,
      "position" : "main",
      "required" : true,
      "type" : "string",
      "unique" : true
    },
    "price" : {
      "copy" : "MSRP",
      "position" : "full",
      "type" : "string",
      "unique" : true
    },
    "publisher" : {
      "bggName" : "boardgamepublisher[]",
      "copy" : "Publisher",
      "order" : 2,
      "position" : "secondary",
      "type" : "string",
      "unique" : false
    },
    "releaseDate" : {
      "bggName" : "yearpublished",
      "copy" : "Year Released",
      "order" : 3,
      "position" : "main",
      "type" : "date",
      "unique" : true
    }
  },
  "itemselector" : {
    "placeholder" : "Search by name or year",
    "type" : "string",
    "unique" : true,
    "suggestions": [{
      id: "collection",
      name: "Collection",
      objectMapper: object => object.getCollection()
    }, {
      id: "wishlist",
      name: "Wishlist",
      objectMapper: object => object.getWishlist()
    }]
  },
  "member" : {
    "id" : {
      "hidden" : true,
      "type" : "string",
      "unique" : true
    },
    "name" : {
      "copy" : "Name",
      "type" : "string",
      "unique" : false
    }
  },
  "ownership" : {
    "favorite" : {
      "hidden" : true,
      "type" : "boolean",
      "unique" : true
    },
    "id" : {
      "hidden" : true,
      "type" : "string",
      "unique" : true
    }
  },
  "session" : {
    "date" : {
      "copy" : "Date Played",
      "position" : "none",
      "type" : "string",
      "unique" : true
    },
    "id" : {
      "hidden" : true,
      "type" : "string",
      "unique" : true
    },
    "note" : {
      "copy" : "Note",
      "position" : "secondary",
      "type" : "string",
      "unique" : true
    },
    "participants" : {
      "copy" : "Player(s)",
      "order" : 1,
      "position" : "secondary",
      "type" : "string"
    }
  }
}
