const query =
    {
            bigscreen: { minWidth: 1824 },
            // bigscreen: { minWidth: 1025 },
            desktop: { minWidth: 1224, maxWidth: 1823 },
            // desktop: { minWidth: 769, maxWidth: 1024 },
            tablet: { minWidth: 481, maxWidth: 1224 },
            mobile: { maxWidth: 480 },
            // smallmobile: { maxWidth: 320 },
            retina: { minResolution: '2dppx' },
            portrait: { orientation: 'portrait' },
    };

export default query;
