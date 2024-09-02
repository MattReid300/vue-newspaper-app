import axios from "axios";

const url = "https://json-server-blog-app-default-rtdb.europe-west1.firebasedatabase.app";

const apiClient = axios.create({
  baseURL: url,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default {
  getArticles() {
    console.log("getting articleeeeeees");
    const response = apiClient.get('articles.json');
    console.log(response);
    return response;
  },
  getArticle(id) {
    return apiClient.get('/articles/' + id + '.json');
  },
  postArticle(article) {
    return apiClient.put('/articles/' + article.id + '.json', article);
  },
  decodeResponse(response) {
    console.log("DECODERESPOOOONSE");
    const decodedContent = Buffer.from(response.data.content, 'base64').toString('utf-8');
    const jsonData = JSON.parse(decodedContent);
    return jsonData;
  },
  removeArticle(id) {
    return apiClient.delete('/articles/' + id + '.json');
    //return console.log("We reached api service removeArticle " + id);
  },
  nextArticle(id) {
    id = id + 1;
    return apiClient.get("/articles/" + id);
  },
  prevArticle(id) {
    id = id - 1;
    return apiClient.get("/articles/" + id);
  }
};