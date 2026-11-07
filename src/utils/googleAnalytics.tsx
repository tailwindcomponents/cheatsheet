import ReactGA from 'react-ga';

// NOTE: Universal Analytics (UA-*) stopped processing data in July 2023.
// Migrating to GA4 needs a measurement ID, so tracking is kept as-is for now.
ReactGA.initialize('UA-110182129-1');
let timeoutTrackSearch: ReturnType<typeof setTimeout> | undefined;

export const trackView = (viewName: string) => {
    ReactGA.pageview(viewName);
}

export const trackSearch = (searchText: string) => {
    if (timeoutTrackSearch !== undefined) {
        clearTimeout(timeoutTrackSearch);
    }

    timeoutTrackSearch = setTimeout(() => {
        ReactGA.event({
            category: "Search input",
            action: "Search in cheatsheet",
            label: searchText
        });
    }, 500);
}
