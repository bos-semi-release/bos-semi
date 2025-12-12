document.addEventListener('DOMContentLoaded', () => {
    fetch('videos.json')
        .then(response => response.json())
        .then(videos => {
            const videoGallery = document.getElementById('video-gallery');
            videos.forEach(videoData => {
                const videoCard = document.createElement('div');
                videoCard.className = 'video-card';

                const videoElement = document.createElement('video');
                videoElement.controls = true;
                videoElement.poster = videoData.poster_url;
                videoElement.preload = 'metadata';
                
                const sourceElement = document.createElement('source');
                sourceElement.src = videoData.video_url;
                sourceElement.type = 'video/mp4';
                
                videoElement.appendChild(sourceElement);

                const titleElement = document.createElement('h3');
                titleElement.textContent = videoData.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = videoData.description;

                videoCard.appendChild(videoElement);
                videoCard.appendChild(titleElement);
                videoCard.appendChild(descriptionElement);

                videoGallery.appendChild(videoCard);
            });
        })
        .catch(error => console.error('Error loading video data:', error));
});
