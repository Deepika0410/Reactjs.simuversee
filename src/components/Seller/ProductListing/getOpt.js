
const options = {
    men:['tshirts','jackets','jeans','sweaters'],
    women:['dresses','tops','tshirts','jeans'],
    kids:['tshirts','shirts','jeans','dresses']
};



export  let getOpt = (cat) => {
    
        return options[cat];
}