import {
  Card,
  CardContent,
 

  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import React from 'react'

const Rightcard = () => {
  return (
    <>
    <Card className="w-3/5" >
  <CardHeader  >
    <CardTitle>Your Relation </CardTitle>
   
  </CardHeader>
  <CardContent className="grid grid-cols-3  gap-4 px-4 "  >
    <div className="card px-2 py-2 shadow-sm "><h1>Hellow World</h1>
    <p>Lorem, one ipsum.</p>

    </div>
    <div className="card px-2 py-2 shadow-sm "><h1>Hellow World</h1>
    <p>Lorem, oe ipsum.</p> </div>
    <div className="card px-2 py-2 shadow-sm "> <h1>Hellow World</h1>
    <p>Lorem, one ipsum.</p></div>
  </CardContent>
  
</Card>
    </>
  )
}

export default Rightcard




