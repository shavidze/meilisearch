"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const meilisearch_1 = require("meilisearch");
const LOG = (o) => {
    console.log(JSON.stringify(o, null, 3));
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const client = new meilisearch_1.MeiliSearch({
        host: "http://127.0.0.1:7700",
        apiKey: "masterKey",
    });
    // An index is where the documents are stored.
    const index = client.index("movies");
    const documents = [
        { id: 1, title: "Carol", genres: ["Romance", "Drama"] },
        { id: 2, title: "Wonder Woman", genres: ["Action", "Adventure"] },
        { id: 3, title: "Life of Pi", genres: ["Adventure", "Drama"] },
        {
            id: 4,
            title: "Mad Max: Fury Road",
            genres: ["Adventure", "Science Fiction"],
        },
        { id: 5, title: "Moana", genres: ["Fantasy", "Action"] },
        { id: 6, title: "Philadelphia", genres: ["Drama"] },
    ];
    // If the index 'movies' does not exist, Meilisearch creates it when you first add the documents.
    let response = yield index.addDocuments(documents);
    LOG(response);
    const search = yield index.search("philoudelphia");
    LOG(search);
    LOG(yield index.search("wonder", {
        attributesToHighlight: ["*"],
    }));
    yield index.updateFilterableAttributes(["id", "genres"]);
    LOG(yield index.search("wonder", {
        filter: ["id > 1 AND genres = Action"],
    }));
    LOG(yield index.search("", {
        filter: ["genres = fantasy"],
        facets: ["genres"],
    }));
}))();
