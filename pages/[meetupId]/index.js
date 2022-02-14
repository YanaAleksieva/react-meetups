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

// returning objectw where we describe all the dynamic segment values, e.g. all meetupIds in this case
export async function getStaticPaths() {
  return {
    fallback: false, // does paths contain all supported meetup Id values
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://thenomadvisor.com/wp-content/uploads/2019/04/wheretostayinvienna-780x520.jpg",
        id: meetupId,
        title: "Dummy Title",
        address: "Some stree, Some City, Unknown Country",
        description: "This is a dummy meetup",
      },
    },
  };
}

export default MeetupDetails;
