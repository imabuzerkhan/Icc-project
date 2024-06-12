import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (


    <Accordion type="single" collapsible className=" grid grid-cols-2 gap-4  px-2 md:px-6 lg:px-12 xl:px-28 w-full py-2 md:py-0.5 ">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is mental health?</AccordionTrigger>
        <AccordionContent>
        Mental health refers to our emotional, psychological, and social well-being. It affects how we think, feel, and act..
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why is mental health important for students?</AccordionTrigger>
        <AccordionContent>
        Good mental health is essential for students as it helps them cope with stress, build healthy relationships, and perform well academically.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How can I recognize if I am experiencing a mental health issue?</AccordionTrigger>
        <AccordionContent>
        Symptoms may include persistent sadness, extreme mood swings, excessive worry, changes in sleeping or eating patterns, and difficulty concentrating.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Are there any resources available for students struggling with mental health in Nepal?

</AccordionTrigger>
        <AccordionContent>
        Yes, several organizations and hotlines provide mental health support, such as Transcultural Psychosocial Organization Nepal (TPO Nepal) and Koshish Nepal.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>How can I talk to someone about my mental health concerns?

</AccordionTrigger>
        <AccordionContent>
        Reach out to a trusted friend, family member, teacher, or counselor. Professional help is also available through therapists and mental health organizations.
        </AccordionContent>
      </AccordionItem>
      

      <AccordionItem value="item-6">
        <AccordionTrigger>How can I talk to someone about my mental health concerns?

</AccordionTrigger>
        <AccordionContent>
        Reach out to a trusted friend, family member, teacher, or counselor. Professional help is also available through therapists and mental health organizations.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-7">
        <AccordionTrigger>How can I talk to someone about my mental health concerns?

</AccordionTrigger>
        <AccordionContent>
        Reach out to a trusted friend, family member, teacher, or counselor. Professional help is also available through therapists and mental health organizations.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-8">
        <AccordionTrigger>How can I talk to someone about my mental health concerns?

</AccordionTrigger>
        <AccordionContent>
        Reach out to a trusted friend, family member, teacher, or counselor. Professional help is also available through therapists and mental health organizations.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}
