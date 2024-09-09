export interface PersonInter {
    id:string,
    name:string,
    age:number
}

//一个自定义类型 必须是数组 且数组里存放PersonInter类型
export type Persons = Array<PersonInter>
