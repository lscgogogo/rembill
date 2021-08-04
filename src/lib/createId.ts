let id:number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId(){
    id++;
    window.localStorage.setItem('_id_max',id.toString())
    return id;
}

export default createId;