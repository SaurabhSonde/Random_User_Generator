import React from 'react';
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone, FaBirthdayCake} from "react-icons/fa";

const MyCard = ({details}) => {
return(
<Card>
<CardBody className="text-center">
<img height="150" width="150" alt="" className="rounded-circle img-thumbnail border-danger" src={details.picture?.large} />
<CardTitle className="text-primary">
<h4>
<span>{details.name?.title}</span>
<span>.{details.name?.first}</span>
<span> {details.name?.last}</span>
</h4>
</CardTitle>
<CardText>
<FaMapMarkedAlt />
<p>{details.location?.city}</p>
<FaPhone />
<p>{details.phone}</p>
<FaBirthdayCake />
<p>{details.dob?.age}</p>
<FaEnvelope />
<p>{details.email}</p>
</CardText>
</CardBody>
</Card>

)
}


export default MyCard;