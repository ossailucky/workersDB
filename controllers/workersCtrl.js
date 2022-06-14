import workers from "../models/WorkersModel.js"


const workersCtrl = {
    getAllWorkers: async (req, res) =>{

        const workers = await workers.find()
        res.json(workers)
    },

    getOneWorker: async (req, res) =>{

        const {name } = req.body

        const worker = await workers.findOne({name})

        if(!worker){
            res.json({msg: "This Worker does not exist"})
        }
        res.json(worker)
    },

    postWorker: async (req, res)=>{
        const {name, state} = req.body

        const newWorker = new workers({name,position, state})

        await newWorker.save()

        res.json( newWorker)
    }
}

export default workersCtrl