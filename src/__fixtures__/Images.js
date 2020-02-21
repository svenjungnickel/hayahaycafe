export const defaultImage = 'src';

export const childImageSharpFluid = {
    childImageSharp: {
        fluid: {
            aspectRatio: 1,
            src: 'src',
            srcSet: 'srcSet',
            sizes: '(max-width: 250px) 100vw, 250px',
        },
    },
};

export const childImageSharpFixed = {
    childImageSharp: {
        fixed: {
            width: 250,
            height: 250,
            src: 'src',
            srcSet: 'srcSet',
        },
    },
};
