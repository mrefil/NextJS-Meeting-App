import {useRouter} from 'next/router';
import Head from 'next/head';
import NewMetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';

function NewMeetupPage() {
    const router = useRouter();
    async function addMetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');

    }
    return <Fragment>
        <Head>
            <title>Add a new meetup</title>
            <meta name="description" content="add a new meetup" />
        </Head>
        <NewMetupForm onAddMeetup={addMetupHandler} />
        </Fragment>
}

export default NewMeetupPage;