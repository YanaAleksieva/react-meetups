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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
