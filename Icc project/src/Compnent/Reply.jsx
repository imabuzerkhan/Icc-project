import {
  Card,
  CardContent,
 

  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import React from 'react'
import Button1 from "./Button1"

const Reply = () => {
  return (
    <>
    <Card className="w-[92%] py-1 mx-auto " >
  <CardHeader  >
    <CardTitle>Reply </CardTitle>
   
  </CardHeader>
  <CardContent className="grid grid-cols-2  gap-4 px-4 "  >
    <div className="card   px-2 py-2  "><h1>Abuzer khan</h1>
    <p className="mb-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsam doloribus autem maxime reiciendis minus obcaecati natus mollitia aliquam corrupti?</p>
    <Button1></Button1>
    </div>
    <div className="card   px-2 py-2 "><h1>Abuzer khan</h1>
    <p className="mb-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsam doloribus autem maxime reiciendis minus obcaecati natus mollitia aliquam corrupti?</p>
    <Button1></Button1>
    </div>
    <div className="card  k px-2 py-2 "><h1>Abuzer khan</h1>
    <p className="mb-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsam doloribus autem maxime reiciendis minus obcaecati natus mollitia aliquam corrupti?</p>
    <Button1></Button1>
    </div>
    <div className="card   px-2 py-2 "><h1>Abuzer khan</h1>
    <p className="mb-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsam doloribus autem maxime reiciendis minus obcaecati natus mollitia aliquam corrupti?</p>
    <Button1></Button1>
    </div>
  </CardContent>
  
</Card>
    </>
  )
}







export default Reply
