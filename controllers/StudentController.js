import { student} from "../data/student";

class studentControllers {

    //Menampilkan data student
    index(req,res){
    
        const data = {
            'message':'Menampilkan data students',
            'data' : student
        };
        res.json(data);
    }
    store(req,res){ 
        const {nama} =req.body

        const push = student.push(nama);

        const data = {
            'message':`menambah data user ${nama}`,
            'data' : push
        }
        res.json(data)
    }
    update(req,res){
        const {id} = req.params;
        const {nama} =req.body;
        const data = {
            'message':`Mengubah data student ke ${id} yang namanya ${nama}`,
            'data' :[]
        }
        res.json(data)
    }
    destroy(req,res){
        const {id} = req.params;
        const data = {
            'message':`Menghapus data student ke ${id}`,
            'data' :[]
        }
        res.json(data)
    }
}

//membuat object dari student controller
const obj = new studentControllers();

//mengexport
module.exports = obj;
