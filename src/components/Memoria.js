import React from "react";
import PropTypes from "prop-types";
import '../App.css'
import '../assets/css/video.css'

const YoutubeEmbed = ({ embedId }) => (
    <div className="video">
        <h1 className="titulo">En Su Memoria</h1>
        <div className="video-responsive">
            <iframe
                width="653"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;