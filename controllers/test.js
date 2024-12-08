import connected from '../config/db.js'

export const Insert = (req, res) => {
    try {
        const { username, password } = req.body
        if (!username && !password) {
            return res.status(400).json({ message: 'Bad request',})
           
        }  
            const insert = 'insert into test(username,password) values (?,?)'
            connected.query(insert,[username,password],(err)=>{
         if(err) throw err
         return res.status(200).json({ message: 'Success', success: true, data: { username, password } })
            })
           
    } catch (err) {
        return res.status(500).json({ message: "Server error", success: false,  })
    }
}