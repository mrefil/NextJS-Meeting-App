import MeetupDetail from '../../components/meetups/MeetupDetail';

function MettupDetails(context) {
  return (
      <MeetupDetail 
        image="https://techcrunch.com/wp-content/uploads/2017/02/meetup-logo-script-1200x630.png"
        title="A first meetup"
        address="Some address 5, 123456 Some City"
        description="A first meetup description"
      />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: '',
        id: '',
        title: '',
        address: '',
        description: ''
      }
    }
  }
}

export default MettupDetails;
