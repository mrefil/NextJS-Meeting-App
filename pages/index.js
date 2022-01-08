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
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
