
exports.getUserData = async (req, res) =>{

    try{
        const {household, lifestyleData, transportData} = req.body
        console.log("Received data:", household, lifestyleData, transportData)
        res.status(200).json({
            status: "success"
        })
    }catch(err){
        res.status(400).json({
            status: "error",
            error:{
                err
            }
        })
    }
    
} 