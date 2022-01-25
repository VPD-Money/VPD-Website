const query =
    {
            bigscreen: { minWidth: 1025 },
            desktop: { minWidth: 769, maxWidth: 1024 },
            tablet: { minWidth: 481, maxWidth: 768 },
            mobile: { maxWidth: 480 },
            retina: { minResolution: '2dppx' },
            portrait: { orientation: 'portrait' },
    };

export default query;
