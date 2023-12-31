import React from "react";
import Layout from "../Layout";
import '../styles/styles.css';
import '../styles/globals.css';
import HeadComponent from "../components/HeadComponent";
import BrowseContent from "../components/BrowseContent";

export default function Browse () {

    const browseMetadata = {
        title: 'Browse | Spotify Reads',
        description: 'Choose from thousands of titles in the Spotify audiobook collection.'
    }

    return (
        <Layout metadata={browseMetadata}>
            <HeadComponent metadata={browseMetadata}/>
            <BrowseContent />
        </Layout>
    );
};