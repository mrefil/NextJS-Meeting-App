import NewMetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }
    return <NewMetupForm onAddMeetup={addMetupHandler} />
}

export default NewMeetupPage;