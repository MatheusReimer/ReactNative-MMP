export default class RepositorySchema{
    static schema={
        name:'Repository',
        primaryKey:'id',
        properties:{
            id:{type:'int',indexed:true},
            weekday:{type:'string'},
            exercises:{
                id:{type:'int',indexed:true},
                name:'string',
                reps:'int',
                sets:'int'
            }
        }
    }
}