const localStorgeKeyName = 'tagList';
type Tag= {
    id:string,
    name:string
}
type TagListModel ={
    data:Tag[],
    fetch:()=>Tag[],
    create:(name:string)=>'success' | 'duplicated',
    save:()=>void
}

const tagListModel:TagListModel = {
    data:[],
    create(name:string){
    const names = this.data.map(item=>item.name)
    if(names.indexOf(name)>=0){return 'duplicated'}
      this.data.push({id:name,name:name})
      this.save()
      return 'success'
    },
    fetch(){
        this.data =  JSON.parse(window.localStorage.getItem('localStorgeKeyName') || '[]') ;
        return this.data;

    },
    save(){
        window.localStorage.setItem('localStorgeKeyName',JSON.stringify(this.data))
    }
};
export default tagListModel;