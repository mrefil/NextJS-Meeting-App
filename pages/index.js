import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://techcrunch.com/wp-content/uploads/2017/02/meetup-logo-script-1200x630.png",
    address: "Some address 5, 123456 Some City",
    description: "This is a first meetup",
  },
];

function HomePage() {
  const [loaddedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])

  return <MeetupList meetups={loaddedMeetups} />;
}

export default HomePage;
