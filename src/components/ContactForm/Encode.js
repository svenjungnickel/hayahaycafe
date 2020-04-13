const Encode = (data) => {
    if ('object' !== typeof data) {
        return;
    }

    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

export default Encode;
