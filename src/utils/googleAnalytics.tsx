import ReactGA from 'react-ga';

ReactGA.initialize('UA-110182129-1');
let timeoutTrackSearch: any;

export const trackView = (viewName: string) => {
    ReactGA.pageview(viewName);
}

export const trackSearch = (searchText: string) => {
    clearTimeout(timeoutTrackSearch);

    timeoutTrackSearch = setTimeout(() => {
        ReactGA.event({
            category: "Search input",
            action: "Search in cheatsheet",
            label: searchText
        });
    }, 500);
}
