const student = require("../data/student");


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

        const {nama,id} =req.body;

        student.push({
            "nama": nama,
            "id": student.length + 1,
          });

        const data = {
            'message':`menambah data user : nama : ${nama} id : ${id}`,
            'data' : student[student.length - 1]
        }
        res.json(data)
    }
    update(req,res){
        const {id} = req.params
        const {nama} =req.body;

        for(let i = 0 ; i < student.length ; i++){
            if(student[i].id == id && student[i].nama == nama ){
                
            }
        }
        

        const data = {
            'message':`Mengubah data student ke ${id} yang namanya ${nama}`,
            'data' : student
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
