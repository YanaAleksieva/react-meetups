// our-domain.com/

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://thenomadvisor.com/wp-content/uploads/2019/04/wheretostayinvienna-780x520.jpg",
    address: "central Vienna",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.thetrainline.com/content/vul/hero-images/city/prague/1x.jpg",
    address: "central Prague",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image: "https://media.timeout.com/images/105211701/750/422/image.jpg",
    address: "central Rome",
    description: "This is a third meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// executed during pre-rendering process; func name can't be changed
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //number of sec next.js will wait until it regenerates this page for incoming request
  };
}

export default HomePage;
