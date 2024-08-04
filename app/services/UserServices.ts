type User={
    id:number,
    name:string
}
type GetUsersFilter={
  limit:number;
  page:number;
}

async function getUsers(filter?:GetUsersFilter){
  await new Promise((resolve)=> setTimeout(resolve, 1000))
  return [{id:1, name:'Marius'}] as User[]
}