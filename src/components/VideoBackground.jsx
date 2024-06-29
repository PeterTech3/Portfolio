import '../assets/styles/home.scss';

export const VideoBackground = ({ src }) => {

    return (
        <div className="video-container">
            <video autoPlay loop muted className="video-background" id="backgroundVideo">
                <source src={src} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>
           
        </div>
    );
};