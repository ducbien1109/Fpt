import instance from "./axios"

const getList = {
    getAll(){
        return instance.get('/list-product')
    },
    getDetail(id){
        return instance.get(`/list-product${id}`)
    },
    create(body){
        return instance.post(`/list-product${body}`)
    },
    update(id, body){
        return instance.put(`/list-product${id}`, body)
    },
    delete(id){
        return instance.delete(`/list-product${id}`)
    }
}
export default getList