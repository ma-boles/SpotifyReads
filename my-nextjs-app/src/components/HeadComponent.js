import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ metadata }) {

    // checks if metadata id defined 
    if(!metadata || !metadata.title || !metadata.description) {
        // default values as needed
        metadata = {
            title: 'flow mode',
            description: 'Productivity tool utilizing audio from Spotify'
        }
    }
    return (
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>{metadata.title}</title>
            <meta name='description' content={metadata.description} />
        </Head>
    );
};

