import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Reply from "./Reply"

import React from 'react'
import Issue_box from "./Issue-box"

const  Issue = () => {
  return (
    <>
    <Card className="w-3/5 my-10 pb-4  "  >
    
  <CardHeader    >
    <CardTitle className="mb-4" > Lorem ipsum</CardTitle>
    <Issue_box  ></Issue_box>
    </CardHeader>
  
 
  <Reply></Reply>
</Card>

    </>
  )
}








export default Issue
