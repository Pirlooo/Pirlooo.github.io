(function () {
    'use strict';

    // Attach a play listener to a video element to pause all other videos when it starts.
    function attachPlayPauseBehavior(video) {
        if (video.__playPauseAttached) return;
        video.__playPauseAttached = true;

        video.addEventListener('play', (ev) => {
            const playing = ev.target;
            document.querySelectorAll('video').forEach((v) => {
                if (v !== playing && !v.paused) v.pause();
            });
        });
    }

    // Initialize for existing videos and observe for dynamically added videos.
    function init() {
        document.querySelectorAll('video').forEach(attachPlayPauseBehavior);

        const observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                for (const node of m.addedNodes) {
                    if (node.nodeType !== Node.ELEMENT_NODE) continue;
                    if (node.tagName === 'VIDEO') attachPlayPauseBehavior(node);
                    node.querySelectorAll && node.querySelectorAll('video').forEach(attachPlayPauseBehavior);
                }
            }
        });

        observer.observe(document.documentElement || document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();(function () {
    'use strict';

    // Attach a play listener to a video element to pause all other videos when it starts.
    function attachPlayPauseBehavior(video) {
        if (video.__playPauseAttached) return;
        video.__playPauseAttached = true;

        video.addEventListener('play', (ev) => {
            const playing = ev.target;
            document.querySelectorAll('video').forEach((v) => {
                if (v !== playing && !v.paused) v.pause();
            });
        });
    }

    // Initialize for existing videos and observe for dynamically added videos.
    function init() {
        document.querySelectorAll('video').forEach(attachPlayPauseBehavior);

        const observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                for (const node of m.addedNodes) {
                    if (node.nodeType !== Node.ELEMENT_NODE) continue;
                    if (node.tagName === 'VIDEO') attachPlayPauseBehavior(node);
                    node.querySelectorAll && node.querySelectorAll('video').forEach(attachPlayPauseBehavior);
                }
            }
        });

        observer.observe(document.documentElement || document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
