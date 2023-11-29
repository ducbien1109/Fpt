import instance from "./axios";

const getListProduct = {
  getAll() {
    return instance.get("/data");
  },
  getDetail(postId) {
    return instance.get(`/data/${postId}`);
  },
  create(body) {
    return instance.post("/data", body);
  },
  delete(postId) {
    return instance.delete(`/data/${postId}`);
  },
  update(postId, body) {
    return instance.put(`/data/${postId}`, body);
  },
};
export default getListProduct;
