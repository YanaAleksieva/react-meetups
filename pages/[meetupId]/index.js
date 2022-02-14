// our-domain.com/[meetupId]

import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://thenomadvisor.com/wp-content/uploads/2019/04/wheretostayinvienna-780x520.jpg"
      title="Dummy Title"
      address="Some stree, Some City, Unknown Country"
      description="This is a dummy meetup"
    />
  );
};

export default MeetupDetails;
