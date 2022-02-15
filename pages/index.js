// our-domain.com/
import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of higly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// executed during pre-rendering process; func name can't be changed
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://admin:Admin123@cluster0.xkdkl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //number of sec next.js will wait until it regenerates this page for incoming request
  };
}

// runs on the server after deployment; func name can't be changed
/*
export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

      // fetch data from an API
    return {
        props: DUMMY_MEETUPS,
    };
}
*/

export default HomePage;
