document.getElementById("gallery") &&
    new Macy({
        container: "#gallery",
        trueOrder: false,
        waitForimages: false,
        useOwnImageLoader: false,
        debug: true,
        mobileFirst: true,
        columns: 1,
        margin: {
            y:15,
            x:15
        },
        breakAt: {
            1600:6,
            1500:6,
            1200:5,
            1024:4,
            940:3,
            768:2,
            520:1
        }
    })
    