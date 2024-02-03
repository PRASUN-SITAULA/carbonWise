// sharedData.js
let userData = {};

module.exports = {
    setUserData: (household, lifestyleData, transportData) => {
        userData = {
            household,
            lifestyleData,
            transportData
        };
    },
    getUserData: () => userData
};
