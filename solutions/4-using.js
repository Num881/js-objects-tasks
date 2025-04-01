// BEGIN
const getDomainInfo = (nameWebsite) => {
    let scheme = 'http';
    let name = nameWebsite;

    if (nameWebsite.startsWith('http://')) {
        scheme = 'http';
        name = nameWebsite.replace('http://', '');
    }else if (nameWebsite.startsWith('https://')) {
        scheme = 'https';
        name = nameWebsite.replace('https://', '');
    }

    return {scheme, name};
};
export default getDomainInfo;
// END