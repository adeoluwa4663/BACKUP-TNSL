import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "../../Styles/Faq.scss";

function Faq(props) {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="faq">
      <div>
        <h1>FAQ</h1>
      </div>
      <Accordion  flush open={open} toggle={toggle}>
        <AccordionItem >
          <AccordionHeader targetId="1">What is TNSL? </AccordionHeader>
          <AccordionBody accordionId="1">
            TNSL is a platform where you can learn any digital skills, receive
            mentorship from top rated mentors in each industry, connect with
            people from all over the world and also have access to job
            opportunities in the space.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            Do you have free trial?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            Yes, there&#39;s a 14 days free trial. This is for you to know and
            experience the value we offer any of our user. After this free trial
            you will have to subscribe to the platform to gain continued access.
            You can also cancel your membership anytime.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            How much is the subscription fee?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            The subscription fee is just $20 and your membership can be
            cancelled anytime.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">How does TNSL works?</AccordionHeader>
          <AccordionBody accordionId="3">
            Once you register on the platform, you are going to get access to
            the dashboard, where you get to pick the skillset of your choice.
            There&#39;s a free trial for you to benefit from and see the value we
            are offering. You also get access to weekly update for your
            practical mentorship on your skillset and also access to job
            opportunities.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faq;
